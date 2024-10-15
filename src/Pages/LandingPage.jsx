import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Globe } from "lucide-react";
import "swiper/css";
import data from "../Assets/headerData.json"; // Import JSON data
import { WandSparkles } from "lucide-react";
import StatusCustomizer from "../Components/LandingPageComponents/TabPanel";
import Cards from "../Components/LandingPageComponents/Cards";
import { useNavigate, Link } from "react-router-dom";
import TabsSection from "../Components/TabsSection";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  // =====================================Feature
  const cardsData = [
    {
      title: "Mountain View",
      description: "Beautiful mountain view",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Forest Path",
      description: "Peaceful forest path",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "River Stream",
      description: "Calm river stream",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Sunny Beach",
      description: "Bright sunny beach",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Desert Dunes",
      description: "Serene desert dunes",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Snowy Peaks",
      description: "Majestic snowy peaks",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Snowy Peaks",
      description: "Majestic snowy peaks",
      icon: <WandSparkles />,
      image: "https://via.placeholder.com/400x200",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        aria-hidden="true"
        class="flex absolute max-w-8xl mx-auto -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div class="bg-gradient-to-r from-violet-300/50 to-purple-200 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-8xl h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      {/* =======================================================================Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-pink-100 z-0 mx-w-[90rem] mx-auto  transition-all ease-in-out duration-500 min-h-screen xl:min-h-[650px] px-4 md:px-8 py-8 lg:pt-36 overflow-hidden align-middle">
        <div className="max-w-screen-2xl mx-auto relative mt-[113px] lg:mt-0 ">
          {/* Images for large screens */}
          <div className="hidden lg:block">
            {/* Left side images */}
            <div className="absolute left-0">
              <div className="space-y-4">
                {data.images.slice(0, 2).map((image, index) => (
                  <div
                    key={`left-${index}`}
                    className={`relative xl:w-72 xl:h-48 2xl:w-96 2xl:h-56 w-80 h-52 bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:scale-110 hover:z-10 floating ${
                      index === 1 ? "-md:ml-0" : "md:ml-0"
                    }`}
                  >
                    <Link to={image.link}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay with Eye Icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <i className="fas fa-eye text-white text-3xl"></i>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side images */}
            <div className="absolute right-0">
              <div className="space-y-4">
                {data.images.slice(2).map((image, index) => (
                  <div
                    key={`right-${index}`}
                    className={`relative xl:w-72 xl:h-48 2xl:w-96 2xl:h-56 w-80 h-52 bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out ${
                      index === 1 ? "lg:ml-0" : "-lg:ml-0"
                    } cursor-pointer hover:shadow-2xl hover:scale-110 hover:z-10 floating`}
                    // onClick={navigate('home/eyeClinic')}
                  >
                    <Link to={image.link}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay with Eye Icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <i className="fas fa-eye text-white text-3xl"></i>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Swiper for small and medium screens */}
          <div className="lg:hidden mb-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                },
              }}
            >
              {data.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-video cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Main content */}
          <div className="lg:max-w-xl lg:px-3 xlg:max-w-5xl mx-auto text-center  xlg:px-32">
            <p className="mb-4 mx-auto bg-slate-200 p-2 w-full max-w-[350px] rounded-full  text-sm lg:text-base">
              <span className="text-pink-500">{data.headerLine}</span>
            </p>

            <h1 className="md:text-4xl lg:text-6xl lg:px-4 mb-8">
              {data.heading.split("<br>").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br className={index === 0 ? "hidden md:inline" : "hidden"} />
                </React.Fragment>
              ))}
            </h1>

            <p className="text-base lg:text-lg mb-12">{data.description}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={openModal}
                className="w-full sm:w-auto bg-pink-500 text-white rounded-full py-2 px-6 shadow-lg hover:bg-pink-600 transition duration-300"
              >
                {data.button.demo.text}
              </button>

              <button
                onClick={() => alert("Start Now clicked")}
                className="w-full sm:w-auto bg-blue-500 text-white rounded-full py-2 px-6 shadow-lg hover:bg-blue-600 transition ease-in-out duration-300"
              >
                {data.button.start.text}
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center transition-opacity duration-300 ease-in-out">
            <div
              className={`bg-white rounded-lg p-8 z-50 w-11/12 max-w-2xl transform transition-all duration-300 ease-in-out ${
                isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <button
                className="mb-4 text-right text-gray-500"
                onClick={closeModal}
              >
                Close
              </button>
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={data.video.src}
                  title={data.video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="mt-10 mb-32">
        <TabsSection />
      </section>
     

      {/* ========================================================================Cards */}
      <Cards />
      <section className="  -mt-14">
        <svg
          className="mx-auto"
          fill="none"
          height="233"
          viewBox="0 0 1157 233"
          width="1157"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="578.054"
            x2="578.054"
            y1=".5"
            y2="232.106"
          >
            <stop offset=".259836" stop-color="#d9d9d9" stop-opacity="0" />
            <stop offset=".45799" stop-color="#d9d9d9" />
          </linearGradient>
          <linearGradient id="b">
            <stop offset="0" stop-color="#8809fe" />
            <stop offset="1" stop-color="#ceceea" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="c"
            gradientUnits="userSpaceOnUse"
            x1="553.776"
            x2="552.404"
            xlinkHref="#b"
            y1="-35.5426"
            y2="216.308"
          />
          <linearGradient id="d">
            <stop offset="0" stop-color="#89c0fb" />
            <stop offset="1" stop-color="#ceceea" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="e"
            gradientUnits="userSpaceOnUse"
            x1="223.491"
            x2="223.491"
            xlinkHref="#d"
            y1="-27.3994"
            y2="284.972"
          />
          <linearGradient id="f">
            <stop offset="0" stop-color="#f8a4ff" />
            <stop offset="1" stop-color="#ceceea" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="g"
            gradientUnits="userSpaceOnUse"
            x1="-41.5086"
            x2="-41.5086"
            xlinkHref="#f"
            y1="-18.8994"
            y2="293.472"
          />
          <linearGradient
            id="h"
            gradientUnits="userSpaceOnUse"
            x1="601.345"
            x2="602.717"
            xlinkHref="#b"
            y1="-35.5426"
            y2="216.308"
          />
          <linearGradient
            id="i"
            gradientUnits="userSpaceOnUse"
            x1="931.63"
            x2="931.63"
            xlinkHref="#d"
            y1="-27.3994"
            y2="284.972"
          />
          <linearGradient
            id="j"
            gradientUnits="userSpaceOnUse"
            x1="1196.63"
            x2="1196.63"
            xlinkHref="#f"
            y1="-18.8994"
            y2="293.472"
          />
          <mask
            id="k"
            height="233"
            maskUnits="userSpaceOnUse"
            width="1157"
            x="0"
            y="0"
          >
            <path d="m0 .5h1156.11v231.606h-1156.11z" fill="url(#a)" />
          </mask>
          <g mask="url(#k)" opacity=".4" stroke-width="2">
            <path
              d="m507 12.6006s26.284 44.3695 35.5 80c11.541 44.6184 10.5 125.0004 10.5 125.0004"
              stroke="url(#c)"
            />
            <path
              d="m535 231.601-16.112-27.873c-46.347-80.174-114.049-145.9018-195.559-189.8561l-21.829-11.77131"
              stroke="url(#e)"
            />
            <path
              d="m489.5 221.601-20.707-17.677c-66.771-57-148.588-93.496-235.609-105.0989-60.506-8.0674-118.773-28.2101-171.3436-59.2321l-61.8404-36.49241"
              stroke="url(#g)"
            />
            <path
              d="m648.121 12.6006s-26.284 44.3695-35.5 80c-11.541 44.6184-10.5 125.0004-10.5 125.0004"
              stroke="url(#h)"
            />
            <path
              d="m620.121 231.601 16.112-27.873c46.347-80.174 114.049-145.9018 195.559-189.8561l21.829-11.77131"
              stroke="url(#i)"
            />
            <path
              d="m665.621 221.601 20.707-17.677c66.771-57 148.588-93.496 235.609-105.0989 60.506-8.0674 118.773-28.2101 171.343-59.2321l61.84-36.49241"
              stroke="url(#j)"
            />
          </g>
        </svg>
      </section>
      {/* ========================================================================Progress Tabs */}
      <StatusCustomizer />
      {/* ========================================================================For Everyone */}
      <section className="relative px-16 pt-16 pb-32 overflow-hidden">
        <div className="max-w-[80rem] mx-auto  mb-12">
          <h2 className="mb-6 mx-16  font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
            A simple &amp; smart way to Manage Your Clinic
          </h2>
          <p className="mb-16 max-w-lg mx-auto text-center text-gray-600 text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/3 p-8">
              <a className="group" href="#">
                <div className="mb-9 overflow-hidden rounded-2xl">
                  <img
                    className="transform hover:scale-110 w-full transition ease-out duration-500"
                    src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/images/features/experts.png"
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                  24/7 Customer Support
                </h3>
                <p className="mb-5 text-gray-600 text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim.
                </p>
              </a>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <a className="group" href="#">
                <div className="mb-9 overflow-hidden rounded-2xl">
                  <img
                    className="transform hover:scale-110 w-full transition ease-out duration-500"
                    src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/images/features/insights.png"
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                  Universal Compatibility
                </h3>
                <p className="mb-5 text-gray-600 text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim.
                </p>
              </a>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <a className="group" href="#">
                <div className="mb-9 overflow-hidden rounded-2xl">
                  <img
                    className="transform hover:scale-110 w-full transition ease-out duration-500"
                    src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/images/features/results.png"
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                  Rich Features
                </h3>
                <p className="mb-5 text-gray-600 text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================================NewsLeter */}

      {/* =========================================================================Join Today */}
      <section className="relative bg-gradient-to-r from-blue-600 to-pink-600 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto py-16 md:py-20 lg:py-28 relative">
        {/* Left Background SVG */}
        <div className="absolute bottom-0 h-full left-0 transform -translate-x-1/2 opacity-20">
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 498.311V304.054C0.5 136.406 136.406 0.5 304.054 0.5H498.311C498.967 0.5 499.5 1.03289 499.5 1.68919V136.561C499.5 137.217 498.967 137.75 498.311 137.75H342.061C290.59 137.75 239.516 163.123 201.319 201.319C163.123 239.516 137.75 290.59 137.75 342.061V498.311C137.75 498.967 137.217 499.5 136.561 499.5H1.68919C1.03249 499.5 0.5 498.967 0.5 498.311Z"
              fill="url(#paint0_linear_191_13427)"
              stroke="#ffffff"
            />
            <defs>
              <linearGradient
                id="paint0_linear_191_13427"
                x1="0"
                y1="500"
                x2="500"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Background SVG */}
        <div className="absolute top-0 h-full right-0 transform translate-x-1/2 opacity-20">
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M499.5 1.68919V195.946C499.5 363.594 363.594 499.5 195.946 499.5H1.68919C1.03289 499.5 0.5 498.967 0.5 498.311V363.439C0.5 362.783 1.03289 362.25 1.68919 362.25H157.939C209.41 362.25 260.484 336.877 298.681 298.681C336.877 260.484 362.25 209.41 362.25 157.939V1.68919C362.25 1.03289 362.783 0.5 363.439 0.5H498.311C498.967 0.5 499.5 1.03289 499.5 1.68919Z"
              fill="url(#paint0_linear_191_13426)"
              stroke="#ffffff"
            />
            <defs>
              <linearGradient
                id="paint0_linear_191_13426"
                x1="499.998"
                y1="2.85805e-05"
                x2="8.49831"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Join 14K People and Embrace Fun Learning
            </h3>
            <p className="text-lg sm:text-xl text-white/80 mb-8">
              Fuel your curiosity by joining a vibrant community of learners.
            </p>
            <form action="" className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                className="flex-grow py-4 px-6 rounded-lg border-none shadow-lg text-gray-800"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="bg-primary hover:animate-wave hover:bg-gradient-to-r from-pink-600 via-pink-500 to-blue-600 bg-clip-text text-transparent  duration-500 transition py-4 px-8 rounded-lg shadow-lg text-white flex items-center justify-center">
                Subscribe
                <svg
                  className="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99996 10H15.4166M15.4166 10L10.4166 5M15.4166 10L10.4166 15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            <p className="mt-6 text-white/60">Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingPage;
