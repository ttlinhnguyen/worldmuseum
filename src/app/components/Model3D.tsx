"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
export default function Model3D() {
    const model = useGLTF("/cesar_louvre_museum/scene.gltf");
    return (
        <Canvas shadows camera={{ position: [10, 4, 0], fov: 4 }}>
            <primitive object={model.scene} position={[0, -0.2, 0]} />
            <OrbitControls makeDefault />
        </Canvas>
    );
}
