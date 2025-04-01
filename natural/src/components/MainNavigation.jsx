import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const cartNum = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart -- {cartNum}</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
