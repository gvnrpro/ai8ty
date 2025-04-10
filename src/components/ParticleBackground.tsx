
import React, { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {
  color?: string;
  density?: number;
  className?: string;
  mode?: 'default' | 'network' | 'fluid' | 'matrix';
  interactive?: boolean;
  speed?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  color = "#8C52FF", 
  density = 30,
  className,
  mode = 'default',
  interactive = true,
  speed = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particleCount = isMobile ? Math.floor(density / 2) : density;
  const animationSpeedFactor = speed;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { 
      x: number; 
      y: number; 
      size: number; 
      speedX: number; 
      speedY: number;
      opacity: number;
      color?: string;
      connection?: number[];
    }[] = [];
    
    // Mouse interaction handling
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    // Touch interaction for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (!interactive) return;
      
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      });
    };
    
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initNetworkParticles = () => {
      particles = [];
      const maxConnections = isMobile ? 2 : 3;
      
      for (let i = 0; i < particleCount; i++) {
        // Create connections between particles (network structure)
        const connections: number[] = [];
        const maxAttempts = 10; // Prevent infinite loops
        let attempts = 0;
        
        while (connections.length < maxConnections && attempts < maxAttempts) {
          const connectionIndex = Math.floor(Math.random() * particleCount);
          if (connectionIndex !== i && !connections.includes(connectionIndex)) {
            connections.push(connectionIndex);
          }
          attempts++;
        }
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3 * animationSpeedFactor,
          speedY: (Math.random() - 0.5) * 0.3 * animationSpeedFactor,
          opacity: Math.random() * 0.5 + 0.3,
          connection: connections
        });
      }
    };
    
    const initFluidParticles = () => {
      particles = [];
      const colorVariations = [
        color,
        adjustColorBrightness(color, 20),
        adjustColorBrightness(color, -20)
      ];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.8 * animationSpeedFactor,
          speedY: (Math.random() - 0.5) * 0.8 * animationSpeedFactor,
          opacity: Math.random() * 0.6 + 0.2,
          color: colorVariations[Math.floor(Math.random() * colorVariations.length)]
        });
      }
    };
    
    const initMatrixParticles = () => {
      particles = [];
      // Create a falling code effect
      for (let i = 0; i < particleCount * 2; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: 0,
          speedY: (Math.random() * 1 + 0.5) * animationSpeedFactor,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };
    
    const initDefaultParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5 * animationSpeedFactor,
          speedY: (Math.random() - 0.5) * 0.5 * animationSpeedFactor,
          opacity: Math.random() * 0.6 + 0.2
        });
      }
    };
    
    const initParticles = () => {
      switch (mode) {
        case 'network':
          initNetworkParticles();
          break;
        case 'fluid':
          initFluidParticles();
          break;
        case 'matrix':
          initMatrixParticles();
          break;
        default:
          initDefaultParticles();
      }
    };
    
    const drawDefaultParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Interactive attraction/repulsion with mouse
        if (interactive && mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            particle.x -= dx * 0.01;
            particle.y -= dy * 0.01;
          }
        }
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - p2.x, 2) + 
            Math.pow(particle.y - p2.y, 2)
          );
          
          if (distance < 100) {
            ctx.lineWidth = 0.2;
            ctx.globalAlpha = (1 - distance / 100) * 0.5;
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        ctx.globalAlpha = 1;
      });
    };
    
    const drawNetworkParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // First draw connections
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = color;
      
      particles.forEach((particle, i) => {
        // Move particle with slight randomization
        particle.x += particle.speedX + (Math.random() - 0.5) * 0.1;
        particle.y += particle.speedY + (Math.random() - 0.5) * 0.1;
        
        // Interactive attraction with mouse
        if (interactive && mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            particle.x += dx * 0.002;
            particle.y += dy * 0.002;
          }
        }
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw connections
        if (particle.connection && particle.connection.length) {
          particle.connection.forEach(connIdx => {
            if (connIdx < particles.length) {
              const connectedParticle = particles[connIdx];
              ctx.globalAlpha = particle.opacity * 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(connectedParticle.x, connectedParticle.y);
              ctx.stroke();
            }
          });
        }
      });
      
      // Then draw particles (on top of connections)
      particles.forEach(particle => {
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.globalAlpha = 1;
    };
    
    const drawFluidParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use composite operations for a more fluid look
      ctx.globalCompositeOperation = 'lighter';
      
      particles.forEach(particle => {
        // Create a more fluid-like movement
        particle.x += particle.speedX + Math.sin(Date.now() * 0.001 + particle.y * 0.01) * 0.3;
        particle.y += particle.speedY + Math.cos(Date.now() * 0.001 + particle.x * 0.01) * 0.3;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, particle.color || color);
        gradient.addColorStop(1, 'transparent');
        
        // Draw a blurred circle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    };
    
    const drawMatrixParticles = () => {
      // Add a subtle fade effect instead of fully clearing
      ctx.fillStyle = 'rgba(12, 12, 12, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Move particle downward
        particle.y += particle.speedY;
        
        // Reset when it reaches bottom
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
        
        // Draw a matrix-like character
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.font = `${particle.size * 5}px monospace`;
        ctx.fillText(
          getRandomCharacter(),
          particle.x,
          particle.y
        );
      });
      
      ctx.globalAlpha = 1;
    };
    
    const drawParticles = () => {
      switch (mode) {
        case 'network':
          drawNetworkParticles();
          break;
        case 'fluid':
          drawFluidParticles();
          break;
        case 'matrix':
          drawMatrixParticles();
          break;
        default:
          drawDefaultParticles();
      }
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    // Initialize and start animation
    resizeCanvas();
    
    // For reduced motion preference, use less animation
    if (prefersReducedMotion) {
      // Just draw once for reduced motion
      drawParticles();
    } else {
      // Animate continuously for normal motion
      drawParticles();
    }
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount, mode, interactive, mousePosition, animationSpeedFactor, isMobile, prefersReducedMotion]);
  
  // Helper function to get random matrix-like character
  const getRandomCharacter = () => {
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };
  
  // Helper function to adjust color brightness
  const adjustColorBrightness = (color: string, percent: number) => {
    if (color.startsWith('#')) {
      let r = parseInt(color.substring(1, 3), 16);
      let g = parseInt(color.substring(3, 5), 16);
      let b = parseInt(color.substring(5, 7), 16);
      
      r = Math.min(255, Math.max(0, r + percent));
      g = Math.min(255, Math.max(0, g + percent));
      b = Math.min(255, Math.max(0, b + percent));
      
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    
    return color;
  };
  
  // For reduced motion, provide a simplified static version
  if (prefersReducedMotion) {
    return (
      <div
        className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className || ''}`}
        style={{ 
          backgroundImage: `radial-gradient(circle, ${color}20 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.3
        }}
      />
    );
  }
  
  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none will-change-transform ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default ParticleBackground;
