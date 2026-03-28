import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Services from "./pages/Services";

export const NavigationRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
      
      </Routes>
      <Footer />
    </Router>
  );
};
