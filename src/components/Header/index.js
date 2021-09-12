import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Build-a-Bird</h1>
      <nav>
        <NavLink to="/">New Bird</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </nav>
    </header>
  );
}

export default Header;
