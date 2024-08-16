import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";

import { useAtom } from "jotai";
import { Boids } from "./Boids";
import { themeAtom, THEMES } from "./UI";

export const Experience = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <>
      <OrbitControls />

      <Boids />

      {/* LIGHTS */}
      <SoftShadows size={15} focus={1.5} samples={12} />
      <Environment preset="sunset"></Environment>
      <directionalLight
        position={[15, 15, 15]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-far={300}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.1}
      />
      <hemisphereLight
        intensity={1.35}
        color={THEMES[theme].skyColor}
        groundColor={THEMES[theme].groundColor}
      />
    </>
  );
};
