import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('AccessToken')
  );

  //const username =

  const handleLogoutClick = () => {
    window.localStorage.removeItem('AccessToken');
    setAccessToken(false);
  };

  const setHeaderToLogin = (
    <nav className="header">
      <Link to="/main">
        <h1>Meme Society</h1>
      </Link>
      <div className="headerLinks">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );

  const setHeaderToMain = (
    <nav className="header">
      <Link to="/main">
        <h1>Welcome to Meme Society Username</h1>
      </Link>
      <div className="headerLinks">
        <Link to="/gallery">Create meme</Link>
        <Link to="/" onClick={handleLogoutClick}>
          Logout
        </Link>
      </div>
    </nav>
  );
  return accessToken ? setHeaderToMain : setHeaderToLogin;
};

export default Header;
