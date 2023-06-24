import React from "react";
import UserContainer from "./UserContainer";

function NavLinks({user, logout}) {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer/>
    </nav>
  );
}

export default NavLinks;
