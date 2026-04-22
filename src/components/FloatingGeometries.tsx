"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { Clapperboard } from "lucide-react";

export function FloatingGeometries() {
    const groupRef = useRef<THREE.Group>(null);

    // Subtle parallax based on mouse
    useFrame((state) => {
        if (!groupRef.current) return;
        const { pointer } = state;

        // Smooth interpolation for mouse parallax
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (pointer.y * Math.PI) / 20, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (pointer.x * Math.PI) / 20, 0.05);
    });

    return (
        <group ref={groupRef}>
            {/* Filmora Logo image from public/logos/filmora.png */}
            <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5} floatingRange={[-0.6, 0.6]}>
                <Html transform position={[-4, 1, -5]} scale={1.2} distanceFactor={10} zIndexRange={[10, 0]}>
                    <img src="/logos/filmora.png" alt="Filmora Logo" className="w-24 h-24 object-contain shadow-2xl rounded-3xl opacity-100 select-none pointer-events-none drop-shadow-[0_0_15px_rgba(0,229,181,0.5)]" />
                </Html>
            </Float>

            {/* Premiere Pro Logo image from public/logos/premiere.svg */}
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2} floatingRange={[-0.4, 0.4]}>
                <Html transform position={[3, -2, -3]} scale={1.2} distanceFactor={10} zIndexRange={[10, 0]}>
                    <img src="/logos/premiere.svg" alt="Premiere Pro Logo" className="w-20 h-20 object-contain shadow-2xl rounded-xl opacity-100 select-none pointer-events-none drop-shadow-[0_0_15px_rgba(234,119,255,0.5)] bg-[#00005C]" />
                </Html>
            </Float>

            {/* DaVinci Resolve Logo image from public/logos/davinci.png */}
            <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5} floatingRange={[-0.5, 0.7]}>
                <Html transform position={[-2, -3, -4]} scale={1.3} distanceFactor={10} zIndexRange={[10, 0]}>
                    <img src="/logos/davinci.png" alt="DaVinci Resolve Logo" className="w-24 h-24 object-contain shadow-2xl rounded-full opacity-100 select-none pointer-events-none drop-shadow-[0_0_15px_rgba(255,204,0,0.5)] bg-[#111]" />
                </Html>
            </Float>
        </group>
    );
}
