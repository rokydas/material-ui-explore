import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './Components/News/News';

function App() {
  const [ articles, setArticles ] = useState([]);
  useEffect( () => {
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=619e767a2687413da2955c03efba943d')
    .then(res => res.json())
    .then(data => setArticles(data.articles));
  }, []);
  return (
    <div>
      <Button color="primary">Hello World</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News key={article.description} data={article}></News>)
      }
    </div>
  );
}

export default App;
