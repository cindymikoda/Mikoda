import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Footer";
import Social from "./components/Social";

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
