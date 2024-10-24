import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "/genres", label: "Genre" },
    { id: 3, to: "/watchlist", label: "Watchlist" },
  ];
  return (
    <header className="navbar">
      <h1>Watchlist Web</h1>
      <nav>
        {navLinks.map((link) => (
          <NavLink class="navlinks" key={link.id} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
