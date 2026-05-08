import {
  FaRegEnvelope,
  FaCodeBranch,
  FaGithub,
  FaRegCalendarCheck,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const GITHUB_USER = "gabrielsantos15";
const START_CAREER_YEAR = 2022;

const LIGHT_COLOR = "rgb(250, 216, 255)";
const DARK_COLOR = "rgb(178, 68, 241)" ;
// const DARK_COLOR = "rgb(0, 255, 170)" ;

const TRAIL_PARTICLES = 2;
const EXPLOSION_PARTICLES = 20;
const MAX_PARTICLES = 300;

class Particle {
  constructor({ position, vel, size }) {
    this.position = position;
    this.vel = vel;
    this.size = size;
    this.maxSize = size;
  }

  update() {
    this.size -= 0.4;
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;
    return this.size > 0;
  }

  draw(ctx, color) {
    const opacity = Math.max(this.size, 0) / this.maxSize;

    ctx.fillStyle = color
      .replace("rgb", "rgba")
      .replace(")", `, ${opacity})`);

    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function getPointFromEvent(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const source = event.touches?.[0] ?? event;

  return {
    x: source.clientX - rect.left,
    y: source.clientY - rect.top,
  };
}

export default function Hero({ darkMode }) {
  const canvasRef = useRef(null);

  // 🔥 cor dinâmica SEM recriar canvas
  const colorRef = useRef(DARK_COLOR);

  useEffect(() => {
    colorRef.current = darkMode ? DARK_COLOR : LIGHT_COLOR;
  }, [darkMode]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    let lastPointerPos = { x: 0, y: 0 };
    let animationId;
    let lastTime = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handlePointerMove = (event) => {
      const now = performance.now();
      if (now - lastTime < 16) return;
      lastTime = now;

      const { x, y } = getPointFromEvent(canvas, event);
      const dx = x - lastPointerPos.x;
      const dy = y - lastPointerPos.y;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        for (let i = 0; i < TRAIL_PARTICLES; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2 + 1;

          particles.push(
            new Particle({
              position: { x, y },
              vel: {
                x: Math.cos(angle) * speed + dx * 0.1,
                y: Math.sin(angle) * speed + dy * 0.1,
              },
              size: Math.random() * 20 + 5,
            })
          );
        }
      }

      lastPointerPos = { x, y };
    };

    const handlePointerDown = (event) => {
      const { x, y } = getPointFromEvent(canvas, event);

      for (let i = 0; i < EXPLOSION_PARTICLES; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;

        particles.push(
          new Particle({
            position: { x, y },
            vel: {
              x: Math.cos(angle) * speed,
              y: Math.sin(angle) * speed,
            },
            size: Math.random() * 25 + 8,
          })
        );
      }

      if (navigator.vibrate) navigator.vibrate(10);
    };

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color = colorRef.current;

      ctx.shadowColor = color;
      ctx.shadowBlur = 10;

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        if (!particle.update()) {
          particles.splice(i, 1);
          continue;
        }

        particle.draw(ctx, color);
      }

      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES);
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  // stats
  const [stats, setStats] = useState({ repos: 0, years: 0 });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setStats({
          repos: data.public_repos || 0,
          years: new Date().getFullYear() - START_CAREER_YEAR,
        });
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

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
        <div className={styles.statItem}>
          <span className={styles.iconBox}>
            <FaCodeBranch />
          </span>
          <span className={styles.itemContent}>
            <dd>{stats.repos || "--"}</dd>
            <dt>Projetos Públicos</dt>
          </span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.iconBox}>
            <FaGithub />
          </span>
          <span className={styles.itemContent}>
            <dd>200+</dd>
            <dt>Contribuições (ano)</dt>
          </span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.iconBox}>
            <FaRegCalendarCheck />
          </span>
          <span>
            <dd>{stats.years || "--"}</dd>
            <dt>Anos de Jornada</dt>
          </span>
        </div>

        <div className={styles.contatoItem}>
          <a href="mailto:gabriel.santos.tech256@gmail.com">
            <span className={styles.iconContato}>
              <FaRegEnvelope />
            </span>
            <h4>Contato</h4>
          </a>
        </div>

        <div className={styles.redesSociais}>
          <a href="https://github.com/GabrielSantos15" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </footer>

      <canvas ref={canvasRef} />
    </section>
  );
}