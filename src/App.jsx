import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Social from "./components/Social";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
/* BACKGROUND COMPONENTS */
import NightSky from "./background/NightSky";
import DaySky from "./background/DaySky";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={`app ${isDark ? "dark-theme" : "light-theme"}`}>
      {isDark ? <NightSky /> : <DaySky />}
      <div className="container-card">
        <About />
        <Social />
        <Buttons />
        <Footer />
      </div>
    </div>
  );
}
