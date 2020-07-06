import React from 'react';
import Header from './Components/Header/Header.js'
import Search from './Components/Search/Search.js'

import './App.css';

function App() {
  return (    
    <div className="AppWrapper">
      <Header />

      <div className="ContentWrapper">
      <Search />
      </div>

    </div>
  );
}

export default App;
