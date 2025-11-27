import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
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
