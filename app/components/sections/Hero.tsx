"use client";

import {
    FaRegEnvelope,
    FaCodeBranch,
    FaGithub,
    FaRegCalendarCheck,
    FaInstagram,
    FaLinkedin,
    FaCode,
    FaArrowDown,
} from "react-icons/fa6";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "next-themes"; // <-- Importamos o hook
import styles from "./Hero.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";


const LIGHT_COLOR = "rgb(167, 4, 4)";
const DARK_COLOR = "rgb(179, 7, 7)";

const TRAIL_PARTICLES = 2;
const EXPLOSION_PARTICLES = 20;
const MAX_PARTICLES = 300;

type Point = {
    x: number;
    y: number;
};

interface ParticleConfig {
    position: Point;
    vel: Point;
    size: number;
}

class Particle {
    position: Point;
    vel: Point;
    size: number;
    maxSize: number;

    constructor({ position, vel, size }: ParticleConfig) {
        this.position = position;
        this.vel = vel;
        this.size = size;
        this.maxSize = size;
    }

    update(): boolean {
        this.size -= 0.4;
        this.position.x += this.vel.x;
        this.position.y += this.vel.y;
        return this.size > 0;
    }

    draw(ctx: CanvasRenderingContext2D, color: string) {
        const opacity = Math.max(this.size, 0) / this.maxSize;

        ctx.fillStyle = color
            .replace("rgb", "rgba")
            .replace(")", `, ${opacity})`);

        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function getPointFromEvent(canvas: HTMLCanvasElement, event: Event): Point {
    const rect = canvas.getBoundingClientRect();
    const touchEvent = event as unknown as TouchEvent;
    const pointerEvent = event as unknown as PointerEvent;

    const source = touchEvent.touches?.[0] ?? pointerEvent;

    return {
        x: source.clientX - rect.left,
        y: source.clientY - rect.top,
    };
}

export default function Hero() {
    const { resolvedTheme } = useTheme();

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const colorRef = useRef<string>(DARK_COLOR);

    useEffect(() => {
        colorRef.current = resolvedTheme === "dark" ? DARK_COLOR : LIGHT_COLOR;
    }, [resolvedTheme]);

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        let lastPointerPos: Point = { x: 0, y: 0 };
        let animationId: number;
        let lastTime = 0;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handlePointerMove = (event: Event) => {
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
                            size: Math.random() * 25 + 10,
                        })
                    );
                }
            }

            lastPointerPos = { x, y };
        };

        const handlePointerDown = (event: Event) => {
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
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

            const color = colorRef.current;

            ctx!.shadowColor = color;
            ctx!.shadowBlur = 10;

            for (let i = particles.length - 1; i >= 0; i--) {
                const particle = particles[i];

                if (!particle.update()) {
                    particles.splice(i, 1);
                    continue;
                }

                particle.draw(ctx!, color);
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

    const isWorkana = process.env.NEXT_PUBLIC_PORTFOLIO_VARIANT === "workana";

    return (
        <section className={styles.homeSection} id="homeSection">
            <div className={styles.heroContent}>
                <div></div>
                <article className={styles.titleWrapper}>
                    <div className={styles.homeTitle}>
                        <h1>port</h1>
                        <h1>folio</h1>
                    </div>
                    <h2>Software Developer</h2>
                </article>
                <div className={styles.heroDecorations}>
                    <ul className={styles.roleList}>
                        <li>[01] FULL-STACK WEB & MOBILE</li>
                        <li>[02] BUSINESS INTELLIGENCE & DATA</li>
                        <li>[03] UI/UX PROTOTYPING</li>
                    </ul>

                    <div className={styles.visualElement}>
                        <div className={styles.barcode}></div>
                        <p>GABRIEL-V2.0.26</p>
                    </div>
                </div>
            </div>

            <footer className={styles.homeFooter}>
                <div className={`${styles.statItem} ${styles.locationItem}`}>
                    <span className={styles.iconBox}>
                        <FaMapMarkerAlt />
                    </span>
                    <span className={styles.itemContent}>
                        <dd className={styles.locationTitle}>
                            Boituva, <span>SP</span>
                        </dd>
                        <dt>Disponível para mudança</dt>
                    </span>
                </div>

                <div className={styles.statItem}>
                    <span className={styles.iconBox}>
                        <FaCode />
                    </span>
                    <span className={styles.itemContent}>
                        <dd>15+</dd>
                        <dt>Tecnologias</dt>
                    </span>
                </div>

                <div className={styles.statItem}>
                    <span className={styles.iconBox}>
                        <FaRegCalendarCheck />
                    </span>
                    <span>
                        <dd>1+</dd>
                        <dt>Anos de Carreira</dt>
                    </span>
                </div>

                {!isWorkana ?
                    <>
                        <div className={styles.contatoItem}>
                            <a href="mailto:gabriel.santos.tech256@gmail.com">
                                <span className={styles.iconContato}>
                                    <FaRegEnvelope />
                                </span>
                                <h4>Contato</h4>
                            </a>
                        </div>

                        <div className={styles.redesSociais}>
                            <a
                                href="https://github.com/GabrielSantos15"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/gabrielsantos1509/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/gabrieldos5689/" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </> :
                 <>
                        {/* 1. Substitui o Contato por um Call to Action interno */}
                        <div className={styles.contatoItem}>
                            <a href="#projetos"> {/* Coloque aqui o ID da sua secção de projetos */}
                                <span className={styles.iconContato}>
                                    <FaArrowDown /> {/* Não se esqueça de importar este ícone! */}
                                </span>
                                <h4>Projetos</h4>
                            </a>
                        </div>

                        {/* 2. Substitui as redes sociais por um texto para manter o grid intacto */}
                        <div className={styles.redesSociais} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                             <span style={{ 
                                 fontFamily: 'var(--font-heading)', 
                                 fontSize: '0.8rem', 
                                 letterSpacing: '2px', 
                                 opacity: 0.8 
                             }}>
                                 WORKANA FREELANCER
                             </span>
                        </div>
                    </>
                }
            </footer>

            <canvas ref={canvasRef} />
        </section>
    );
}