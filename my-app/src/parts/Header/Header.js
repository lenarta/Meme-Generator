import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const history = useHistory();

  const checkToken = () => {
    if (localStorage.getItem('AccessToken')) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem('AccessToken');
    history.push('/main');
    setIsToken(false);
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
  return isToken ? setHeaderToMain : setHeaderToLogin;
};

export default Header;
