import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Headline from "./Components/Headline/Headline.jsx";
import Services from "./Components/Services/Services.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Education from "./Components/Education/Education.jsx";
import Plans from "./Components/Plans/Plans.jsx";
import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Services />
      <AboutMe />
      <Projects />
      <Headline />
      <Education />
      <Plans />
      <Headline />
      <Testimonial />
      <ContactMe />
      <Headline />
      <Footer />
    </div>
  );
}

export default App;
