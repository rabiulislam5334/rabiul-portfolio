import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";

// Components
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";
import About from "./components/About";

// একটি আলাদা কম্পোনেন্ট সব সেকশন হোল্ড করার জন্য
const MainLayout = () => (
  <div className="bg-[#0a0a0a] text-white selection:bg-purple-600">
    <Cursor />
    <Navbar />
    <div id="home">
      <Hero />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="experience">
      <Experience />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="education">
      <Education />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ১. Smooth Scroll (Lenis) Setup
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ২. লোডার কন্ট্রোল (২ সেকেন্ড পর কন্টেন্ট দেখাবে)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <Routes>
            {/* মেইন হোমপেজ রুট */}
            <Route path="/" element={<MainLayout />} />

            {/* ভুল লিঙ্কের জন্য ৪-৪ রুট */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
