import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
function Nav(props) {
  const { pathname } = useLocation();

  return (
    <nav className='nav'>
      <ul>
        <li className={`${pathname === '/' ? 'active' : ''}`}>
          <Link to='/'>Bai 1: Form</Link>
        </li>
        <li className={`${pathname === '/map' ? 'active' : ''}`}>
          <Link to='/map'>Bai 2: Google Map</Link>
        </li>
        <li className={`${pathname === '/fanpage' ? 'active' : ''}`}>
          <Link to='/fanpage'>Bai 3: Fanpage Facebook</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
