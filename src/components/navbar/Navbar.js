import React from 'react';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__center'>
        <a href='/'>
          <button className='nav__logo'>ReactJS</button>
        </a>
        <div className='nav__center--link'>
          <button className='nav__btn--link'>
            <a href='/products'>Products</a>
          </button>
          <button className='nav__btn--link'>
            <a href='/about'>about</a>
          </button>
          <button className='nav__btn--link'>
            <a href='/framework'>frame works</a>
          </button>
        </div>
        <button className='nav__btn--sign-in'>
          <a href='/login'>Sign In</a>
        </button>
      </div>
    </nav>
  );
};
