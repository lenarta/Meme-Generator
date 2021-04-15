import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import {
  loadUserToken,
  loadUserTokenPayload,
} from '../../actions/loginActions';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [inputStatus, setInputStatus] = useState('login-input-OK');
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password };
    /* const URL = process.env.REACT_APP_API_URL;
    console.log(URL); */

    try {
      const response = await fetch(`http://81.0.84.195:8080/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      console.log(userData);

      const responseBody = await response.json();

      if (response.status !== 200) {
        throw Error(responseBody.error);
      }
      const decodedJWTToken = jwt.decode(responseBody.token, {
        complete: true,
      });
      dispatch(loadUserToken(responseBody.token));
      dispatch(loadUserTokenPayload(decodedJWTToken.payload));
      console.log(decodedJWTToken.payload);
      const cookie = new Cookies();
      cookie.set('accessToken', responseBody.token, {
        path: '/',
      });
      history.push('/main');
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setInputStatus('login-input-ERROR');
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className={inputStatus}
            type="text"
            required
            placeholder="Username"
            minLength="3"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setInputStatus('login-input-OK');
              setError(null);
            }}
          />
          <input
            className={inputStatus}
            type="password"
            required
            placeholder="Password"
            minLength="8"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setInputStatus('login-input-OK');
              setError(null);
            }}
          />
          <div className="errorBox">
            {error && (
              <div className="input-error-message">
                {error}
                <i className="material-icons">warning</i>
              </div>
            )}
          </div>
          <Link className="login-a" to="/main">
            Forgot your password?
          </Link>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
