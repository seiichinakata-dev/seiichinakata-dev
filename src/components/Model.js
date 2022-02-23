import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const { scene } = useGLTF(require('./assests/Eevee.glb'), () => console.log('loaded'))
    // scene.scene[0].castShadow = true
    return <primitive object={scene}/>
}