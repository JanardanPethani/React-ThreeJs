import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

function Sphere(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.z += delta))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={hovered ? 1.5 : 1}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry castShadow receiveShadow />
      <meshStandardMaterial color={hovered ? "white" : "gray"} />
    </mesh>
  )
}

export default Sphere
