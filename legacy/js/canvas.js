const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 34;
const maxDistance = 150;

// Mouse state para interação
const mouse = {
  x: null,
  y: null,
  radius: 120,
  active: false,
};

let animationRunning = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    // velocidades iniciais centradas em 0
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    // interação com o mouse (repulsão suave)
    if (mouse.active && mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius && dist > 0) {
        // força baseada na distância (mais perto = mais forte)
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        const repulse = 2.5 * force; // intensidade da repulsão

        this.vx += Math.cos(angle) * repulse;
        this.vy += Math.sin(angle) * repulse;
      }

      // limitar velocidade para evitar movimentos intempestivos
      const speedLimit = 1;
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > speedLimit) {
        this.vx = (this.vx / speed) * speedLimit;
        this.vy = (this.vy / speed) * speedLimit;
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    document.querySelector("body").classList.contains("dark") ? ctx.fillStyle = "#ffffff99" : ctx.fillStyle = "#7460e758";
    ctx.fill();
  }
}

function initParticles() {
  particles = Array.from({ length: particleCount }, () => new Particle());
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(146, 134, 252,${1 - dist / maxDistance})`;
        ctx.lineWidth = 2;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  if (!animationRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.move();
    p.draw();
  });
  // desenha um indicador sutil do mouse (opcional)
  if (mouse.active && mouse.x !== null && mouse.y !== null) {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(146, 134, 252, 0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  connectParticles();
  requestAnimationFrame(animate);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!animationRunning) {
        animationRunning = true;
        animate();
      }
    } else {
      animationRunning = false;
    }
  });
}, { threshold: 0.1 });

observer.observe(canvas);

initParticles();

// Listeners do mouse no canvas
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  mouse.active = true;
});

canvas.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
  mouse.active = false;
});
