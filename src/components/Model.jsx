import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ path }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(path)

  return (
    <group ref={group} dispose={null}>
      {Object.keys(nodes).map((obj) => {
        if (nodes[obj].type === "Mesh")
          return (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[obj].geometry}
              material={materials[nodes[obj].material.name]}
            />
          )
      })}
    </group>
  )
}
