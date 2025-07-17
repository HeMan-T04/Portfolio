'use client'
import { useEffect, useRef } from 'react';

const MatrixRainBackground = () => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
  const fontSize = 10;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let columns, drops;

    function adjustCanvasSize() {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    }

    // Initial adjustment
    adjustCanvasSize();

    // Add event listener to adjust canvas size on container resize
    window.addEventListener('resize', adjustCanvasSize);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const animationInterval = setInterval(draw, 33);

    // Cleanup the interval and event listener when the component is unmounted
    return () => {
      clearInterval(animationInterval);
      window.removeEventListener('resize', adjustCanvasSize);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default MatrixRainBackground;
