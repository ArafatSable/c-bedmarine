import React, { useRef,useEffect  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Description from "./Components/Description";
import Services from "./Components/Services";
import About from "./Components/About"; // <- You'll need to create this
import MarineOperations  from "./Components/MarineOperations"; // <- You'll need to create this
import Footer from "./Components/Footer"; // <- You'll need to create this

function HomePage() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="pt-[70px] md:pt-[110px]">
        {" "}
        {/* Or pt-[80px] depending on navbar height */}
        <Content scrollToServices={scrollToServices} />
      </div>
      <Description />
      <div ref={servicesRef}>
      <Services />
      </div>
      <MarineOperations />
      
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
