import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarRoutes from './navbarRoutes'

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Eric T. Roth - Developer
          </Link>

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
