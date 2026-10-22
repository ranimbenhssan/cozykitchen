import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="logo" aria-label="CozyKitchen, accueil">
          <span className="logo__dot" aria-hidden="true" />
          CozyKitchen
        </Link>
        <nav aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/recettes">Recettes</NavLink>
        </nav>
      </div>
    </header>
  )
}
