import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import BookingPage from "./pages/BookingPage";

// ScrollToTop Component to scroll the page to the top on route change
const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures scroll to top on route change */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
