import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav--bar">
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/About">ABOUT</NavLink>
        </li>
      </ul>
    </nav>
  );
}
