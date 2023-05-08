import React from "react";
import "./styles/header.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

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
        <NavLink to="/removed-tasks">
          <HistoryOutlinedIcon fontSize="large" />
        </NavLink>
      </header>
    </>
  );
}

export default Header;
