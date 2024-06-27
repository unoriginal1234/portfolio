import { Link } from 'react-router-dom'

export default function NavbarRoutes () {
  return (
    <>
      <Link to="about" className="navbar-item">
        About
      </Link>
      <Link to="contact" className="navbar-item">
        Contact
      </Link>
      <hr className="navbar-divider" />
      <a className="navbar-item">
        Resume
      </a>
    </>)
}