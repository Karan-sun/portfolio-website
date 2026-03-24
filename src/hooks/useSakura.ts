import { useEffect, useRef } from 'react';

class Petal {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  rotation: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height - height;
    this.z = Math.random() * 0.5 + 0.5;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = Math.random() * 1.5 + 1;
    this.width = width;
    this.height = height;
    this.rotation = Math.random() * 360;
  }

  update() {
    this.x += this.vx * this.z;
    this.y += this.vy * this.z;
    this.rotation += this.vx * 2;

    if (this.y > this.height) {
      this.y = -20;
      this.x = Math.random() * this.width;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.scale(this.z, this.z);

    // Draw a petal shape
    ctx.fillStyle = '#FFB7C5';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.bezierCurveTo(10, -10, 15, 5, 0, 10);
    ctx.bezierCurveTo(-15, 5, -10, -10, 0, -10);
    ctx.fill();

    ctx.restore();
  }
}

export const useSakura = (enabled: boolean = true) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const petals: Petal[] = [];
    const numPetals = 40; // max reasonable petals for bg

    for (let i = 0; i < numPetals; i++) {
      petals.push(new Petal(width, height));
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.update();
        petal.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled]);

  return canvasRef;
};
