import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PasswordStrength from '../../components/PasswordStrength';
import './Register.css';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [kingdomName, setKingdomName] = useState('');
  const [error, setError] = useState(null);
  const [inputStatus, setInputStatus] = useState('register-input-OK');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = { userName, password, kingdomName };
    const URL = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const responseBody = await response.json();

      if (response.status !== 200) {
        throw Error(responseBody.error);
      }

      const path = `/register/map/${responseBody.kingdomId}`;
      history.push(path);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setInputStatus('register-input-ERROR');
    }
  };

  return (
    <div className="register-page">
      <div className="register">
        <h1 className="register-h1">Tribes of Gymnocercus</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className={inputStatus}
            type="text"
            required
            placeholder="Username"
            minLength="3"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
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
            onChange={e => {
              setPassword(e.target.value);
              setInputStatus('register-input-OK');
              setError(null);
            }}
          />
          <PasswordStrength password={password} />
          <input
            className={inputStatus}
            type="text"
            placeholder="Kingdom name"
            value={kingdomName}
            onChange={e => {
              setKingdomName(e.target.value);
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
