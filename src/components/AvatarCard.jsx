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

const gameCovers = [
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co9rk1.webp",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/coaend.webp",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/coabe0.webp",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/coa5zt.webp",
  "https://images.igdb.com/igdb/image/upload/t_cover_big/co9yvu.webp"
];

/**
 * Convert background_custom_color (hex or decimal string) to CSS ARGB color
 * @param {string} colorValue - Color value like "0xFF6B5A36" or decimal string
 * @returns {string} CSS color in rgba format
 */
const convertToArgbColor = (colorValue) => {
  if (!colorValue) return null;

  let colorInt;

  // Handle hex string (e.g., "0xFF6B5A36")
  if (typeof colorValue === 'string' && colorValue.startsWith('0x')) {
    colorInt = parseInt(colorValue, 16);
  }
  // Handle decimal string or number
  else {
    colorInt = parseInt(colorValue, 10);
  }

  // Extract ARGB components
  const a = ((colorInt >> 24) & 0xFF) / 255; // Alpha
  const r = (colorInt >> 16) & 0xFF;         // Red
  const g = (colorInt >> 8) & 0xFF;          // Green
  const b = colorInt & 0xFF;                 // Blue

  // If alpha is 0 or very low (transparent), return null to use default color
  if (a < 0.01) return null;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

function AvatarCard({ avatar, index = 0 }) {
  const handleClick = () => {
    window.open(avatar.profileUrl, '_blank', 'noopener,noreferrer');
  };

  // Use custom background color if available, otherwise use dark grey
  const customColor = avatar.backgroundColor ? convertToArgbColor(avatar.backgroundColor) : null;
  const bgColor = customColor || '#2a2a2a';
  const statusMessage = statusMessages[index % statusMessages.length];
  const gameCover = gameCovers[index % gameCovers.length];

  return (
    <div className="avatar-card" onClick={handleClick} style={{ background: bgColor }}>
      <div className="card-header">
        <div className="card-header-text">
          <span className="card-name">{avatar.name}</span>
          <span className="card-level">Lv {avatar.level}</span>
        </div>
      </div>

      <div className="card-avatar-container">
        <img src={avatar.imageUrl} alt={avatar.name} className="card-avatar-image" />
      </div>

      <div className="card-footer" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${bgColor}` }}>
        <span className="card-status">{statusMessage}</span>
        <div className="card-game-icon">
          <img src={gameCover} alt="Game cover" className="game-thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
