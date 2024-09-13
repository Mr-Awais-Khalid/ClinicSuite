import React, { useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./Pages/LandingPage";
import DashboardOne from "./Components/Dashboards/DashboardOne";
import ParentComponent from "./Components/Dashboards/ParentComponent";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import DemoForm from "./Components/Demo/DemoForm";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./ErrorPage";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/ContactUs";

function App() {
  
// =====================================
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header/>
      <Routes>

        <Route path="/" element={<ParentComponent />} />
        <Route path="/eyeClinic" element= {<DashboardOne/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* //Demo Modal Pop up */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out"></div>
          <div
            className={`relative bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out ${
              showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <DemoForm />
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default App;
