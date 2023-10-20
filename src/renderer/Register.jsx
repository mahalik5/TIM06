/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import './Register.css'
import sidebar from './sidebar.png';

function Register() {
  return (
    <div className="registrasi">
      <div className="form-section">
        <h1 className="heading">Register</h1>
        <div className="form-input">
          <input type="text" placeholder="Username" className="username" />
          <input type="text" placeholder="Gmail" className="gmail" />
          <input type="password" className="password" placeholder="Password" />
          <input
            type="password"
            className="confirm-password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-button">
          <p className="register-link">Sudah memiliki akun? <Link className='register-link red' to={'/login'}>Login</Link></p>
          <button type='submit' className="btn-register">Register</button>
        </div>
      </div>
      <img src={sidebar} alt="" srcSet="" className="image" />
    </div>
  );
}

export default Register;
