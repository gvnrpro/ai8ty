import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface Node {
  position: [number, number, number];
  connections: number[];
}

export const NeuralNetwork: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes: Node[] = useMemo(() => {
    const nodeCount = 30;
    const nodeArray: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const theta = (i / nodeCount) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      const y = (Math.random() - 0.5) * 4;
      
      const connections: number[] = [];
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodeCount);
        if (targetIndex !== i) {
          connections.push(targetIndex);
        }
      }
      
      nodeArray.push({
        position: [
          Math.cos(theta) * radius,
          y,
          Math.sin(theta) * radius
        ],
        connections
      });
    }
    
    return nodeArray;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Connection Lines */}
      {nodes.map((node, i) =>
        node.connections.map((targetIdx, j) => (
          <Line
            key={`${i}-${j}`}
            points={[node.position, nodes[targetIdx].position]}
            color="#00FFFF"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        ))
      )}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color="#8B5CF6"
            transparent
            opacity={0.8}
          />
          {/* Glow effect */}
          <pointLight color="#8B5CF6" intensity={0.5} distance={1} />
        </mesh>
      ))}
    </group>
  );
};
