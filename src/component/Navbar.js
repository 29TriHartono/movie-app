import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavbarLink = [
  {
    display: 'Home',
    url: '/',
  },
  {
    display: 'Popular Movie',
    url: '/popular',
  },
];
const Navbar = () => {
  const [navbarScrool, setNavbarScrool] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScrool(true);
    } else {
      setNavbarScrool(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <div className="z-20 flex items-center justify-between text-white h-16  px-setting">
      <h1 className="text_gradient">Movie Example</h1>
      <div className="flex items-center justify-center gap-2">
        {NavbarLink.map((item, index) => {
          return (
            <div key={index}>
              <NavLink to={item.url}>{item.display} </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
