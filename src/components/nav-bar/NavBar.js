import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navBar.css';
import logo from '../../img/swg/HakimiLogo.png';
import menu_icon from '../../img/swg/menu_icon.svg';

// src/img/swg/HakimiLogo.png

const NavBar = () => {
  const [state, setState] = useState({
    showNavBar: false,
  });

  const onNavBarButtonClickHandler = () => {
    setState({
      showNavBar: !state.showNavBar,
    });
  };

  return (
    <div>
      {!state.showNavBar ? (
        <img
          src={menu_icon}
          alt="svg-menu-icon"
          id="svg-menu-icon"
          className="nav-bar-button"
          onClick={onNavBarButtonClickHandler}
        />
      ) : (
        ''
      )}
      <div
        className={
          state.showNavBar
            ? 'nav-bar-container shown'
            : 'nav-bar-container hidden'
        }
      >
        <div className="logo">
          <img src={logo} alt="logo" id="logo" />
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
                duration={2000}
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
                duration={2000}
              >
                OUR COLLECTION
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="trade-shows"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
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
                duration={2000}
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
            <li className="nav-item">
              {state.showNavBar ? (
                <button
                  id="close-button"
                  onClick={onNavBarButtonClickHandler}
                  className="nav-bar-button"
                >
                  X
                </button>
              ) : (
                ''
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
