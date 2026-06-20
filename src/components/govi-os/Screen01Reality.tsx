'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const DEPARTMENTS = [
  'Admissions',
  'Finance',
  'HR',
  'Registrar',
  'Student Services',
  'Compliance',
  'Facilities',
  'Procurement',
  'IT',
  'Communications',
  'Alumni',
  'Research',
  'Library',
  'Payroll',
];

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  fadingIn: boolean;
  speed: number;
}

function createDots(width: number, height: number): Dot[] {
  const dots: Dot[] = [];
  const padding = 60;

  for (let i = 0; i < DEPARTMENTS.length; i++) {
    dots.push({
      x: padding + Math.random() * (width - padding * 2),
      y: padding + Math.random() * (height - padding * 2),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      label: DEPARTMENTS[i],
    });
  }

  // Add extra unlabeled dots to reach ~30
  for (let i = DEPARTMENTS.length; i < 30; i++) {
    dots.push({
      x: padding + Math.random() * (width - padding * 2),
      y: padding + Math.random() * (height - padding * 2),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      label: '',
    });
  }

  return dots;
}

function createConnections(): Connection[] {
  const connections: Connection[] = [];
  const count = 12;

  for (let i = 0; i < count; i++) {
    const from = Math.floor(Math.random() * 30);
    let to = Math.floor(Math.random() * 30);
    while (to === from) to = Math.floor(Math.random() * 30);

    connections.push({
      from,
      to,
      opacity: Math.random() * 0.08,
      fadingIn: Math.random() > 0.5,
      speed: 0.001 + Math.random() * 0.003,
    });
  }

  return connections;
}

export default function Screen01Reality() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const dots = dotsRef.current;
    const connections = connectionsRef.current;

    // Update and draw connections
    for (const conn of connections) {
      if (conn.fadingIn) {
        conn.opacity += conn.speed;
        if (conn.opacity >= 0.1) conn.fadingIn = false;
      } else {
        conn.opacity -= conn.speed;
        if (conn.opacity <= 0.02) {
          conn.fadingIn = true;
          // Occasionally rewire
          if (Math.random() > 0.7) {
            conn.from = Math.floor(Math.random() * dots.length);
            conn.to = Math.floor(Math.random() * dots.length);
          }
        }
      }

      const a = dots[conn.from];
      const b = dots[conn.to];
      if (a && b) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${conn.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    // Update and draw dots
    for (const dot of dots) {
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Soft boundary bounce
      if (dot.x < 40 || dot.x > width - 40) dot.vx *= -1;
      if (dot.y < 40 || dot.y > height - 40) dot.vy *= -1;

      // Draw dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fill();

      // Draw label
      if (dot.label) {
        ctx.font = '10px ui-sans-serif, system-ui, sans-serif';
        ctx.fillStyle = 'rgba(113, 113, 122, 0.8)';
        ctx.fillText(dot.label, dot.x + 8, dot.y + 3);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);

      dotsRef.current = createDots(rect.width, rect.height);
      connectionsRef.current = createConnections();
    };

    resize();
    window.addEventListener('resize', resize);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.1] text-white"
        >
          Universities don&apos;t need<br />more software.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.6rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.15] text-zinc-400 mt-2 md:mt-4"
        >
          They need their software<br />to work together.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-zinc-500 max-w-lg mx-auto mt-8 font-medium leading-relaxed"
        >
          A unified operational fabric for higher education. Built to move work, not just store data.
        </motion.p>
      </div>
    </section>
  );
}
