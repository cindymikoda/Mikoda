import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Social from "./components/Social";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <About />
      <Social />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
