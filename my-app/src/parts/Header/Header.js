import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import deleteStoreAction from '../../actions/deleteStore';

const Header = () => {
  const cookie = new Cookies();
  const kingdom = useSelector(state => state.login.data.kingdom);
  const token = useSelector(state => state.login.token);
  const accessToken = new Cookies().get('accessToken');
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    cookie.remove('accessToken');
    dispatch(deleteStoreAction());
  };

  const setHeaderToLogin = (
    <nav className="header">
      <h1>Tribes of Gymnocercus</h1>
      <div className="headerLinks">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );

  const setHeaderToMain = (
    <nav className="header">
      <Link to="/main/building">
        <h1>{kingdom.kingdomName}</h1>
      </Link>
      <div className="headerLinks">
        <Link to="/settings">Settings</Link>
        <Link to="/login" onClick={handleLogoutClick}>
          Logout
        </Link>
      </div>
    </nav>
  );
  return token || accessToken ? setHeaderToMain : setHeaderToLogin;
};

export default Header;
