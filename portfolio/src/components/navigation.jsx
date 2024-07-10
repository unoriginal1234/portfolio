import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarRoutes from './navbarRoutes';
import DarkModeAnimation from '../content/darkModeAnimation'


export default function Navigation({darkHandler}) {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Eric T. Roth - Software Engineer
          </Link>
          <div className="navbar-item">
            <DarkModeAnimation darkHandler={darkHandler}/>
          </div>

          <a
            role="button"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">

            <Link to="projects" className="navbar-item">
              Projects
            </Link>

            {!isActive && (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>
                <div className="navbar-dropdown">
                <NavbarRoutes />
                </div>
              </div>
            )}

            {isActive && (
              <NavbarRoutes />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
