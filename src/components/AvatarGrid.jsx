import { useState, useEffect, useRef, useCallback } from 'react';
import AvatarCard from './AvatarCard';
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
        const newAvatars = await fetchAvatars(page, 20);
        setAvatars(prev => [...prev, ...newAvatars]);

        // For demo purposes, we'll allow infinite scroll up to page 50
        if (page >= 50) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error loading avatars:', error);
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
      </div>

      {loading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading avatars...</p>
        </div>
      )}

      <footer className="avatar-hub-footer">
        <span className="footer-link">avatar.fuze.io</span>
        <button className="create-avatar-btn">아바타 만들기</button>
      </footer>
    </div>
  );
}

export default AvatarGrid;
