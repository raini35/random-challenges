import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-primary fixed-top">
    <Link to="/" className="navbar-brand">
      Q&App
    </Link>
  </nav>
);

export default NavBar;
