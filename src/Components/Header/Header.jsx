import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../../Assets/Pics/small2.png";
import logo3 from "../../Assets/Pics/small1.png";
import logo2 from "../../Assets/Pics/full1.png";
import { gsap } from "gsap";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const homeLinkRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const servicesLinkRef = useRef(null);
  const blogLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  const homeLineRef = useRef(null);
  const aboutLineRef = useRef(null);
  const servicesLineRef = useRef(null);
  const blogLineRef = useRef(null);
  const contactLineRef = useRef(null);

  const handleMouseOver = (lineRef) => {
    gsap.to(lineRef.current, { duration: 0.3, width: "100%" });
  };

  const handleMouseLeave = (lineRef) => {
    gsap.to(lineRef.current, { duration: 0.3, width: "0%" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardData = [
    {
      imageUrl:
        "https://s.tmimgcdn.com/scr/800x500/413700/apex-bootstrap-5-admin-dashboard_413709-original.png",
      title: "Dental Clinic",
      description: "A little text here",
      link: "#",
    },
    {
      imageUrl:
        "https://s.tmimgcdn.com/scr/800x500/413700/apex-bootstrap-5-admin-dashboard_413709-original.png",
      title: "General Clinic",
      description: "Another text here",
      link: "#",
    },
    {
      imageUrl:
        "https://s.tmimgcdn.com/scr/800x500/413700/apex-bootstrap-5-admin-dashboard_413709-original.png",
      title: "Eye Clinic",
      description: "Another text here",
      link: "/eyeClinic",
    },
    {
      imageUrl:
        "https://s.tmimgcdn.com/scr/800x500/413700/apex-bootstrap-5-admin-dashboard_413709-original.png",
      title: "Lab Management",
      description: "Another text here",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Banner */}
      {!isScrolled && (
        <div className="absolute left-0 w-full top-0 bg-transparent z-[99] logo">
          <div
            className={`max-w-[79rem] mb-12 border-b ${
              currentPath === "/services"
                ? "border-slate-200"
                : "border-slate-400"
            } py-3 px-4 mx-auto text-center`}
          >
            <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
              <div
                className={`text-center space-x-4 md:text-start md:order-2 md:flex md:justify-end md:items-center ${
                  currentPath === "/services"
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >
                <i className="fa-brands fa-facebook "></i>
                <i className="fa-brands fa-linkedin "></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-square-x-twitter"></i>
              </div>
              {/* End Col */}
              <div className="flex items-center">
                <a
                  className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm ${
                    currentPath === "/services"
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                  href="#"
                >
                  <i className="fa-sharp-duotone fa-solid fa-phone"></i>
                  +92 321 7678097
                </a>
                <span className="inline-block border-e border-white/30 w-px h-5 mx-2" />
                <a
                  className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm ${
                    currentPath === "/services"
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHDhqkkKQQGgrKfjSvSQqlTxBVkszHJvBnqgqrXQVGrfGsWCNQScXXkkvStMTDlxtRTdB"
                  target="_blank"
                >
                  <i className="fa-duotone fa-solid fa-paper-plane"></i>
                  contact@bzsoftech.com
                </a>
              </div>
              {/* End Col */}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed w-full z-[99] transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white/70 backdrop-blur-md border-b mt-0 border-slate-200"
            : "top-14 mt-2"
        } flex flex-wrap md:justify-start md:flex-nowrap`}
      >
        <nav className="relative max-w-[80rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex-none font-semibold text-2xl text-black focus:outline-none focus:opacity-80"
            >
              {currentPath === "/about" ||
              currentPath === "/services" ||
              currentPath === "/" ? (
                <img
                  src={isScrolled ? logo3 : logo3}
                  alt="logo"
                  className={isScrolled ? "w-44" : "w-44"}
                />
              ) : (
                <img
                  src={isScrolled ? logo3 : logo3}
                  alt="logo"
                  className={isScrolled ? "w-44" : "w-44"}
                />
              )}
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-header-classic-collapse"
                aria-expanded="false"
                aria-controls="hs-header-classic"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-classic"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            id="hs-header-classic"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-header-classic-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <div className="py-2 md:py-0 logo tracking-wider flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                <div
                  className="relative inline-block"
                  onMouseOver={() => handleMouseOver(homeLineRef)}
                  onMouseLeave={() => handleMouseLeave(homeLineRef)}
                >
                  <Link
                    ref={homeLinkRef}
                    className={`p-2 flex items-center text-sm ${
                      currentPath === "/"
                        ? isScrolled
                          ? "text-gray-700"
                          : "text-gray-700"
                        : "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                  <span
                    ref={homeLineRef}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all ease-out duration-300"
                    style={{ width: "0%" }}
                  ></span>
                </div>

                <div
                  className="relative inline-block hoverable"
                  onMouseOver={() => handleMouseOver(aboutLineRef)}
                  onMouseLeave={() => {
                    handleMouseLeave(aboutLineRef);
                    setIsDropdownOpen(false);
                  }}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  <Link
                    ref={aboutLinkRef}
                    className={`p-2 flex items-center text-sm ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        : "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                    }`}
                    to="/"
                  >
                    Products
                  </Link>
                  {isDropdownOpen && (
                    <div className="absolute left-0 w-screen  p-6 mega-menu mb-16 sm:mb-0 transition-all duration-300 ease-in-out bg-blue-100/90 bg-opacity-100 backdrop-blur-lg shadow-md">
                      <div className="container w-full flex flex-wrap mx-auto justify-between">
                        <div className="w-full text-black mb-8 text-center">
                          <h2 className="font-bold text-2xl">
                            Listen, why don't you wait out by the speeder.
                          </h2>
                          <p>
                            our droids. They'll have to wait outside. We don't
                            want them here.
                          </p>
                        </div>
                        {/* Dropdown content */}
                        <div className="flex w-full">
                          <div className="container mx-auto  p-4">
                            {/* Grid container for cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:text-black hover:shaow-lg ">
                              {/* Mapping through the card data array */}
                              {cardData.map((card, index) => (
                                <div
                                  key={index}
                                  className="hover:bg-blue-100 h-full rounded-xl flex items-stretch shadow-sm transition-shadow duration-300 hover:shadow-xl"
                                >
                                  {/* Image Section */}
                                  <div className="relative w-1/2 overflow-hidden rounded-md flex items-center justify-center">
                                    <img
                                      src={card.imageUrl}
                                      alt={card.title}
                                      className="w-full h-full object-cover"
                                    />
                                    {/* Overlay with Eye Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                      <i className="fas fa-eye text-white text-3xl"></i>
                                    </div>
                                  </div>
                                  {/* Content Section */}
                                  <div className="w-1/2 flex flex-col justify-between p-4 rounded-md">
                                    <h3 className="font-heading mb-3 text-xl font-semibold text-gray-800">
                                      {card.title}
                                    </h3>
                                    <p>{card.description}</p>
                                    <a
                                      className="inline-flex items-center rounded-full px-2 py-2 text-center font-medium text-blue-700 transition duration-300 hover:text-black"
                                      href={card.link}
                                    >
                                      <span className="mr-2 font-medium">
                                        Read More
                                      </span>
                                      <svg
                                        className="mt-1"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.33333 3.3335L14 8.00016M14 8.00016L9.33333 12.6668M14 8.00016L2 8.00016"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <span
                    ref={aboutLineRef}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all ease-out duration-300"
                    style={{ width: "0%" }}
                  ></span>
                </div>

                <div
                  className="relative inline-block"
                  onMouseOver={() => handleMouseOver(servicesLineRef)}
                  onMouseLeave={() => handleMouseLeave(servicesLineRef)}
                >
                  <Link
                    ref={servicesLinkRef}
                    className={`p-2 flex items-center text-sm ${
                      currentPath === "/services"
                        ? "text-gray-200"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        : "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                    }`}
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                  <span
                    ref={servicesLineRef}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all ease-out duration-300"
                    style={{ width: "0%" }}
                  ></span>
                </div>

                <div
                  className="relative inline-block"
                  onMouseOver={() => handleMouseOver(blogLineRef)}
                  onMouseLeave={() => handleMouseLeave(blogLineRef)}
                >
                  <Link
                    ref={blogLinkRef}
                    className={`p-2 flex items-center text-sm ${
                      currentPath === "/services"
                        ? "text-gray-200"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        : "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                    }`}
                    to="/about"
                  >
                    About Us
                  </Link>
                  <span
                    ref={blogLineRef}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all ease-out duration-300"
                    style={{ width: "0%" }}
                  ></span>
                </div>

                <div
                  className="relative inline-block"
                  onMouseOver={() => handleMouseOver(contactLineRef)}
                  onMouseLeave={() => handleMouseLeave(contactLineRef)}
                >
                  <Link
                    ref={contactLinkRef}
                    className={`p-2 flex items-center text-sm ${
                      currentPath === "/services"
                        ? "text-gray-200"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        : "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                    }`}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                  <span
                    ref={contactLineRef}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all ease-out duration-300"
                    style={{ width: "0%" }}
                  ></span>
                </div>

                <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-black/30 before:-translate-y-1/2">
                  <a
                    className={`p-2 flex gap-1 items-center text-sm ${
                      currentPath === "/services"
                        ? "text-gray-200"
                        : isScrolled
                        ? "bg-gradient-to-r from-pink-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-wave hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        : "bg-gradient-to-r from-pink-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-wave "
                    }`}
                    href="#"
                    style={{
                      backgroundSize: "400% 100%", // Enlarges the background to create smooth transitions
                    }}
                  >
                    <i class="fa-regular fa-hand-wave"></i>
                    Demon Request
                  </a>
                </div>

                <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-black/30 before:-translate-y-1/2">
                  <a
                    className={`p-2 flex items-center text-sm ${
                      currentPath === "/services"
                        ? "text-gray-200"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        : "text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                    }`}
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
