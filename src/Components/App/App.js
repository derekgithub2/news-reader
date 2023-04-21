import React, { useState } from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import { Route, Routes } from 'react-router'
import SingleView from '../SingleView/SingleView'
import { Link } from 'react-router-dom'

const App = () => {

  const [currentArticle, setCurrentArticle] = useState()
  const [searchInput, setSearchInput] = useState()

  const handleHomeClick = () => {
    setSearchInput('')
  }

  return (
    <div className="App">
      <section className="top-container">
        <Nav />
        <section className='form-container'>
          <Link to='/' style={{ textDecoration: 'none' }} >
            <h1 onClick={handleHomeClick}>NY TIMES READER</h1>
          </Link>
          <Search setSearch={setSearchInput}/>
        </section>
      </section>
      <Routes>
        <Route path='/' element={<ArticleContainer sectionValue={searchInput} setCurrentArticle={setCurrentArticle}/>}/>
        <Route path='/details' element={<SingleView currentStory={currentArticle}/>}/>
        <Route path='/filter' element={<ArticleContainer sectionValue={searchInput}/>}/>
        <Route path='*' element={<ArticleContainer sectionValue={searchInput} setCurrentArticle={setCurrentArticle}/>}/>
      </Routes>
    </div>
  )
}

export default App;
