import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; 
import { Navbar } from "./Navbar";

export const History = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const handleAuthError = (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      alert("Session expired, please login again");
      navigate("/login");
    } else {
      console.error(err.response?.data || err.message);
    }
  };

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const res = await API.get("/search/history", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHistory(res.data);
    } catch (err) {
      handleAuthError(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/search/history/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHistory(history.filter((item) => item._id !== id));
    } catch (err) {
      handleAuthError(err);
    }
  };

  const clearAll = async () => {
    try {
      const token = localStorage.getItem("token");
      await API.delete("/search/history", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHistory([]);
    } catch (err) {
      handleAuthError(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-28 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Search History</h2>

      {history.length > 0 && (
        <div className="max-w-2xl mx-auto mb-4 text-right">
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            🧹 Clear All
          </button>
        </div>
      )}

      <div className="max-w-2xl mx-auto space-y-3">
        {history.length > 0 ? (
          history.map((item) => (
            <div
              key={item._id}
              className="p-3 border rounded-lg bg-white shadow flex justify-between items-center"
            >
              <div>
                <span>{item.query}</span>
                <p className="text-gray-500 text-sm">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => deleteItem(item._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No history yet.</p>
        )}
      </div>
    </div>
    </>
  );
};
