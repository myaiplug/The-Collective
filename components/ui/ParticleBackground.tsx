import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">
      {/* Base Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

      {/* Advanced Mesh Gradient Blobs */}
      <div className="absolute inset-0 filter blur-[120px] opacity-40 mix-blend-screen">
        {/* Cyan Blob */}
        <motion.div 
          className="absolute w-[70vw] h-[70vw] rounded-full bg-accent-cyan/15"
          animate={{
            x: ['-20%', '50%', '0%', '-20%'],
            y: ['0%', '40%', '20%', '0%'],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '5%', top: '5%' }}
        />
        
        {/* Purple Blob */}
        <motion.div 
          className="absolute w-[80vw] h-[80vw] rounded-full bg-accent-purple/15"
          animate={{
            x: ['70%', '0%', '50%', '70%'],
            y: ['50%', '0%', '70%', '50%'],
            scale: [1.2, 0.7, 1.4, 1.2],
            rotate: [0, -120, -240, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '15%', top: '15%' }}
        />

        {/* Deep Dark Blob */}
        <motion.div 
          className="absolute w-[60vw] h-[60vw] rounded-full bg-white/10"
          animate={{
            x: ['10%', '80%', '40%', '10%'],
            y: ['80%', '10%', '50%', '80%'],
            scale: [0.9, 1.5, 1, 0.9],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '35%', top: '35%' }}
        />
      </div>

      {/* Mouse Follow Glow */}
      <motion.div 
        className="absolute w-[40vw] h-[40vw] rounded-full bg-accent-cyan/5 blur-[100px]"
        animate={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Enhanced Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: ['0%', '-120%'],
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`],
            opacity: [0, p.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Scanline / Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
};
