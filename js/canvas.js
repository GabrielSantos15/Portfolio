const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 20;
const maxDistance = 150;

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
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    darkModeStatus ? ctx.fillStyle = "#ffffff99" :  ctx.fillStyle = "#7460e758";
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
