import { NavLink } from "react-router-dom";
import "./Navbar.css";

const linkClass = ({ isActive }) =>
  isActive ? "nav__link nav__link--active" : "nav__link";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand" end>
          <span className="nav__brand-mark" aria-hidden />
          Akarshan Jogi
        </NavLink>
        <nav className="nav__links" aria-label="Main">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
