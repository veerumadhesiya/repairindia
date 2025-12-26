import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Pages
import Home from "./assets/Home";

import Services from "./assets/Services";
import Terms from "./assets/Terms";

import Login from "./assets/Login";
import AboutUS from "./assets/AboutUS";
import ContactUS from "./assets/ContactUS";
import AdminLogin from "./assets/AdminLogin";
import Footer from "./Footer";
import Detail from "./Detail";


export default function App() {
  return (
    <Router>



      <Routes>

        <Route path="/" element={<><Navbar /><Outlet/></>} >
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}
