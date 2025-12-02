// Determine environment based on hostname
const isDev = window.location.hostname === 'localhost' ||
              window.location.hostname.includes('dev') ||
              window.location.hostname.includes('127.0.0.1');

// Use prod API for avatar gallery to get more data
const API_BASE_URL = 'https://api.fuzeapp.services';

const PROFILE_BASE_URL = isDev
  ? 'https://dev-web.fuzeapp.services'
  : 'https://fuze.io';

// Fetch avatars from real API
export const fetchAvatars = async (page = 0, pageSize = 20) => {
  try {
    // API uses 1-based pagination
    const apiPage = page + 1;
    const response = await fetch(
      `${API_BASE_URL}/avatar-gallery/?page_size=${pageSize}&page=${apiPage}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Transform API response to match our component structure
    const avatars = data.results.map((avatar) => ({
      id: avatar.id,
      name: avatar.nickname,
      level: avatar.level,
      game: avatar.introduction || 'No introduction',
      imageUrl: avatar.avatar_full_img_url,
      profileUrl: `${PROFILE_BASE_URL}/profile/${avatar.nickname}`,
      backgroundColor: avatar.background_custom_color,
      message: avatar.message,
      coverImageUrl: avatar.cover_img_url
    }));

    return {
      avatars,
      hasMore: !!data.next, // Check if there's a next page
      total: data.count
    };
  } catch (error) {
    console.error('Error fetching avatars:', error);
    throw error;
  }
};
