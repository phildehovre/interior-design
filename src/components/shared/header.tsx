import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar_desktop desktop">
          <div>Logo</div>
          <ul className="navbar_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar_mobile">
          <label htmlFor="dropdown_checkbox" className="dropdown_hamburger">
            |||
          </label>
          <input
            type="checkbox"
            id="dropdown_checkbox"
            name="dropdown_checkbox"
          ></input>
          <div className="dropdown_content mobile">
            <ul className="navbar mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
