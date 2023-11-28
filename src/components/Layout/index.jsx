import React from 'react';
import {Link, Outlet, NavLink} from 'react-router-dom';
import '../../App.css';
import '../../App.css';
import CustomLink from '../CustomLink';

//active links with NavLink
//change className of active link

function Layout(){
  const setActive = ({isActive}) => isActive ? 'link-active' : 'link';
  return(
   <>
     <header className="header">
       <NavLink className={setActive} to ="/">Home</NavLink>
       <NavLink className={setActive} to="/posts">Blog</NavLink>
       <NavLink className={setActive} to="/about">About</NavLink>
     </header>
     <div className="container">
       <Outlet />
     </div>
     <footer className="footer">2021</footer>
   </>
  )
};

export default Layout;