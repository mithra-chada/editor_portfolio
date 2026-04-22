"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function ThreeCanvas() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                {/* Soft lighting for the premium dark look */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFD1A6" />
                <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#CC7A10" />

                <Environment preset="city"
                /* City preset provides clean reflections */
                />
            </Canvas>
        </div>
    );
}
