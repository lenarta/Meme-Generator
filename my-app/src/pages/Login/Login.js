import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [inputStatus, setInputStatus] = useState('login-input-OK');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password };
    //const URL = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`http://178.48.165.230:8080/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const responseBody = await response.json();

      if (response.status !== 200) {
        throw Error(responseBody.error);
      }
      const decodedJWTToken = jwt.decode(responseBody.token, {
        complete: true,
      });
      console.log(responseBody.token);
      console.log(decodedJWTToken.payload);
      window.localStorage.setItem('AccessToken', responseBody.token);
      /* const cookie = new Cookies();
      cookie.set('accessToken', responseBody.token, {
        path: '/',
      }); */
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
