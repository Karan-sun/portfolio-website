"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const KanjiParticle = ({ text, position }: { text: string, position: [number, number, number] }) => {
  const mesh = useRef<THREE.Group>(null);

  // Memoize random values so they stay consistent for the life of the particle
  const config = useMemo(() => ({
    speed: Math.random() * 0.02 - 0.01,
    drift: Math.random() * 0.01 - 0.005,
    fontSize: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    color: Math.random() > 0.6 ? '#E63946' : '#A8DADC'
  }), []);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += config.speed;
    mesh.current.rotation.x += config.speed * 0.5;
    mesh.current.position.y += config.drift;

    // Bounds check: Reset position if it drifts too far up or down
    if (mesh.current.position.y > 12) mesh.current.position.y = -12;
    if (mesh.current.position.y < -12) mesh.current.position.y = 12;
  });

  return (
    <group ref={mesh} position={position}>
      <Text
        fontSize={config.fontSize}
        color={config.color}
        fillOpacity={config.opacity}
        // Using a more reliable font source or local path
        // font="/fonts/ShareTechMono.ttf"
      // If the above fails, you can comment it out to use the default font
      >
        {text}
      </Text>
    </group>
  );
};

const KanjiScene = () => {
  const characters = ['λ', '∑', '∂', 'if', 'else', 'def', 'await', '∞', 'Δ', '∇', 'θ', 'import', 'return'];

  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      text: characters[Math.floor(Math.random() * characters.length)],
      position: [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 5
      ] as [number, number, number]
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth parallax based on mouse position
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 1.5, 0.05);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 1.5, 0.05);

      // Subtle breathing effect for the camera
      state.camera.position.z = 15 + Math.sin(state.clock.elapsedTime * 0.3) * 1.5;
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <KanjiParticle key={i} text={p.text} position={p.position} />
      ))}
    </group>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <KanjiScene />
        </Suspense>
      </Canvas>
    </div>
  );
};