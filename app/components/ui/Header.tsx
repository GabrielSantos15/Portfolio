"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaCircle, FaCode, FaBars, FaXmark } from "react-icons/fa6";
import { useTheme } from "next-themes";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const { theme, setTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.siteHeader} ${visible ? styles.show : styles.hide} ${
        menuOpen ? styles.open : ""
      }`}
    >
      <figure className={styles.logo}>
        <FaCode />
      </figure>

      <div className={menuOpen ? styles.overlay : ""} onClick={closeMenu}>
        <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
          <nav className={styles.nav}>
            <a href="#homeSection" onClick={closeMenu}>
              Início
            </a>
            <a href="#AboutSection" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#projetosSection" onClick={closeMenu}>
              Projetos
            </a>
            <a href="#ExperiênciaSection" onClick={closeMenu}>
              Experiência
            </a>
            <a href="#FormaçãoSection" onClick={closeMenu}>
              Formação
            </a>
            <a href="#contactSection" onClick={closeMenu}>
              Contato
            </a>
            
            <button
              onClick={toggleTheme}
              className={`${styles.themeToggle} ${styles.mobileThemeBtn}`}
              aria-label="Alternar tema"
            >
              {mounted && (theme === "dark" ? <FaCircle /> : <FaMoon />)}
            </button>
          </nav>
        </div>
      </div>

      <div className={styles.headerActions}>
        <button
          onClick={toggleTheme}
          className={`${styles.themeToggle} ${styles.desktopThemeBtn}`}
          aria-label="Alternar tema"
        >
          {mounted && (theme === "dark" ? <FaCircle /> : <FaMoon />)}
        </button>
        
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}