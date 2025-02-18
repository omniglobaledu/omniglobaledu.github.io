import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServiceLayout from './pages/services/ServiceLayout';
import ServicePage from './pages/services/ServicePage';
import AboutUs from './pages/about/AboutUs';
import OurTeam from './pages/about/OurTeam';
import OurMission from './pages/about/OurMission';
import ReferralPage from './pages/ReferralPage';
import ContactPage from './pages/ContactPage';
import DestinationPage from './pages/destinations/DestinationPage';

// Define smooth animation without flashing background
const pageVariants = {
  initial: {
    y: "-100vh", // Comes from the top
    opacity: 0,
    scale: 0.98, // Slightly zoomed out
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
  exit: {
    y: "100vh", // Moves out to the bottom
    opacity: 0,
    scale: 1.02, // Slight zoom-out effect while exiting
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

// Page Wrapper with animation
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-50" // Keep background smooth
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><OurTeam /></PageWrapper>} />
        <Route path="/mission" element={<PageWrapper><OurMission /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogPostPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServiceLayout /></PageWrapper>}>
          <Route path=":serviceId" element={<PageWrapper><ServicePage /></PageWrapper>} />
        </Route>
        <Route path="/study-in-/:country" element={<PageWrapper><DestinationPage /></PageWrapper>} />
        <Route path="/destination/:country" element={<PageWrapper><DestinationPage /></PageWrapper>} />
        <Route path="/referral" element={<PageWrapper><ReferralPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
