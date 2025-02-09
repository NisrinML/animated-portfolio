import "./css/app.scss"
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
  return <div>   
    <section id="Homepage">
      <Navbar/>
      <Homepage/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portifolio"/></section>
    <Portfolio/>
    <section id="About">About</section>
    <section id="Skills">Skills</section>
    <section id="Contant">Contact</section>

  </div>
};

export default App;
