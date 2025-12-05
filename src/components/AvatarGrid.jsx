import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import AvatarCard from './AvatarCard';
import SkeletonCard from './SkeletonCard';
import { fetchAvatars } from '../data/avatars';
import './AvatarGrid.css';

function AvatarGrid({ onOpenModal }) {
  const [avatars, setAvatars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Which page (0-indexed) for pagination
  const [chunkPage, setChunkPage] = useState(0); // Which chunk within the current page (0-indexed)
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const observer = useRef();

  const ITEMS_PER_PAGE = 100; // Total items per page
  const CHUNK_SIZE = 24; // Items to load per chunk (infinite scroll)
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
        console.error('Error loading avatars:', error);
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
    setCurrentPage(pageNum - 1);
    setChunkPage(0); // Reset to first chunk
    setAvatars([]); // Clear current avatars
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate pagination buttons
  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 7;

    if (totalPages <= maxButtons) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Always show first page
      buttons.push(1);

      if (currentPageNum > 3) {
        buttons.push('...');
      }

      // Show current page and neighbors
      const start = Math.max(2, currentPageNum - 1);
      const end = Math.min(totalPages - 1, currentPageNum + 1);

      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }

      if (currentPageNum < totalPages - 2) {
        buttons.push('...');
      }

      // Always show last page
      if (totalPages > 1) {
        buttons.push(totalPages);
      }
    }

    return buttons;
  };

  // Memoize avatar cards to prevent unnecessary re-renders
  const avatarCards = useMemo(() => {
    return avatars.map((avatar, index) => {
      // Trigger point: at the 8th item from the start of current chunk
      // This means when user scrolls to the 8th item, start loading next chunk
      const currentChunkStartIndex = chunkPage * CHUNK_SIZE;
      const triggerIndex = currentChunkStartIndex + 7; // 8th item (0-indexed)
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
        <h2 className="section-title">FUZE Player Styles</h2>

        <div className="avatar-grid">
          {avatarCards}

          {loading && Array.from({ length: CHUNK_SIZE }).map((_, index) => (
            <SkeletonCard key={`skeleton-${currentPage}-${chunkPage}-${index}`} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && avatars.length >= ITEMS_PER_PAGE && (
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
        {avatars.length >= ITEMS_PER_PAGE && (
          <div className="create-avatar-cta">
            <p className="cta-text">Feeling inspired? Now create your own!</p>
            <button className="cta-button" onClick={onOpenModal}>
              Create My Own Avatar
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default AvatarGrid;
