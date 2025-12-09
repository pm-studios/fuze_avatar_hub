import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import AvatarCard from './AvatarCard';
import SkeletonCard from './SkeletonCard';
import { fetchAvatars } from '../data/avatars';
import { trackButtonClick, track } from '../utils/mixpanel';
import './AvatarGrid.css';

function AvatarGrid({ onOpenModal }) {
  // Get initial page from URL
  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page'), 10);
    return (page && page > 0) ? page - 1 : 0;
  };

  const [avatars, setAvatars] = useState([]);
  const [currentPage, setCurrentPage] = useState(getInitialPage); // Which page (0-indexed) for pagination
  const [chunkPage, setChunkPage] = useState(0); // Which chunk within the current page (0-indexed)
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const observer = useRef();

  const ITEMS_PER_PAGE = 80; // Total items per page
  const CHUNK_SIZE = 20; // Items to load per chunk (infinite scroll)
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const currentPageNum = currentPage + 1;

  const lastAvatarElementRef = useCallback(node => {
    if (loading) return;
    // Only use infinite scroll within the current page (up to 100 items)
    if (avatars.length >= ITEMS_PER_PAGE) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && avatars.length < ITEMS_PER_PAGE) {
        setChunkPage(prevChunkPage => prevChunkPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, avatars.length, ITEMS_PER_PAGE]);

  // Load chunks within the current page
  useEffect(() => {
    let cancelled = false;

    const loadChunk = async () => {
      setLoading(true);

      try {
        // Calculate the actual API page and offset
        // API page starts from the beginning of the pagination page
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const chunkStartIndex = startIndex + (chunkPage * CHUNK_SIZE);
        const apiPage = Math.floor(chunkStartIndex / CHUNK_SIZE) + 1;

        const { avatars: newAvatars, hasMore: moreAvailable, total } = await fetchAvatars(apiPage - 1, CHUNK_SIZE);

        if (!cancelled) {
          if (chunkPage === 0) {
            // First chunk of the page - replace all avatars
            setAvatars(newAvatars);
          } else {
            // Subsequent chunks - append to existing avatars
            setAvatars(prev => {
              const existingIds = new Set(prev.map(a => a.id));
              const uniqueNewAvatars = newAvatars.filter(a => !existingIds.has(a.id));
              return [...prev, ...uniqueNewAvatars];
            });
          }

          // Check if we have more items within current page
          const currentPageItemsLoaded = (chunkPage + 1) * CHUNK_SIZE;
          setHasMore(moreAvailable && currentPageItemsLoaded < ITEMS_PER_PAGE);
          setTotalCount(total);
        }
      } catch (error) {
        if (!cancelled) {
          setHasMore(false);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadChunk();

    return () => {
      cancelled = true;
    };
  }, [currentPage, chunkPage, CHUNK_SIZE, ITEMS_PER_PAGE]);

  // Handle page navigation
  const goToPage = (pageNum) => {
    track('Page Navigation', { page_number: pageNum });
    setCurrentPage(pageNum - 1);
    setChunkPage(0); // Reset to first chunk
    setAvatars([]); // Clear current avatars

    // Update URL with page number
    const url = new URL(window.location);
    if (pageNum === 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', pageNum);
    }
    window.history.pushState({}, '', url);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle CTA button click
  const handleCtaClick = () => {
    trackButtonClick('create_my_own_avatar_cta');
    onOpenModal();
  };

  // Generate pagination buttons
  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 4;

    if (totalPages <= maxVisiblePages + 2) {
      // Show all pages if total is small enough
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      if (currentPageNum <= 3) {
        // Near the beginning: show 1, 2, 3, 4, ..., last
        for (let i = 1; i <= maxVisiblePages; i++) {
          buttons.push(i);
        }
        buttons.push('...');
        buttons.push(totalPages);
      } else if (currentPageNum >= totalPages - 2) {
        // Near the end: show 1, ..., last-3, last-2, last-1, last
        buttons.push(1);
        buttons.push('...');
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          buttons.push(i);
        }
      } else {
        // Middle: show 1, ..., current-1, current, current+1, ..., last
        buttons.push(1);
        buttons.push('...');
        for (let i = currentPageNum - 1; i <= currentPageNum + 1; i++) {
          buttons.push(i);
        }
        buttons.push('...');
        buttons.push(totalPages);
      }
    }

    return buttons;
  };

  // Memoize avatar cards to prevent unnecessary re-renders
  const avatarCards = useMemo(() => {
    return avatars.map((avatar, index) => {
      // Trigger point: at the 12th item from the start of current chunk
      // This means when user scrolls to the 12th item, start loading next chunk
      const currentChunkStartIndex = chunkPage * CHUNK_SIZE;
      const triggerIndex = currentChunkStartIndex + 11; // 12th item (0-indexed)
      const isTrigger = index === triggerIndex && avatars.length < ITEMS_PER_PAGE;

      return (
        <AvatarCard
          key={avatar.id}
          avatar={avatar}
          index={index}
          ref={isTrigger ? lastAvatarElementRef : null}
        />
      );
    });
  }, [avatars, lastAvatarElementRef, chunkPage, CHUNK_SIZE, ITEMS_PER_PAGE]);

  return (
    <>
      <section className="avatar-grid-section">
        <h2 className="section-title">Style Gallery</h2>

        <div className="avatar-grid">
          {avatarCards}

          {loading && Array.from({ length: CHUNK_SIZE }).map((_, index) => (
            <SkeletonCard key={`skeleton-${currentPage}-${chunkPage}-${index}`} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages >= 1 && (
          <div className="pagination">
            <button
              className="pagination-arrow"
              onClick={() => goToPage(currentPageNum - 1)}
              disabled={currentPageNum === 1}
            >
              ‹
            </button>

            {getPaginationButtons().map((btn, index) => (
              btn === '...' ? (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
              ) : (
                <button
                  key={btn}
                  className={`pagination-btn ${currentPageNum === btn ? 'active' : ''}`}
                  onClick={() => goToPage(btn)}
                >
                  {btn}
                </button>
              )
            ))}

            <button
              className="pagination-arrow"
              onClick={() => goToPage(currentPageNum + 1)}
              disabled={currentPageNum === totalPages}
            >
              ›
            </button>
          </div>
        )}

        {/* Create Avatar CTA */}
        {!loading && avatars.length > 0 && (
          <div className="create-avatar-cta">
            <p className="cta-text">Feeling inspired? Now create your own!</p>
            <button className="cta-button" onClick={handleCtaClick}>
              Create My Own Avatar
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default AvatarGrid;
