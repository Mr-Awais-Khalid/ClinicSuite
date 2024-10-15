import React, { useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import DashboardOne from "./Components/Dashboards/DashboardOne";
import ParentComponent from "./Components/Dashboards/ParentComponent";
import Header from "./Components/Header/Header";
import DemoForm from "./Components/Demo/DemoForm";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, useLocation, useLoaderData } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./ErrorPage";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/ContactUs";
import UserLogin from "./Components/Auth/UserLogin"
import UserSignUp from "./Components/Auth/UserSignUp";
import DentalDashboard from "./Components/Dashboards/DentalDashboard";
import WhatsAppButton from "./Components/Whatsapp/WhatsAppButton";
import Subscription from "./Pages/Subscription";
import AddSubscription from "./Components/Client/Subscription/AddSubscription";

function App() {
  
// =====================================
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
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

      {location.pathname !== "/login" && location.pathname !== "/register" && (<Header/>)}

      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/eyeClinic" element= {<DashboardOne/>} />
        <Route path="/dentalClinic" element= {<DentalDashboard/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/DemoRequest" element={<DemoForm />} /> 
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="*" element={<ErrorPage />} />
        {/* Client Routing */}
        <Route path="/addSubscription" element={<AddSubscription/>}/>
        {/* USER Login Routes */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserSignUp />} />   
      </Routes>


{/* // Demo Modal Pop up */}

{showModal && location.pathname === "/" &&(
        <div className="fixed inset-0 z-[9999] lg:flex items-center justify-center hidden">
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out" onClick={closeModal}></div>
          <div
            className={`relative bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out ${
              showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-4 right-1 text-gray-500 hover:text-gray-700 z-[99999]"
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
            <DemoForm/>
          </div>
        </div>
      )}





   {location.pathname !== "/login" && location.pathname !== "/register" && (<Footer/>)}
   
   <section className="absolute right-4 bottom-4"><WhatsAppButton/></section>
    </>
  );
}

export default App;
