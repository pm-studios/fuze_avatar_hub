// Dummy avatar data
export const generateAvatars = (page = 0, pageSize = 20) => {
  const avatars = [];
  const names = ['Cococat', 'Neonim', 'Pixelus', 'Gameron', 'Avatrix', 'Cybern', 'Digiton', 'Fuzenix', 'Gamerz', 'Heromax'];
  const games = ['Pokemon Legend Z-A', 'League of Legends', 'Valorant', 'Overwatch 2', 'Minecraft', 'Fortnite', 'PUBG', 'Call of Duty', 'Apex Legends', 'Counter-Strike'];

  const startIndex = page * pageSize;

  for (let i = 0; i < pageSize; i++) {
    const id = startIndex + i;
    avatars.push({
      id: id,
      name: names[id % names.length],
      level: Math.floor(Math.random() * 100) + 1,
      game: games[id % games.length],
      imageUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`,
      profileUrl: `https://avatar.fuze.io/profile/${id}`
    });
  }

  return avatars;
};

// Simulate API call with delay
export const fetchAvatars = (page = 0, pageSize = 20) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateAvatars(page, pageSize));
    }, 500); // Simulate network delay
  });
};
