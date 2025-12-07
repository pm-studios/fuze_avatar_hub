import { forwardRef } from 'react';
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

// Fallback data for avatars without message or cover image
const defaultStatusMessages = [
  "My Top3 game!",
  "Now playing...",
  "It's awesome!",
  "My top pick!",
  "Just finished!",
  "Playing daily",
  "Love this!",
  "Currently enjoying"
];

const defaultGameCovers = [
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

  // Handle hex string (e.g., "0xFF6B5A36" or "0XFFFFFFFF")
  if (typeof colorValue === 'string' && colorValue.toLowerCase().startsWith('0x')) {
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

const AvatarCard = forwardRef(({ avatar, index = 0 }, ref) => {
  const handleClick = () => {
    window.open(avatar.profileUrl, '_blank', 'noopener,noreferrer');
  };

  // Use custom background color if available, otherwise use dark grey
  const customColor = avatar.backgroundColor ? convertToArgbColor(avatar.backgroundColor) : null;
  const baseColor = customColor || '#2a2a2a';

  // Create layered gradient background with depth
  // Multiple overlapping gradients create a sense of space and atmosphere
  const createDepthGradient = (color) => {
    return `
      radial-gradient(ellipse at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
      radial-gradient(ellipse at 85% 75%, rgba(255, 255, 255, 0.12) 0%, transparent 45%),
      radial-gradient(ellipse at 70% 80%, rgba(0, 0, 0, 0.25) 0%, transparent 50%),
      ${color}
    `.trim();
  };

  const bgGradient = createDepthGradient(baseColor);

  // Convert baseColor to rgba with transparency and brightness adjustment for footer
  const getColorWithAlpha = (color, alpha, brightnessIncrease = 0) => {
    let r, g, b;

    // If color is already rgba, extract rgb parts
    if (color.startsWith('rgba')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        r = parseInt(match[1]);
        g = parseInt(match[2]);
        b = parseInt(match[3]);
      }
    }
    // If color is hex, convert to rgba
    else if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    }
    else {
      // Fallback to black
      r = g = b = 0;
    }

    // Increase brightness by percentage (e.g., 0.2 = 20% brighter)
    if (brightnessIncrease > 0) {
      r = Math.min(255, Math.round(r + (255 - r) * brightnessIncrease));
      g = Math.min(255, Math.round(g + (255 - g) * brightnessIncrease));
      b = Math.min(255, Math.round(b + (255 - b) * brightnessIncrease));
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const footerBgColor = getColorWithAlpha(baseColor, 0.4, 0.2);

  // Calculate text color based on background brightness
  const getTextColor = (color) => {
    let r, g, b;

    // If color is already rgba, extract rgb parts
    if (color.startsWith('rgba')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        r = parseInt(match[1]);
        g = parseInt(match[2]);
        b = parseInt(match[3]);
      }
    }
    // If color is hex, convert to rgba
    else if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    }
    else {
      // Fallback to white text for unknown color format
      return 'white';
    }

    // Calculate brightness using the provided formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 186 ? "white" : "black";
  };

  const textColor = getTextColor(baseColor);

  // Use real data if available, otherwise use fallback
  const statusMessage = avatar.message || defaultStatusMessages[index % defaultStatusMessages.length];
  const gameCover = avatar.coverImageUrl || defaultGameCovers[index % defaultGameCovers.length];

  return (
    <div
      ref={ref}
      className="avatar-card"
      onClick={handleClick}
      style={{
        background: bgGradient
      }}
    >
      <div className="card-header">
        <div className="card-header-text">
          <span className="card-name" style={{ color: textColor }}>{avatar.name}</span>
          <span className="card-level" style={{ color: textColor }}>Lv {avatar.level}</span>
        </div>
      </div>

      <div className="card-avatar-container">
        <img
          src={avatar.imageUrl}
          alt={avatar.name}
          className="card-avatar-image"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="card-footer" style={{ background: footerBgColor }}>
        <div className="card-status-wrapper">
          <span className="card-status card-status-default" style={{ color: textColor }}>{statusMessage}</span>
          {avatar.gameName && (
            <span className="card-status card-status-game" style={{ color: textColor }}>{avatar.gameName}</span>
          )}
        </div>
        <div className="card-game-icon">
          <img src={gameCover} alt="Game cover" className="game-thumbnail" loading="lazy" />
        </div>
      </div>
    </div>
  );
});

AvatarCard.displayName = 'AvatarCard';

export default AvatarCard;
