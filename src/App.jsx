import "./App.css";
import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Sphere from "./components/Sphere";
import Model from "./components/Model";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default function App() {
  return (
    <div className="app">
      <div id="canvas-container">
        <Canvas shadows>
          <Suspense fallback={null}>
            {/* <Sphere /> */}
            <Model path="/demoModel.gltf" />
            <CameraController />
            <ambientLight color={"lightpink"} intensity={1.1} />
            <pointLight position={[100, 30, -100]} intensity={0.1} />
            <Environment preset="night" background />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
