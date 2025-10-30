const API_BASE_URL = 'https://dev-api.fuzeapp.services';
const PROFILE_BASE_URL = 'https://dev-web.fuzeapp.services';

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
      profileUrl: `${PROFILE_BASE_URL}/profile/${avatar.nickname}`
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
