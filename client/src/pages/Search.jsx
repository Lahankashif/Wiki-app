import React from 'react'
import { useState } from 'react';
import { searchWikipedia } from "../api";

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const handleSearch = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await searchWikipedia(query, token);
            setResults(res.data.results);
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen pt-28 px-6">
            <img src="/assets/logo.png" alt="logo" className="w-40 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Search Wikipedia</h2>
            <div className="flex space-x-2 w-full max-w-lg">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter search term"
                    className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
                />
                <button className="px-6 bg-black text-white rounded-lg hover:bg-gray-800" onClick={handleSearch}>Search</button>
            </div>
            {results.length > 0 && (
                <div className="mt-8 w-full max-w-2xl space-y-3">
                    {results.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow mb-2">
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
                            <a
                                href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}
