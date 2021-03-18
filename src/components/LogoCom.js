import React from 'react';
import './style.css';
import ReactLogo from './logo.svg';
function LogoCom() {
  return (
    <div className='logoContainer' >
        <img src={ReactLogo} alt="React Logo" />
    </div>
  );
}

export default LogoCom;