const BASE_URL = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await fetch(`${BASE_URL}/albums/top`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching top albums:", error);
    return [];
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await fetch(`${BASE_URL}/albums/new`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching new albums:", error);
    return [];
  }
};

export const fetchSongs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/songs`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
};
