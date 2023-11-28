import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Lourdes from "./components/lourdes/Lourdes";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Lourdes />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact /> 
       </section>
    </div>
  );
};

export default App;
