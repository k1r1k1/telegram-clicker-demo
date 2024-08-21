import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';

function MainPage() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <span>Clicks: {clicks}</span>
        <button className="button-clicker" type="button" onClick={() => setClicks(clicks + 1)}>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainPage;
