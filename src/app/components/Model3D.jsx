"use client";

import React from "react";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function Model3D() {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Canvas shadows camera={{ position: [10, 4, 0], fov: 5.5 }}>
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
