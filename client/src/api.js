import axios from "axios";
// Example API call using fetch

fetch(`${API_URL}/api/data`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

const API = axios.create({
   baseURL: "https://wikiapp-c64a2.cloudfunctions.net/api",
});

// auth APIs
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// search APIs
export const searchWikipedia = (query, token) =>
  API.post("/search", { query }, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getHistory = (token) =>
  API.get("/search/history", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteHistory = (id, token) =>
  API.delete(`/search/history/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export default API;
