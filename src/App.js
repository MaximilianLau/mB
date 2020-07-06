import React from 'react';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import Search from './Components/Search/Search.js'

import './App.css';

function App() {
  return (    
    <div>
      <Header />
      <div className="App">
        <h1>MintBean</h1>
      </div>



      <Footer/>
    </div>
  );
}

export default App;
