import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'ed18bad2242444e09261582451141461'; // Replace YOUR_API_KEY with your NewsAPI key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=farmers AND India&pageSize=5&apiKey=${apiKey}`
        );
        const newsData = await response.json();
        setArticles(newsData.articles);
      } catch (error) {
        console.error("'Failed to fetch news:'", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '24px' }}>Latest Farming News in India</h1>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h2 style={{ fontSize: '18px' }}>{article.title}</h2>
              </a>
              <p style={{ fontSize: '14px' }}>{article.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news found.</p>
      )}
    </div>
  );
};

export default News;
