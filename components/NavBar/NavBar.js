import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/Wine">
                <a>Wine</a>
              </Link>
            </li>
            <li>
              <Link href="/AboutUs">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button>Contact</button>
      </header>
    </div>
  );
};

export default NavBar;
