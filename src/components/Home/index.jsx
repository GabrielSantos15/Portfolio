import {
  FaRegEnvelope,
  FaCodeBranch,
  FaGithub,
  FaRegCalendarCheck,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

const GITHUB_USER = "gabrielsantos15";
const START_CAREER_YEAR = 2022;
const PARTICLE_COLOR = "rgb(43, 255, 15)";

// logica das particulas
class Particle {
  constructor({ position, color, vel, size }) {
    this.position = position;
    this.color = color;
    this.vel = vel;
    this.size = size;
    this.maxSize = size;
  }

  draw(ctx) {
    this.size -= 0.4;
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;

    if (this.size <= 0) {
      return false; // sinaliza para remoção
    }

    const opacity = this.size / this.maxSize;
    ctx.fillStyle = this.color
      .replace("rgb", "rgba")
      .replace(")", `, ${opacity})`);
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    return true; // mantém a partícula
  }
}

export default function Home({ darkMode }) {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    let lastMousePos = { x: 0, y: 0 };
    let animationId;

    function effect() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Remove partículas mortas durante o draw
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].draw(ctx)) {
          particles.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(effect);
    }

    effect();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = x - lastMousePos.x;
      const dy = y - lastMousePos.y;

      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;

        particles.push(
          new Particle({
            position: { x, y },
            color: PARTICLE_COLOR,
            vel: {
              x: Math.cos(angle) * speed + dx * 0.1,
              y: Math.sin(angle) * speed + dy * 0.1,
            },
            size: Math.random() * 20 + 5,
          }),
        );
      }

      lastMousePos = { x, y };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      if (window.matchMedia("(pointer: fine)").matches) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [stats, setStats] = useState({
    repos: 0,
    years: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function getUserData() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        const currentYear = new Date().getFullYear();
        const yearsActive = currentYear - START_CAREER_YEAR;

        setStats({
          repos: data.public_repos,
          years: yearsActive,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Erro ao buscar dados:", error);
        }
      }
    }

    getUserData();

    return () => controller.abort();
  }, []);

  const statItems = [
    {
      icon: FaCodeBranch,
      value: stats.repos > 0 ? stats.repos : "--",
      label: "Projetos Públicos",
    },
    {
      icon: FaGithub,
      value: "200+",
      label: "Contribuições (ano)",
    },
    {
      icon: FaRegCalendarCheck,
      value: stats.years > 0 ? stats.years : "--",
      label: "Anos de Jornada",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/GabrielSantos15",
      icon: FaGithub,
      label: "GitHub",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/gabriel-santos-9217112a2",
      icon: FaLinkedin,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "https://www.instagram.com/gabrieldos5689",
      icon: FaInstagram,
      label: "Instagram",
      external: true,
    },
  ];

  return (
    <section className={styles.homeSection}>
      <article>
        <div className={styles.homeTitle}>
          <h1>port</h1>
          <h1>folio</h1>
        </div>
        <h2>Front end Developer</h2>
      </article>
      <footer className={styles.homeFooter}>
        {statItems.map(({ icon: Icon, value, label }) => (
          <div className={styles.statItem} key={label}>
            <span className={styles.iconBox}>
              <Icon />
            </span>
            <span className={styles.itemContent}>
              <dd>{value}</dd>
              <dt>{label}</dt>
            </span>
          </div>
        ))}

        <div className={styles.contatoItem}>
          <a href="mailto:gabriel.santos.tech256@gmail.com">
            <span className={styles.iconContato}>
              <FaRegEnvelope />
            </span>
            <h4>Contato</h4>
          </a>
        </div>

        <div className={styles.redesSociais}>
          {socialLinks.map(({ href, icon: Icon, label, external }) => (
            <a
              href={href}
              key={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </footer>
      <canvas ref={canvasRef}></canvas>
    </section>
  );
}
