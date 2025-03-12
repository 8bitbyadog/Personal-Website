import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

interface SpeechBubble {
  text: string;
  duration: number;
}

const PixelCompanion: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 0, y: 0 });
  const [characterState, setCharacterState] = useState<'idle' | 'excited' | 'curious'>('idle');
  const [speechBubble, setSpeechBubble] = useState<SpeechBubble | null>(null);
  const [facingDirection, setFacingDirection] = useState<'left' | 'right'>('right');

  // Update character position with smooth animation
  useEffect(() => {
    const updatePosition = () => {
      const dx = targetPosition.x - position.x;
      const dy = targetPosition.y - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        const speed = Math.min(distance * 0.1, 15);
        const newX = position.x + (dx / distance) * speed;
        const newY = position.y + (dy / distance) * speed;
        setPosition({ x: newX, y: newY });

        // Update character state and facing direction based on movement
        setCharacterState(distance > 100 ? 'excited' : 'idle');
        setFacingDirection(dx > 0 ? 'right' : 'left');
      }
    };

    const animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, targetPosition]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offset = { x: 40, y: 40 }; // Offset from cursor
      setTargetPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle element interactions
  const handleElementHover = useCallback((element: Element) => {
    setCharacterState('curious');
    const elementName = element.tagName.toLowerCase();
    const messages = {
      button: "Click it! Click it!",
      a: "Shall we explore?",
      img: "Ooh, pretty!",
      default: "What's this?",
    };
    
    setSpeechBubble({
      text: messages[elementName as keyof typeof messages] || messages.default,
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const handleElementMouseEnter = (event: Event) => {
      if (event.target instanceof Element) {
        handleElementHover(event.target);
      }
    };

    const interactiveElements = document.querySelectorAll('button, a, img');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleElementMouseEnter);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleElementMouseEnter);
      });
    };
  }, [handleElementHover]);

  // Clear speech bubble after duration
  useEffect(() => {
    if (speechBubble) {
      const timer = setTimeout(() => {
        setSpeechBubble(null);
      }, speechBubble.duration);
      return () => clearTimeout(timer);
    }
  }, [speechBubble]);

  const characterVariants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    excited: {
      scale: [1, 1.1, 1],
      rotate: [-5, 5, -5],
      transition: {
        duration: 0.5,
        repeat: Infinity
      }
    },
    curious: {
      rotate: [-10, 0, 10, 0],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <motion.div
        animate={characterState}
        variants={characterVariants}
        className="relative"
      >
        {/* Pixel Art Character */}
        <div className={`w-16 h-16 relative ${facingDirection === 'left' ? 'scale-x-[-1]' : ''}`}>
          {/* Body */}
          <div className="absolute inset-0 bg-yellow-400 rounded-lg pixel-perfect" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' }} />
          
          {/* Eyes */}
          <div className="absolute w-2 h-2 bg-gray-900 rounded-full pixel-perfect" style={{ left: '35%', top: '30%' }} />
          <div className="absolute w-2 h-2 bg-gray-900 rounded-full pixel-perfect" style={{ left: '55%', top: '30%' }} />
          
          {/* Mouth */}
          <div className={`absolute w-6 h-3 border-b-2 border-gray-900 pixel-perfect ${characterState === 'excited' ? 'rounded-b-lg' : ''}`} style={{ left: '35%', top: '50%' }} />
          
          {/* Antenna */}
          <div className="absolute w-1 h-4 bg-yellow-400 pixel-perfect" style={{ left: '50%', top: '-10%' }}>
            <div className="absolute w-2 h-2 bg-yellow-300 rounded-full pixel-perfect" style={{ top: '-50%', left: '-25%' }} />
          </div>
        </div>
        
        {/* Speech Bubble */}
        <AnimatePresence>
          {speechBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: -60 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="absolute left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg pixel-border whitespace-nowrap"
            >
              <p className="font-pixel text-xs">{speechBubble.text}</p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <div className="w-3 h-3 bg-white pixel-perfect rotate-45 border-r-2 border-b-2 border-yellow-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PixelCompanion; 