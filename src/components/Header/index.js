import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <h1>Build-a-Bird</h1>
      <nav>
        <NavLink to="/" exact activeClassName="active-link">
          New Bird
        </NavLink>
        <NavLink to="/favourites" activeClassName="active-link">
          Favourites
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
