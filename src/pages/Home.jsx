import { Suspense, lazy } from "react";
import SwitcherShowcase from "../components/switchers";
import UltimateComponentLibrary from "../components/ComponentsAnimations";

const Hero = lazy(() => import("../components/Hero"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading Hero...</div>}>
      <Hero />
      <SwitcherShowcase/>
      <UltimateComponentLibrary/>
    </Suspense>
  );
};

export default Home;
