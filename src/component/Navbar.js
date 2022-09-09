import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  return (
    <motion.div animate={{ y: 0 }} initial={{ y: '-100' }} transition={{ duration: 1.4 }} className="z-20 flex items-center justify-between text-white h-16  px-setting">
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
    </motion.div>
  );
};

export default Navbar;
