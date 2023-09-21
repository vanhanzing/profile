import React, { useEffect, useRef } from 'react';
import noise from 'asm-noise';

const PARAMS = {
  speed: 0.2,
  spacing: 150,
  scale: 300,
  dotSize: 4, // Increased dot size
};

const CanvasWrapper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    };

    const renderWave = (time: number) => {
      if (!ctx) {
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const size = PARAMS.spacing;

      for (let y = -size; y < canvas.height; y += size) {
        for (let x = -size; x < canvas.width; x += size) {
          const timeOffset = time * PARAMS.speed;
          const valueX = noise(
            (x + timeOffset) / PARAMS.scale,
            y / PARAMS.scale
          );
          const valueY = noise(
            x / PARAMS.scale,
            (y + timeOffset) / PARAMS.scale
          );

          ctx.fillStyle = '#999D26';

          const dotX = x + (valueX - 0.5) * 30 - size / 3;
          const dotY = y + (valueY - 0.5) * 30 - size / 3;
          ctx.beginPath();
          ctx.arc(dotX, dotY, PARAMS.dotSize, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }
    };

    let animationFrameId: number | null = null;
    const animate = (time: number) => {
      renderWave(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      updateCanvasSize();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    updateCanvasSize();

    noise.algorithm = 'perlin';
    noise.seed = Date.now();
    noise.octaves = 2;

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default CanvasWrapper;
