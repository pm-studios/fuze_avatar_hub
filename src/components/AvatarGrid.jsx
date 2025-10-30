import { useState, useEffect, useRef, useCallback } from 'react';
import AvatarCard from './AvatarCard';
import SkeletonCard from './SkeletonCard';
import { fetchAvatars } from '../data/avatars';
import './AvatarGrid.css';

function AvatarGrid() {
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
    const loadAvatars = async () => {
      setLoading(true);
      try {
        const { avatars: newAvatars, hasMore: moreAvailable } = await fetchAvatars(page, 20);
        setAvatars(prev => [...prev, ...newAvatars]);
        setHasMore(moreAvailable);
      } catch (error) {
        console.error('Error loading avatars:', error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    loadAvatars();
  }, [page]);

  return (
    <div className="avatar-grid-container">
      <header className="avatar-hub-header">
        <div className="logo-section">
          <h1 className="logo">FUZE</h1>
          <p className="tagline">Share with the global gaming community</p>
        </div>
      </header>

      <div className="avatar-grid">
        {avatars.map((avatar, index) => {
          if (avatars.length === index + 1) {
            return (
              <div ref={lastAvatarElementRef} key={avatar.id}>
                <AvatarCard avatar={avatar} />
              </div>
            );
          } else {
            return <AvatarCard key={avatar.id} avatar={avatar} />;
          }
        })}

        {loading && Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={`skeleton-${page}-${index}`} />
        ))}
      </div>

      <footer className="avatar-hub-footer">
        <span className="footer-link">avatar.fuze.io</span>
        <button className="create-avatar-btn">아바타 만들기</button>
      </footer>
    </div>
  );
}

export default AvatarGrid;
