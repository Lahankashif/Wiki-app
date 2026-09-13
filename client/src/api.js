import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
   baseURL: API_URL,
});

// auth APIs
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// search APIs
export const searchWikipedia = (query, token) =>
  API.post("/search", { query }, token ? {
    headers: { Authorization: `Bearer ${token}` }
  } : undefined);

export const getHistory = (token) =>
  API.get("/search/history", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteHistory = (id, token) =>
  API.delete(`/search/history/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export default API;
