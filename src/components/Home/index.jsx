import {
  FaRegEnvelope,
  FaCodeBranch,
  FaGithub,
  FaRegCalendarCheck,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.estilos.css";

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
            color: "rgb(148, 51, 204)",
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
        canvas.addEventListener("mousemove", handleMouseMove);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, darkMode);

  const [stats, setStats] = useState({
    repos: 0,
    years: 0,
  });

  useEffect(() => {
    async function getUserData() {
      try {
        // 1. Busca para pegar a contagem de repositórios
        const response = await fetch(
          "https://api.github.com/users/gabrielsantos15",
        );
        const data = await response.json();

        const startCareer = 2022;
        const currentYear = new Date().getFullYear();

        const yearsActive = currentYear - startCareer;

        setStats({
          repos: data.public_repos,
          years: yearsActive,
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getUserData();
  }, []);

  return (
    <section id="homeSection">
      <article>
        <div className="homeTitle">
          <h1>port</h1>
          <h1>folio</h1>
        </div>
        <h2>Front end Developer</h2>
      </article>
      <footer id="homeFooter">
        <div className="stat-item">
          <span className="icon-box">
            <FaCodeBranch />
          </span>
          <span>
            <dd>{stats.repos > 0 ? stats.repos : "--"}</dd>
            <dt>Projetos Públicos</dt>
          </span>
        </div>

        <div className="stat-item">
          <span className="icon-box">
            <FaGithub className="fa-brands fa-github" />
          </span>
          <span>
            <dd>200+</dd>
            <dt>Contribuições (ano)</dt>
          </span>
        </div>

        <div className="stat-item">
          <span className="icon-box">
            <FaRegCalendarCheck />
          </span>
          <span>
            <dd>{stats.years > 0 ? stats.years : "--"}</dd>
            <dt>Anos de Jornada</dt>
          </span>
        </div>

        <div id="contatoItem">
          <a href="mailto:gabriel.santos.tech256@gmail.com">
            <span className=" icon-contato">
              <FaRegEnvelope className="fa-light fa-envelope"></FaRegEnvelope>
            </span>
            <h4>Contato</h4>
          </a>
        </div>

        <div id="redesSociais">
          <a href="https://github.com/GabrielSantos15" target="_blank">
            <FaGithub className="fa-brands fa-github"></FaGithub>
          </a>

          <a href="https://www.linkedin.com/in/gabriel-santos-9217112a2">
            <FaLinkedin className="fa-brands fa-linkedin"></FaLinkedin>
          </a>

          <a href="https://www.instagram.com/gabrieldos5689" target="_blank">
            <FaInstagram className="fa-brands fa-instagram"></FaInstagram>
          </a>
        </div>
      </footer>
      <canvas ref={canvasRef}></canvas>
    </section>
  );
}
