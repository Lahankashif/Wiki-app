import API from "../api";

// Search Wikipedia
export const searchWikipedia = (query) =>
  API.post("/search", { query });

// Get search history
export const getHistory = () => API.get("/search/history");

// Delete single history item
export const deleteHistory = (id) => API.delete(`/search/history/${id}`);

// Clear all history
export const clearHistory = () => API.delete("/search/history");
