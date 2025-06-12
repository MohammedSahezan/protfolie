import React from "react";
import {  NavLink } from "react-router-dom";
import '../Css/navbar.css';


const Navbar = () => {
  return (
    <div className=" w-[130px] items-center h-screen  flex justify-items-end bg-red-400  items-center pl-3 fixed right-0     ">
      <ul className="flex  justify-between flex-col pl-3 addli   ">
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/About-us'>
          
          <li>AboutUs</li>
        </NavLink>
        <NavLink to='/Project'>
          
          <li>Project</li>
        </NavLink>

        <NavLink to='/contact-us'>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
