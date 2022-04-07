import React from "react";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Wine</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <button>Contact</button>
      </header>
    </div>
  );
};

export default NavBar;
