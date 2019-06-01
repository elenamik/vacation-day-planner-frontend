import React, { Component } from 'react';
import './header.css';


function Header(){
    return(
        <div id="header-container">
            <div id="header-text-container">
                <div id="header-title">
                    Your Year Visualized
                </div>
                <div id="header-subtext">
                    For the planners who want an effortless way to track their important events
                </div>
            </div>
            <div id="header-button-container">
                <button id="login-button" className="header-button">Sign In</button>
                <button id="register-button" className="header-button">Register</button>
            </div>
        </div>
  )};


export default Header;
