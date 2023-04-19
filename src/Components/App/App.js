import React from 'react';
import './App.css';
import Nav from '../Nav'
import Search from '../Search'
import ArticleContainer from '../ArticleContainer'

const App = () => {


  return (
    <div className="App">
      <section className="top-container">
        <Nav />
        <section className='form-container'>
          <p>Select a state:</p>
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
