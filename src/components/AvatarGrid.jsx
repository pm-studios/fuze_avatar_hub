import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import AvatarCard from './AvatarCard';
import SkeletonCard from './SkeletonCard';
import { fetchAvatars } from '../data/avatars';
import './AvatarGrid.css';

function AvatarGrid({ onOpenModal }) {
  const [avatars, setAvatars] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastAvatarElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    let cancelled = false;

    const loadAvatars = async () => {
      setLoading(true);
      try {
        const { avatars: newAvatars, hasMore: moreAvailable } = await fetchAvatars(page, 16);

        if (!cancelled) {
          setAvatars(prev => {
            // Prevent duplicates by checking if avatar IDs already exist
            const existingIds = new Set(prev.map(a => a.id));
            const uniqueNewAvatars = newAvatars.filter(a => !existingIds.has(a.id));
            return [...prev, ...uniqueNewAvatars];
          });
          setHasMore(moreAvailable);
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

    loadAvatars();

    return () => {
      cancelled = true;
    };
  }, [page]);

  // Memoize avatar cards to prevent unnecessary re-renders
  // Trigger loading 8 items before the end for smoother experience
  const avatarCards = useMemo(() => {
    return avatars.map((avatar, index) => {
      // Trigger point: 8 items before the end
      // This ensures we load next page before user reaches the end
      const triggerIndex = Math.max(0, avatars.length - 8);
      const isTrigger = index === triggerIndex;

      return (
        <AvatarCard
          key={avatar.id}
          avatar={avatar}
          index={index}
          ref={isTrigger ? lastAvatarElementRef : null}
        />
      );
    });
  }, [avatars, lastAvatarElementRef]);

  return (
    <>
      <section className="avatar-grid-section">
        <h2 className="section-title">FUZE Player Styles</h2>

        <div className="avatar-grid">
          {avatarCards}

          {loading && Array.from({ length: 16 }).map((_, index) => (
            <SkeletonCard key={`skeleton-${page}-${index}`} />
          ))}
        </div>

        <div className="create-avatar-section">
          <button className="create-avatar-btn" onClick={onOpenModal}>
            Create Avatar for Free
          </button>
        </div>
      </section>
    </>
  );
}

export default AvatarGrid;
