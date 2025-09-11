import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-display text-brand mb-6 drop-shadow-glow">
        Particle Text Effect
      </h1>
      <ParticleTextEffect />
    </div>
  );
}
