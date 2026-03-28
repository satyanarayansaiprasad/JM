import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Services from "./pages/Services";
import CaseStudies from "./pages/CardDetails";
import ServiceDetails from "./pages/ServiceDetails";
import ServiceDetailTwo from "./pages/ServiceDetailTwo";
import ServiceDetailThree from "./pages/ServiceDetailThree";
import ServiceDetailFour from "./pages/ServiceDetailFour";

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
        <Route path="/services-details" element={<ServiceDetails />} />
        <Route path="/services-details" element={<ServiceDetails />} />
        <Route path="/services-detail-2" element={<ServiceDetailTwo />} />
        <Route path="/services-detail-3" element={<ServiceDetailThree />} />
        <Route path="/services-detail-4" element={<ServiceDetailFour />} />
        {/* <Route path="/services-details" element={<ServiceDetails />} /> */}
        {/* <Route path="/services-details" element={<ServiceDetails />} /> */}
        {/* <Route path="/services-details" element={<ServiceDetails />} /> */}

        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </Router>
  );
};
