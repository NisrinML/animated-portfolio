import "./css/app.scss"
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Skills from "./components/skills/skills";

const App = () => {


  return <div>
    <section id="Homepage">
      <Navbar />
      <Homepage />
    </section>
    <section id="About">
      <About />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section><Services /></section>
    <section id="Skills">
      <Skills/>
    </section>
    <section id="Portfolio"><Parallax type="portifolio" /></section>
    <Portfolio />

    <section id="Contact">
      <Contact />
    </section>

  </div>
};

export default App;
