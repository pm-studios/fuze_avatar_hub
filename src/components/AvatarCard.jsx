import './AvatarCard.css';

function AvatarCard({ avatar }) {
  const handleClick = () => {
    window.location.href = avatar.profileUrl;
  };

  return (
    <div className="avatar-card" onClick={handleClick}>
      <div className="avatar-image-container">
        <img src={avatar.imageUrl} alt={avatar.name} className="avatar-image" />
      </div>
      <div className="avatar-info">
        <div className="avatar-name-level">
          <span className="avatar-name">{avatar.name}</span>
          <span className="avatar-level">Lv.{avatar.level}</span>
        </div>
        <div className="avatar-game">
          Playing: {avatar.game}
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
