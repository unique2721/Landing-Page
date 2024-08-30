import React from "react";
/* components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
      <Features />
    </>
  );
};

export default App;
