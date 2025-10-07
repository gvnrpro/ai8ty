import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  variant?: 'cyber' | 'neural' | 'terminal';
}

export const ParticleField: React.FC<ParticleFieldProps> = ({ 
  count = 2000,
  variant = 'cyber'
}) => {
  const mesh = useRef<THREE.Points>(null);
  
  const colors = {
    cyber: new THREE.Color(0x00FFFF),    // Cyan
    neural: new THREE.Color(0x8B5CF6),   // Purple
    terminal: new THREE.Color(0x00FF00), // Green
  };

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.025;
    
    // Gentle floating animation
    mesh.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={colors[variant]}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
