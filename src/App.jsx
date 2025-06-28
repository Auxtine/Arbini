// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AllServices from "./Components/Services/AllServices.jsx"; // ✅ Import new page
import AllProjects from "./Components/Projects/AllProjects.jsx";

function Home() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
