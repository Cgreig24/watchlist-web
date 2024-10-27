import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "/genres", label: "Genre" },
    { id: 3, to: "/watchlist", label: "Watchlist" },
  ];
  return (
    <header className="navbar">
      <h1 className="navbarTitle">Watchlist Web</h1>
      <nav>
        <div classname="navlinksContainer">
          {navLinks.map((link) => (
            <NavLink class="navlinks" key={link.id} to={link.to}>
              <p className="singleNavlink">{link.label}</p>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
