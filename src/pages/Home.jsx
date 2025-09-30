import { Suspense, lazy } from "react";

const Hero = lazy(() => import("../components/Hero"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading Hero...</div>}>
      <Hero />
    </Suspense>
  );
};

export default Home;
