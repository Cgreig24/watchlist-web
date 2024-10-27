export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logoSection">
          <p className="apiText">API courtesy of</p>
          <img
            className="tmdbLogo"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          />
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Watchlist Web. All rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
