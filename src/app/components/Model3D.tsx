"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
export default function Model3D() {
    return (
        <Canvas shadows camera={{ position: [10, 4, 0], fov: 4 }}>
            <Model />
            <OrbitControls makeDefault />
        </Canvas>
    );
}

function Model() {
    const model = useGLTF("/cesar_louvre_museum/scene.gltf");
    return <primitive object={model.scene} position={[0, -0.2, 0]} />;
}
