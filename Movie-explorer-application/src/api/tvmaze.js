const BASE_URL = "https://api.tvmaze.com";

// Get all shows
export async function getAllShows() {
  try {
    const res = await fetch(`${BASE_URL}/shows`);

    if (!res.ok) {
      throw new Error("Failed to fetch shows");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Search shows by title
export async function searchShows(query) {
  try {
    const res = await fetch(`${BASE_URL}/search/shows?q=${query}`);

    if (!res.ok) {
      throw new Error("Failed to search shows");
    }

    const data = await res.json();
    // TVMaze returns [{ score, show }], so we only keep "show"
    const shows = data.map((item) => item.show);
    return shows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

