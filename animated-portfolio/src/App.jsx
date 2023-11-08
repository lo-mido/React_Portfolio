import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Lourdes from "./components/Lourdes/Lourdes";

const App = () => {
  return (
    <>
  <div>

<section id="Homepage"> <Navbar/><Lourdes/></section>
<section className="lourdes">
  <div>
  </div>
  <div>
  </div>
</section>
<section id="Services"> Parallax</section>
<section>Services</section>
<section id="Portfolio"> Parallax</section>
<section> Portfolio1</section>
<section> Portfolio2</section>
<section> Portfolio3</section>
<section> Portfolio4</section>
<section> Portfolio5</section>
<section> Portfolio6</section>
<section id="Contact"> Contact </section>
</div>

</>
);
};

export default App;
