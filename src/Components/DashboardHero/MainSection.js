import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MainSection.css'; // Ensure this path is correct
import introVideo from '../../Assets/video/Maxivision Eye Clinic Promo Video.mp4'
function MainSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(null);
    const slides = [
        {
            title: "Advanced CRM Solutions for Eye Clinics",
            description: "Enhance your eye clinic's patient management with our tailored CRM tools. Streamline appointment scheduling, manage patient records, track treatment plans, and ensure seamless communication with patients",
            logos: [
                "fa-sharp-duotone fa-solid fa-suitcase-medical",
                "fa-solid fa-arrows-to-eye",
                "fa-solid fa-ranking-star",
                "fa-light fa-file-chart-pie",
            ],
            buttons: [
                { text: "Book Demo", link: "/register", primary: true },
                { text: "See Pricing", link: "/pricing" }
            ]
        },
        {
            title: "Financial Management CRM Tools for Eye Clinics",
            description: "Take control of your eye clinic's financial health with our advanced CRM tools designed for comprehensive financial management. Our solutions provide detailed insights into billing, expense tracking, and revenue analysis, enabling you to manage financial operations with precision.",
            logos: [
                "fa-light fa-hospital-user",
                "fa-file-invoice-dollar",
                "fa-regular fa-thumbs-up",
                "fa-receipt",
            ],
            buttons: [
                { text: "Book Demo", link: "/register", primary: true },
                { text: "See Pricing", link: "/pricing" }
            ]
        },
    ];

    const slideRef = useRef(null);

    useEffect(() => {
        if (slideRef.current) {
            gsap.fromTo(
                slideRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
            );
        }

        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Automatically slide every 36 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handlePrevious = () => {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        animateSlideChange(prevSlide);
    };

    const handleNext = () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        animateSlideChange(nextSlide);
    };

    const animateSlideChange = (newSlide) => {
        if (slideRef.current) {
            gsap.to(slideRef.current, {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power2.in',
                onComplete: () => {
                    setCurrentSlide(newSlide);
                    setNextSlide(newSlide);
                    gsap.fromTo(
                        slideRef.current,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
                    );
                }
            });
        }
    };
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
          video.muted = !video.muted;
          setIsMuted(video.muted);
        }
      };

    return (
        <div className="relative overflow-hidden min-h-screen">
        {/* Video Background */}
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={introVideo}
          autoPlay
          loop
          muted={isMuted}
        />
         
         {/* Mute/Unmute Button */}
        <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleMute}
          className="p-2 bg-gray-800 text-white rounded-full focus:outline-none">
          {isMuted ? (
            <i className="fa-solid fa-volume-mute text-xl"></i>
          ) : (
            <i className="fa-solid fa-volume-up text-xl"></i>
          )}
        </button>
      </div>
        {/* Light Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        
        {/* Content Section */}
        <div className="z-10 flex flex-col items-center justify-center h-screen my-auto mx-auto relative">
          <div className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2">
            <button
              className="w-12 h-12 p-2 border-2 border-gray-300 text-white rounded-full focus:outline-none"
              onClick={handlePrevious}>
              <i className="fa-light fa-arrow-left text-gray-100"></i>
            </button>
          </div>
      
          <div className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2">
            <button
              className="w-12 h-12 p-2 border-2 border-gray-300 text-white rounded-full focus:outline-none"
              onClick={handleNext}>
              <i className="fa-light fa-arrow-right text-gray-100"></i>
            </button>
          </div>
      
          {/* Slide Content */}
          <div ref={slideRef} className="relative text-center mt-12">
            <div className="max-w-3xl lg:max-w-6xl mx-auto">
              <p className="inline-block text-sm sm:text-base lg:text-xl font-medium bg-clip-text bg-gradient-to-l from-neutral-100 to-sky-500 text-transparent">
                Welcome to EyeClinic CRM
              </p>
      
              <div className="mt-3 md:mt-5 max-w-8xl">
                <h1 className="block font-semibold text-neutral-50 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {slides[currentSlide].title}
                </h1>
              </div>
      
              <div className="mt-3 md:mt-5 max-w-2xl lg:max-w-6xl">
                <p className="text-sm sm:text-lg text-gray-200">{slides[currentSlide].description}</p>
              </div>
      
              {/* Logos */}
              <div className="flex flex-wrap justify-around mb-16 mt-12">
                {slides[currentSlide].logos.map((iconClass, index) => (
                  <i
                    key={index}
                    className={`fa-light ${iconClass} text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-l from-neutral-100 to-sky-500 text-transparent`}
                    aria-hidden="true"
                  ></i>
                ))}
              </div>
      
              <div className="gap-2 sm:gap-3 flex flex-col sm:flex-row justify-center">
                {slides[currentSlide].buttons.map((button, index) => (
                  <a
                    key={index}
                    className={`py-2 px-4 sm:py-3 sm:px-8 text-sm md:text-base fontAlt inline-flex items-center gap-x-2 font-medium rounded-full border border-transparent ${button.primary ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200' : 'text-gray-300 hover:text-gray-900'}`}
                    href={button.link}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default MainSection;
