import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/dogs">Dogs</Link>
      <Link to="/auth">Auth</Link>
    </nav>
  );
}
