import './AvatarCard.css';

const backgroundColors = [
  '#3d5a6b', // blue-grey
  '#6b5d47', // brown
  '#4a7d7c', // teal
  '#4a5f7d', // dark blue
  '#5a6b4a', // olive green
  '#6b4a5a', // purple
  '#7d5a4a', // rust
  '#4a6b5a', // sea green
];

const statusMessages = [
  "My Top3 game!",
  "Now playing...",
  "It's awesome!",
  "My top pick!",
  "Just finished!",
  "Playing daily",
  "Love this!",
  "Currently enjoying"
];

function AvatarCard({ avatar, index = 0 }) {
  const handleClick = () => {
    window.open(avatar.profileUrl, '_blank', 'noopener,noreferrer');
  };

  const bgColor = backgroundColors[index % backgroundColors.length];
  const statusMessage = statusMessages[index % statusMessages.length];

  return (
    <div className="avatar-card" onClick={handleClick} style={{ background: bgColor }}>
      <div className="card-header">
        <span className="card-name">{avatar.name}</span>
        <span className="card-level">Lv {avatar.level}</span>
      </div>

      <div className="card-avatar-container">
        <img src={avatar.imageUrl} alt={avatar.name} className="card-avatar-image" />
      </div>

      <div className="card-footer">
        <span className="card-status">{statusMessage}</span>
        <div className="card-game-icon">
          <div className="game-thumbnail"></div>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
