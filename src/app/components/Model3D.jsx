"use client";

import React from "react";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import Image from "next/image";

export default function Model3D() {
    return (
        <Suspense
            fallback={
                <div
                    className="text-white/70 text-center w-full h-full bg-cover place-content-center rounded-lg"
                    style={{
                        backgroundImage: `url("https://ttlinhnguyen.github.io/worldmuseum/cesar_louvre_museum/scene.png")`,
                    }}
                >
                    Loading 3D Model...
                </div>
            }
        >
            <Canvas
                shadows
                camera={{ position: [10, 4, 0], fov: 5.5 }}
                className="cursor-grab active:cursor-grabbing"
            >
                <Rotate>
                    <Model />
                </Rotate>
                <OrbitControls makeDefault />
            </Canvas>
        </Suspense>
    );
}

function Model() {
    const model = useGLTF(
        "https://ttlinhnguyen.github.io/worldmuseum/cesar_louvre_museum/scene.gltf"
    );
    return <primitive object={model.scene} position={[0, -0.2, 0]} />;
}

function Rotate(props) {
    const ref = useRef();
    useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime / 3));
    return <group ref={ref} {...props} />;
}
