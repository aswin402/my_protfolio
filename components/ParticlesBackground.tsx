'use client';

import Particles from './Particles';

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        particleColors={['#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      />
    </div>
  );
}
