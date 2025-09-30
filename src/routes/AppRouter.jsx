import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Navbar, Footer } from "../imports";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-center mt-10">Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRouter;
