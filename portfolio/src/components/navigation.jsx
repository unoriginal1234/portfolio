import { Link } from "react-router-dom"

export default function Navigation(){
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
              <circle cx="32" cy="32" r="30" fill="#6AA84F" stroke="#38761D" strokeWidth="4"/>
              <circle cx="24" cy="24" r="4" fill="#fff"/>
              <circle cx="40" cy="24" r="4" fill="#fff"/>
              <path d="M20 40 Q32 52 44 40" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">


      <Link to="projects" className="navbar-item">
        Projects
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <Link to="about" className="navbar-item">
            About
          </Link>
          <Link to="contact" className="navbar-item">
            Contact
          </Link>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}