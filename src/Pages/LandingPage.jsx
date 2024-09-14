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
      <section className="bg-gradient-to-r from-blue-100 to-pink-100 z-0 mx-w-[90rem] mx-auto  transition-all ease-in-out duration-500 min-h-screen xl:min-h-[650px] px-4 md:px-8 py-8 lg:pt-36 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative ">
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
                    <Link to={"/eyeClinic"}>
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
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with Eye Icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <i className="fas fa-eye text-white text-3xl"></i>
                    </div>
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
      {/* =============================== Features ========================================*/}
      {/* <section className=" overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <img
                className="mx-auto transform hover:translate-y-3 transition ease-in-out duration-1000"
                src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/features/upgrade.png"
                alt=""
              />
            </div>
            <div className="w-full mt-10 md:w-1/2 p-8">
              <div className="md:max-w-xl">
                <p className="mb-7 text-sm text-gray-600 font-semibold uppercase tracking-px">
                  👋 Meet new Clinic Suite
                </p>
                <h2 className="mb-16 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  Clinic Suite have all what You think about
                </h2>
                <div className="flex flex-wrap mb-5 -m-8">
                  <div className="w-full md:w-1/2 ">
                    <div className="md:max-w-xs ">
                      <div className="flex flex-wrap  -m-2">
                        <div className="w-auto p-2">
                          <svg
                            className="mt-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19ZM9 9H15V15H9V9Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 p-2 ">
                          <h3 className="mb-2 text-xl font-semibold leading-normal">
                            Analytical
                          </h3>
                          <p className="text-gray-600 font-medium leading-relaxed">
                            Lorem ipsum dolor sit amet, to the consectr adipis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <div className="md:max-w-xs">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <svg
                            className="mt-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="mb-2 text-xl font-semibold leading-normal">
                            Dashboards
                          </h3>
                          <p className="text-gray-600 font-medium leading-relaxed">
                            Lorem ipsum dolor sit amet, to the consectr adipis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-5 mb-5 -m-8">
                  <div className="w-full md:w-1/2 ">
                    <div className="md:max-w-xs ">
                      <div className="flex flex-wrap  -m-2">
                        <div className="w-auto p-2">
                          <svg
                            className="mt-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19ZM9 9H15V15H9V9Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 p-2 ">
                          <h3 className="mb-2 text-xl font-semibold leading-normal">
                            Analytical
                          </h3>
                          <p className="text-gray-600 font-medium leading-relaxed">
                            Lorem ipsum dolor sit amet, to the consectr adipis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <div className="md:max-w-xs">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <svg
                            className="mt-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="mb-2 text-xl font-semibold leading-normal">
                            Dashboards
                          </h3>
                          <p className="text-gray-600 font-medium leading-relaxed">
                            Lorem ipsum dolor sit amet, to the consectr adipis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:inline-block">
                  <button
                    className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                    type="button"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ========================================================================Cards */}
      <Cards />
      {/* ========================================================================Progress Tabs */}
      <StatusCustomizer />
      {/* ========================================================================For Everyone */}
      <section className="relative px-16 pt-16 pb-32 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 mb-12">
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
      <div className="flex justify-between -mt-20 mb-10 items-stretch max-w-[80rem] mx-auto h-96 bg-gray-100 rounded-xl shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-pink-500 text-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Stay ahead of what's next
            </h2>
            <p className="text-sm mb-4">
              Organize your work, reminders, and calendar events all from your
              personalized Home.
            </p>
          </div>
          {/* Placeholder for dashboard image */}
          <img
            src="https://clickup.com/assets/home-test/stay-ahead.png"
            alt="Task Dashboard"
            className="rounded-lg ml-10 translate-x-11 mt-0 shadow-md"
          />
        </div>
        {/* Right Side */}
        <div className="w-1/2 bg-blue-900 text-white p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-6xl font-bold mb-5">
              Trusted by over 2,000,000 teams
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "305M+", label: "Tasks completed" },
                { value: "55Ma+", label: "Docs created" },
                { value: "615M+", label: "Messages sent" },
                { value: "11M+", label: "Automations created" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl font-bold">{item.value}</span>
                  <span className="text-lg">{item.label}</span>
                </div>
              ))}
            </div>
            <button className="px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">
              Join today for free →
            </button>
          </div>
          {/* Globe graphic */}
          <Globe
            className="absolute right-[-10%] bottom-[-10%] text-indigo-700 opacity-20"
            size={200}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
