import React from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import ArticleContainer from '../ArticleContainer/ArticleContainer'

const App = () => {

  

  const setSearchInput = () => {
    console.log('setSearchInput in app.js')
  }



  return (
    <div className="App">
      <section className="top-container">
        <Nav />
        <section className='form-container'>
          <h1>NY TIMES READER</h1>
          <Search setSearch={setSearchInput} />
        </section>
      </section>
      <section className='bottom-container'>

        <ArticleContainer />

      </section>
    </div>
  );
}

export default App;
