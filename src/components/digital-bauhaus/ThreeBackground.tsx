import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { NeuralNetwork } from './NeuralNetwork';

interface ThreeBackgroundProps {
  variant?: 'particles' | 'neural' | 'combined';
  particleVariant?: 'cyber' | 'neural' | 'terminal';
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  variant = 'combined',
  particleVariant = 'cyber'
}) => {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        
        {(variant === 'particles' || variant === 'combined') && (
          <ParticleField variant={particleVariant} count={1500} />
        )}
        
        {(variant === 'neural' || variant === 'combined') && (
          <NeuralNetwork />
        )}
      </Canvas>
    </div>
  );
};
