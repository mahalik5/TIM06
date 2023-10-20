/* eslint-disable react/jsx-curly-brace-presence */
import { Link } from 'react-router-dom';
import './SIdebar.css';

function Sidebar() {
  return (
    // <div className="sidebar-wrapper">
    <div className="sidebar">
      <div className="nav">
        <Link to={'/'}>Home</Link>
      </div>
      <div className="nav">
        <a href="">User</a>
      </div>
      <div className="nav">
        <a >History</a>
      </div>
      <div className="nav">
        <Link to={'/login'}>Login</Link>
      </div>
      <div className="nav" />
    </div>
    // </div>
  );
}

export default Sidebar;
