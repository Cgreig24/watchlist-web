import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "/genres", label: "Genre" },
    { id: 3, to: "/watchlist", label: "Watchlist" },
  ];
  return (
    <>
      <nav className="bg-blue-800 flex justify-between items-center h-20 p-4">
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
