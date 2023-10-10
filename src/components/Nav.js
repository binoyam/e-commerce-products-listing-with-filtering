import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="links">
        <li>
          <Link to="/fullpage">Categories</Link>{" "}
        </li>
        <li>
          <Link to="/">Availabe</Link>{" "}
        </li>
        <li>
          <Link to="/">All</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
