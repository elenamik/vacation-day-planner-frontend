import React from 'react';
import './header.css';

function Header () {
  return (
    <div id='header-container'>
      <div id='header-text-container'>
        <div id='header-title'>
                    Your Year Visualized
        </div>
        <div id='header-subtext'>
                    For the people who want an effortless way to track important events
          <p>Click on any valid date to store a note! </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
