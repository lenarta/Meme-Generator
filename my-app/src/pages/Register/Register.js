import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [inputStatus, setInputStatus] = useState('register-input-OK');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password };
    const URL = process.env.REACT_APP_API_URL;
    console.log(userData);

    try {
      const response = await fetch(`http://81.0.84.195:8080/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //mode: 'no-cors',
        body: JSON.stringify(userData),
      });

      const responseBody = await response.json();

      if (response.status !== 200) {
        throw Error(responseBody.error);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setInputStatus('register-input-ERROR');
    }
  };

  return (
    <div className="register-page">
      <div className="register">
        <h1 className="register-h1">Meme generator</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className={inputStatus}
            type="text"
            required
            placeholder="Username"
            minLength="3"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setInputStatus('register-input-OK');
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
              setInputStatus('register-input-OK');
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
          <button className="register-btn" type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
