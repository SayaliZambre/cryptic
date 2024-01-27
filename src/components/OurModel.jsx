import React from 'react';
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  // Move useGLTF outside of the try block
  const { scene } = useGLTF('/bitcoin.glb');

  try {
    return <primitive object={scene} {...props} />;
  } catch (error) {
    console.error('Error loading GLTF:', error);
    return null; // or render a fallback component
  }
}

const OurModel = () => {
  return (
    <div>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", top: "7%" }}>
        <color attach="background" args={['#101010']} />
        <ambientLight intensity={-1} />
  
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default OurModel;
