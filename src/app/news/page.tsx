'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button'; 
import styles from '@/styles/news.module.css'; 
const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchNews = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/news');
        console.log(response)
      setNews(response.data);
    } catch (error) {
      setError('Failed to fetch news. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest News</h1>

      
      <Button onClick={fetchNews} className={styles['btn-news']}>
        Fetch News
      </Button>

      
      {loading && <p className={styles.loading}>Loading news...</p>}

      
      {error && <p className={styles.error}>{error}</p>}

      
      <div>
        {news.map((article, index) => (
          <div key={index} className={styles['news-article']}>
            <h3 className={styles['news-title']}>{article.title}</h3>
            <p className={styles['news-description']}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles['news-link']}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
