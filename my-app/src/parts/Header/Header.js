import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  /* const handleLogoutClick = () => {
    console.log('')
  }; */

  const setHeaderToLogin = (
    <nav className="header">
      <h1>Meme Generator</h1>
      <div className="headerLinks">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );

  /* const setHeaderToMain = (
    <nav className="header">
      <Link to="/main">
        <h1>Username</h1>
      </Link>
      <div className="headerLinks">
        <Link to="/login" onClick={handleLogoutClick}>
          Logout
        </Link>
      </div>
    </nav>
  ); */
  return setHeaderToLogin;
};

export default Header;
