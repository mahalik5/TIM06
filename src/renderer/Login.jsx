/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
import './Login.css';
import sidebar from './sidebar.png';
import useGetAuction from './controller/getAuction';
import { Link } from 'react-router-dom';

function Login() {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');

  const { data: fetchOutlet } = useGetAuction();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(fetchOutlet)
  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <img src={sidebar} alt="" srcSet="" className="image" />
        <div className="form-section-login">
          <h1 className="heading-login">Login</h1>
          <div className="form-input-login">
            <input
              type="text"
              id="gmail"
              placeholder="Gmail"
              className="gmail-login"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="password-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-button-login">
            <p className="register-link-login">Belom memiliki akun? <Link className='register-link-login red' to={'/register'}>Register</Link></p>
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
