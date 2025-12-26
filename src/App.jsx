import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // npm install @studio-freight/lenis
// import Cursor from './components/Cursor';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    // Smooth Scroll Setup
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-purple-600">
      <Cursor />
      <Navbar></Navbar>
      <Hero />
      <Skills />
      <Experience></Experience>
      <Projects />
      <Education />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
