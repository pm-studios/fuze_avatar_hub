import './SkeletonCard.css';

function SkeletonCard() {
  return (
    <div className="avatar-card skeleton-card">
      <div className="avatar-image-container skeleton">
        <div className="skeleton-image"></div>
      </div>
      <div className="avatar-info">
        <div className="avatar-name-level">
          <span className="skeleton-text skeleton-name"></span>
          <span className="skeleton-text skeleton-level"></span>
        </div>
        <div className="avatar-game">
          <span className="skeleton-text skeleton-game"></span>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
