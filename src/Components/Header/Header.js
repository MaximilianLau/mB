import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="wrapper title">
        <h1>🖼Lorem Editsum  <a href="w" target="_blank" rel="noopener noreferrer">by MM</a></h1>
        <p>Ever want a quick way to find a relevant placeholder image and be able to edit it.</p>
        <p>Now you can with Lorem Editsum. Find an image, click and edit away!</p>
      </header>
    )
  }
}

export default Header;
