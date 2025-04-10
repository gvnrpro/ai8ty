
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  glitchIntensity?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 3000,
  glitchIntensity = 20
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(text);
      return;
    }

    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let currentText = '';
    let fullTextRevealed = false;
    
    // Delay start
    const startDelay = setTimeout(() => {
      setIsGlitching(true);
      
      // Gradually reveal text with glitch effect
      const interval = setInterval(() => {
        if (fullTextRevealed) {
          setIsGlitching(false);
          clearInterval(interval);
          return;
        }
        
        const targetTextLength = Math.min(text.length, 
          Math.ceil((Date.now() - (delay + performance.now())) / duration * text.length));
        
        currentText = text.substring(0, targetTextLength);
        
        // Add glitch characters at end
        if (targetTextLength < text.length) {
          const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          currentText += glitchChar;
        } else {
          fullTextRevealed = true;
        }
        
        setDisplayText(currentText);
      }, 50);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(startDelay);
  }, [text, delay, duration, glitchIntensity]);

  return (
    <span className={cn("relative inline-block", className)}>
      {displayText}
      {isGlitching && (
        <span 
          className="absolute left-0 top-0 mix-blend-difference animate-glitch opacity-70"
          aria-hidden="true"
        >
          {displayText}
        </span>
      )}
    </span>
  );
};

export default GlitchText;
