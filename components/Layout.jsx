import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/logo.ico';
import '../src/layout.css';

export default function Layout() {
  return (
    <>
      <h1>
        <img src={logo} alt="logo" className="logo" width="50px" height="50px" /> My Portfolio
      </h1>
      <hr />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link> |{' '}
        <Link to="/project">Projects Page</Link> | <Link to="/contact">Contact Me</Link>
      </nav>
    </>
  );
}


