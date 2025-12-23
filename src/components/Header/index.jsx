import { useEffect, useState } from "react";
import { FaMoon, FaCircle } from "react-icons/fa6";
import "./Header.estilos.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 50) {
        setVisible(true);
      } else if (current < lastScroll) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${visible ? "show" : "hide"} ${
        menuOpen ? "open" : ""
      }`}
    >
      <figure className="logo">Logo</figure>

      <div className={menuOpen ? "overlay" : ""} onClick={closeMenu}>
        <div className="menu" onClick={(e) => e.stopPropagation()}>
          <nav className="nav">
            <a href="#homeSection" onClick={closeMenu}>
              Home
            </a>
            <a href="#AboutSection" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#projetosSection" onClick={closeMenu}>
              Projetos
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experiência
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contato
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle mobile-theme-btn"
              aria-label="Alternar tema"
            >
              {darkMode ? <FaCircle /> : <FaMoon />}
            </button>
          </nav>
        </div>
      </div>
      <div className="header-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle desktop-theme-btn"
          aria-label="Alternar tema"
        >
          {darkMode ? <FaCircle /> : <FaMoon />}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
