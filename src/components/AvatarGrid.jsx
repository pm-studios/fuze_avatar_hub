import { useState, useEffect, useRef } from 'react';
import AvatarCard from './AvatarCard';
import SkeletonCard from './SkeletonCard';
import { fetchAvatars } from '../data/avatars';
import { trackButtonClick, track } from '../utils/mixpanel';
import './AvatarGrid.css';

// Determine environment based on hostname
const isDev = window.location.hostname === 'localhost' ||
              window.location.hostname.includes('dev') ||
              window.location.hostname.includes('127.0.0.1') ||
              window.location.hostname === 'd3cbg89fw3t9m6.cloudfront.net';

const AVATAR_CDN_BASE = isDev
  ? 'https://d2l90i53wjxgno.cloudfront.net/oz-avatar/'
  : 'https://d14h4a2hnt5eea.cloudfront.net/public/avatar/';

const API_BASE_URL = isDev
  ? 'https://dev-api.fuzeapp.services'
  : 'https://api.fuzeapp.services';

const OZ_AVATAR_GRID_SCRIPT_URL = `${AVATAR_CDN_BASE}oz-avatar-grid.js`;

// 모듈 스크립트 1회만 로드
let ozGridScriptLoaded = false;
function ensureOzGridScript() {
  if (ozGridScriptLoaded) return;
  ozGridScriptLoaded = true;
  const script = document.createElement('script');
  script.type = 'module';
  script.src = OZ_AVATAR_GRID_SCRIPT_URL;
  document.head.appendChild(script);
}

const ITEMS_PER_PAGE = 24;

function AvatarGrid({ onOpenModal }) {
  // Get initial page from URL
  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page'), 10);
    return (page && page > 0) ? page - 1 : 0;
  };

  const [avatars, setAvatars] = useState([]);
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const gridElRef = useRef(null);
  const cardRefsRef = useRef(new Map());

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const currentPageNum = currentPage + 1;

  // oz-avatar-grid 모듈 스크립트 로드 (한 번만)
  useEffect(() => {
    ensureOzGridScript();
  }, []);

  // 페이지 데이터 fetch
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    cardRefsRef.current.clear();
    fetchAvatars(currentPage, ITEMS_PER_PAGE).then(({ avatars, total }) => {
      if (cancelled) return;
      setAvatars(avatars);
      setTotalCount(total);
      setLoading(false);
    }).catch(err => {
      if (cancelled) return;
      console.error('[AvatarGrid] fetch 실패:', err);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [currentPage]);

  // 카드 mount 후 oz-avatar-grid에 slots 전달.
  // 렌더 다음 프레임에 ref가 모두 채워지고 customElements.define도 끝난 상태에서 호출.
  useEffect(() => {
    if (avatars.length === 0) return;
    let cancelled = false;
    customElements.whenDefined('oz-avatar-grid').then(() => {
      if (cancelled) return;
      requestAnimationFrame(() => {
        if (cancelled) return;
        const grid = gridElRef.current;
        if (!grid || !grid.setSlots) return;
        const slots = avatars
          .map(a => ({
            id: String(a.id),
            presetUrl: `${API_BASE_URL}/accounts/${a.id}/avatar-json/`,
            element: cardRefsRef.current.get(String(a.id)),
          }))
          .filter(s => s.element);
        grid.setSlots(slots);
      });
    });
    return () => { cancelled = true; };
  }, [avatars]);

  // oz-avatar-grid 이벤트 → PNG fallback
  useEffect(() => {
    const grid = gridElRef.current;
    if (!grid) return;

    const insertFallback = (id) => {
      const slot = cardRefsRef.current.get(id);
      if (!slot) return;
      // 이미 fallback 삽입된 경우 중복 방지
      if (slot.querySelector('img')) return;
      const fallbackUrl = slot.dataset.fallbackImg;
      if (!fallbackUrl) return;
      const img = document.createElement('img');
      img.src = fallbackUrl;
      img.alt = '';
      img.loading = 'eager';
      img.decoding = 'async';
      slot.appendChild(img);
    };

    const onError = (e) => {
      const id = e.detail?.id;
      if (id) insertFallback(id);
    };
    const onContextLost = () => {
      // 모든 카드 PNG fallback
      for (const id of cardRefsRef.current.keys()) {
        insertFallback(id);
      }
    };

    grid.addEventListener('slot-error', onError);
    grid.addEventListener('gl-context-lost', onContextLost);
    return () => {
      grid.removeEventListener('slot-error', onError);
      grid.removeEventListener('gl-context-lost', onContextLost);
    };
  }, [avatars]);

  // 페이지 전환
  const goToPage = (pageNum) => {
    track('Page Navigation', { page_number: pageNum });
    setCurrentPage(pageNum - 1);
    const url = new URL(window.location);
    if (pageNum === 1) url.searchParams.delete('page');
    else url.searchParams.set('page', pageNum);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    trackButtonClick('create_my_own_avatar_cta');
    onOpenModal();
  };

  // 페이지네이션 버튼
  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 4;
    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) buttons.push(i);
    } else if (currentPageNum <= 3) {
      for (let i = 1; i <= maxVisiblePages; i++) buttons.push(i);
      buttons.push('...');
      buttons.push(totalPages);
    } else if (currentPageNum >= totalPages - 2) {
      buttons.push(1);
      buttons.push('...');
      for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) buttons.push(i);
    } else {
      buttons.push(1);
      buttons.push('...');
      for (let i = currentPageNum - 1; i <= currentPageNum + 1; i++) buttons.push(i);
      buttons.push('...');
      buttons.push(totalPages);
    }
    return buttons;
  };

  return (
    <>
      <section className="avatar-grid-section">
        <h2 className="section-title">Style Gallery</h2>

        <div className="avatar-grid-container">
          <div className="avatar-grid">
            {avatars.map((avatar, index) => (
              <AvatarCard
                key={avatar.id}
                avatar={avatar}
                index={index}
                registerSlot={(el) => {
                  if (el) cardRefsRef.current.set(String(avatar.id), el);
                  else cardRefsRef.current.delete(String(avatar.id));
                }}
                onHover={(hover) => {
                  gridElRef.current?.setHover?.(String(avatar.id), hover);
                }}
              />
            ))}
            {loading && Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <SkeletonCard key={`skeleton-${currentPage}-${i}`} />
            ))}
          </div>

          <oz-avatar-grid
            ref={gridElRef}
            base-url={AVATAR_CDN_BASE}
          />
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
