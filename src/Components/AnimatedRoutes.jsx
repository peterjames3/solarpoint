import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Spinner from "./Spinner";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Products from "../Pages/ProductsPage";
import Blog from "../Pages/Blog";
import ProductsDetailsPage from "./ProductsDetailsPage";
import Contact from "../Pages/Contact";
import Solutions from "../Pages/Solutions";
import PowerBackup from "../Pages/PowerBackup";
import SolarHybrid from "../Pages/SolarHybrid";
import SolarWaterHeaters from "../Pages/SolarWaterHeaters";
import SolarWaterPump from "../Pages/SolarWaterPump";
import { lazy, Suspense } from "react";
const NoPage = lazy(() => import("../Pages/NoPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/powerbackup" element={<PowerBackup />} />
          <Route path="/solarhybrid" element={<SolarHybrid />} />
          <Route path="/solarwaterheaters" element={<SolarWaterHeaters />} />
          <Route path="/solarwaterpump" element={<SolarWaterPump />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
