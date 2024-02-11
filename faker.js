// Function to generate a random game entry
const generateGameEntry = (id) => {
  const platforms = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox Series X",
    "Xbox One",
    "Nintendo Switch",
    "Nintendo 3DS",
    "iOS",
    "Android",
    "Mac",
    "Linux",
    "Steam",
    "Google Stadia",
    "Amazon Luna",
    "Oculus Rift",
    "HTC Vive",
    "PlayStation VR",
    "Nintendo Wii",
    "Nintendo Wii U",
    "PlayStation Portable",
    "Xbox 360",
    "PlayStation 3",
    "Xbox",
    "Nintendo DS",
    "PlayStation 2",
    "GameCube",
    "Game Boy Advance",
    "PlayStation",
    "Nintendo 64",
    "Super Nintendo",
    "Sega Genesis",
    "Sega Saturn",
    "Sega Dreamcast",
    "Atari 2600",
    "Commodore 64",
  ];

  const genres = [
    "Action",
    "Adventure",
    "RPG",
    "Shooter",
    "Simulation",
    "Strategy",
    "Puzzle",
    "Horror",
    "Survival",
    "Platformer",
    "Racing",
    "Fighting",
    "Sports",
    "Open World",
    "Stealth",
    "MMORPG",
    "Rogue-like",
    "Indie",
    "Casual",
    "Exploration",
    "Science Fiction",
    "Fantasy",
    "Historical",
    "War",
    "Mystery",
    "Educational",
    "Music",
    "Visual Novel",
    "Point-and-Click",
    "Tower Defense",
    "City Building",
    "Tycoon",
    "Card Game",
    "Battle Royale",
    "Life Simulation",
    "Party",
    "Beat 'em up",
    "Metroidvania",
    "Tactical",
    "Turn-based",
    "Real-time Strategy",
    "First Person",
    "Third Person",
  ];
  const currentYear = new Date().getFullYear();

  return {
    id,
    title: `Game ${id}`,
    platform: getRandomElement(platforms),
    genre: getRandomElement(genres),
    releaseYear: getRandomNumber(currentYear - 20, currentYear),
    price: `$${getRandomNumber(10, 60)}.${getRandomNumber(0, 99)
      .toString()
      .padStart(2, "0")}`,
    releaseDate: getRandomDate(new Date(currentYear - 20, 0, 1), new Date()),
    fixVersion: `${getRandomNumber(1, 3)}.${getRandomNumber(0, 9)}`,
    lastUpdatedAt: new Date().toISOString(),
    requirements: {
      minimum: `PC with ${getRandomElement([
        "Windows 7/8/10",
        "Windows 10",
      ])} (${getRandomElement(["32", "64"])} bit)`,
      recommended: `PC with Windows 10 (${getRandomElement([
        "32",
        "64",
      ])} bit), SSD`,
    },
    graphics: getRandomElement(["Low", "Medium", "High", "Ultra"]),
  };
};

// Function to get a random element from an array
const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Function to generate a random number within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate a random date within a range
const getRandomDate = (startDate, endDate) => {
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  ).toLocaleDateString();
};

// Generate 100 random game entries
 const gameList = Array.from({ length: 100 }, (_, index) =>
  generateGameEntry(index + 1)
);
module.exports = gameList;
