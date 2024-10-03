"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/stockNews');
        console.log("news component",response)
        setNews(response.data.feed || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="stock-news">
      <h2 className="text-2xl font-bold mb-4">Stock Market News</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.summary}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockNews;