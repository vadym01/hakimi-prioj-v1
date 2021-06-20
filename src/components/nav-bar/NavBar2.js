import React from 'react';
import { Link } from 'react-scroll';
import './navBar.css';
import logo from '../../img/swg/HakimiLogo.png';

function NavBar2() {
  return (
    <div className="nav-bar-container2">
      <div className="logo">
        <div id="shadow"></div>
        <img src={logo} alt="logo" id="logo2" />
      </div>
      <nav className="nav-bar-list">
        <ul className="nav-bar">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="out-collection"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              OUT COLLECTION
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="trade-shows"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              TRADE SHOWS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              EDUCATION
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about-us"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact-us"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar2;
