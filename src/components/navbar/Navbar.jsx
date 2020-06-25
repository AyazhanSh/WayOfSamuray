import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
      <nav className = {classes.nav}>
      <div className = {classes.item}>
        <NavLink to = "/profile" activeClassName = {classes.active}>
          profile
        </NavLink>
      </div>
      <div className = {classes.item} >
        <NavLink to = "/messages" activeClassName = {classes.active}> 
          messages
        </NavLink>
      </div>
      <div className = {classes.item}>
        <NavLink to = "/news" activeClassName = {classes.active}>
          news
        </NavLink>
      </div>
      <div className = {classes.item}>
        <NavLink to = "/music" activeClassName = {classes.active}>
          music
        </NavLink>
      </div>
      <div className = {classes.item}>
        <NavLink to = "/settings" activeClassName = {classes.active}>
          settings
        </NavLink>
      </div>
      
    </nav>
    )
}

export default Navbar;