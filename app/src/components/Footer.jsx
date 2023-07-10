import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="name">MATEO FORTUNA</div>
      <div className="copyright">© 2023 React Shop</div>
      <a
        href="https://github.com/mateQF?tab=repositories"
        className="link-git"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}
