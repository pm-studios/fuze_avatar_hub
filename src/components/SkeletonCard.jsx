import './SkeletonCard.css';

function SkeletonCard() {
  return (
    <div className="avatar-card skeleton-card">
      <div className="card-header">
        <span className="skeleton-text skeleton-name"></span>
        <span className="skeleton-text skeleton-level"></span>
      </div>

      <div className="card-avatar-container">
        <div className="skeleton skeleton-image"></div>
      </div>

      <div className="card-footer">
        <span className="skeleton-text skeleton-status"></span>
        <div className="skeleton-text skeleton-icon"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
