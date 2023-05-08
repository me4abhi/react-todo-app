import React from "react";
import "./styles/header.css";
import { Outlet, Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>
          <Link id="app-name" to="/">
            <div id="h1-pill-design"></div>
            Tasks Todo
          </Link>
        </h1>
        <NavLink to="/finished-tasks">Finished</NavLink>
      </header>
    </>
  );
}

export default Header;
