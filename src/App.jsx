import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { themeAtom, THEMES, UI } from "./components/UI";

function App() {
  const [theme] = useAtom(themeAtom);
  return (
    <>
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={[THEMES[theme].skyColor]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
