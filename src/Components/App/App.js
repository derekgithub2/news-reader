import React, { useState } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import { Route, Routes } from 'react-router';
import SingleView from '../SingleView/SingleView';

const App = () => {

  const [currentArticle, setCurrentArticle] = useState()

  return (
    <div className="App">
      <section className="top-container">
        <Nav />
        <section className='form-container'>
          <h1>NY TIMES READER</h1>
          <Search />
        </section>
      </section>
      <Routes>
        <Route path='/' element={<ArticleContainer setCurrentArticle={setCurrentArticle}/>}/>
        <Route path='/details' element={<SingleView currentStory={currentArticle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
