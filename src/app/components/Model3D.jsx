"use client";

import React from "react";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useProgress } from "@react-three/drei";
import ROOT_DIR from "../data/root";

export default function Model3D() {
    return (
        <Suspense fallback={<Loader />}>
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

function Loader() {
    const { progress } = useProgress();
    return (
        <div
            className="text-white text-center w-full h-full bg-cover place-content-center rounded-lg"
        >
            Loading 3D Model... ({progress.toFixed(2)}%)
        </div>
    );
}

function Model() {
    const model = useGLTF(
        `${ROOT_DIR}/cesar_louvre_museum/scene.gltf`
    );
    return <primitive object={model.scene} position={[0, -0.2, 0]} />;
}

function Rotate(props) {
    const ref = useRef();
    useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime / 3));
    return <group ref={ref} {...props} />;
}
