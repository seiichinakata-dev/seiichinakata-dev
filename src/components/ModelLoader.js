import React from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Shadow, Bounds, useBounds } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

// [3, 2.9, 5]
import Model from "./Model";

function SelectToZoom({ children }) {
  const api = useBounds()
  return (
    <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
      {children}
    </group>
  )
}

const fov = window.innerWidth < 960 ?  80 : 50

export default function ModelLoader({ initial, animate }) {
  return (
    <motion.div className='section-model' animate={{ opacity: 1 }}>
      <Canvas camera={{ position: [5, 2.9, 5], fov: fov }} >
        <ambientLight intensity={0.35}/>
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Bounds fit clip margin={1.4}>
            <SelectToZoom>
              <Model />
            </SelectToZoom>
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault autoRotate={true} />
      </Canvas>
    </motion.div>
  )
}
