import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
const team = [
  {
    name: "Alexa Kimberly",
    title: "Lead Designer",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    description:
      "I've been the lead designer for pagedone since the beginning.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Harsh Patel",
    title: "Co-Founder & CEO",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    description: "We've pushed our limits to make it successful.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Alexa Kimberly",
    title: "Lead Designer",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    description:
      "I've been the lead designer for pagedone since the beginning.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Harsh Patel",
    title: "Co-Founder & CEO",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    description: "We've pushed our limits to make it successful.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Alexa Kimberly",
    title: "Lead Designer",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    description:
      "I've been the lead designer for pagedone since the beginning.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Harsh Patel",
    title: "Co-Founder & CEO",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    description: "We've pushed our limits to make it successful.",
    social: { instagram: "#", linkedin: "#" },
  },
  // Add more team members if needed
];
// Testinomial Sliders Data
const testimonials = [
  {
    name: "Syed Hassan",
    title: "Information Technology Entrepreneur",
    image: "https://pagedone.io/asset/uploads/1702034769.png", // Replace with actual image path
    review:
      "The development team is very knowledgeable and professional. They applied creative thinking to implement a vision for the project and continuously suggested new ideas in meetings and on projects.",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    review:
      "The development team is very knowledgeable and professional. They applied creative thinking to implement a vision for the project and continuously suggested new ideas in meetings and on projects.",
  },
  {
    name: "Awais Doe",
    title: "Software Engineer",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    review:
      "The development team is very knowledgeable and professional. They applied creative thinking to implement a vision for the project and continuously suggested new ideas in meetings and on projects.",
  },
  {
    name: "Nadeem Doe",
    title: "Software Engineer",
    image: "https://pagedone.io/asset/uploads/1702034769.png",
    review:
      "The development team is very knowledgeable and professional. They applied creative thinking to implement a vision for the project and continuously suggested new ideas in meetings and on projects.",
  },
];
const AboutUs = () => {
  // testinomial Sliders
  const [current, setCurrent] = useState(0);
  const testimonialRef = useRef(null);
  const slideInterval = useRef(null);
  const slideInt = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
  }, [current]);

  const nextTestimonial = () => {
    setCurrent((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  // Auto slide change every 4 seconds
  useEffect(() => {
    slideInt.current = setInterval(() => {
      nextTestimonial();
    }, 6000); // 6000 milliseconds = 6 seconds

    return () => {
      clearInterval(slideInt.current);
    };
  }, []);

  // testinomial Sliders

  //    teamates Sliders code Start

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const totalSlides = Math.ceil(team.length / 2); // Total slides required (two items per slide)

  // Animate the slider using GSAP
  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, [currentSlide]);

  // Handle next slide (move forward by 2 items)
  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide (move backward by 2 items)
  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slideInterval.current);
  }, []);

  // Determine the two items to show in the current slide
  const startIndex = currentSlide * 2;
  const visibleTeam = team.slice(startIndex, startIndex + 2);
  //  //    teamates Sliders code End
  return (
    <div className="">
      <section className=" pb-14  pt-28 lg:pb-24 lg:pt-40 relative  bg-gradient-to-r from-blue-100 to-pink-100">
        <div
          aria-hidden="true"
          class="z-10 flex  absolute max-w-8xl mx-auto -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div class="z-20 bg-gradient-to-r from-violet-300/50 to-purple-200 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-8xl h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <div className="mx-auto z-30 max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-4xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Manage your Clinic's efficiently with our{" "}
            <span className="text-pink-600">Comprehensive Tools.</span>
          </h1>
          <p className="max-w-4xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Take full control of your clinic operations with ease. Our
            comprehensive tool streamlines everything from patient management to
            appointment scheduling, enabling you to run your clinic more
            efficiently and effectively.
          </p>
        </div>
      </section>

      <section className="-mt-44  pb-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="z-50 w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="z-50 w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="z-50 w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="p-7 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <span className="p-2 text-sm bg-blue-50 text-blue-400 rounded-full">Message from CEO</span>
                <h2 className="font-manrope pt-2 font-bold text-4xl lg:text-5xl text-black mb-6 max-lg:text-center relative">
                Take The Words
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless user experiences, we've
                  meticulously curated pagedone to empower creators, designers,
                  and developers alike. Our mission is to provide a
                  comprehensive toolkit, enabling you to build intuitive,
                  beautiful interfaces that resonate with users on every
                  interaction.
                </p>
                <h4></h4>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn't just a collection of components and guidelines;
                  it's a philosophy. We go beyond aesthetics, prioritizing
                  accessibility, scalability, and usability. Every element, from
                  the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Testinomials Section */}
      <section className=" py-14 lg:py-12 bg-gradient-to-r from-blue-100 to-pink-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-xl text-center text-blue-500 leading-7">
            Testimonial
          </h2>
          <h1 className="font-manrope text-5xl font-bold  text-center">
            Fuel that inspires us to excel
          </h1>
          <div className="md:flex md:justify-center gap-7 max-w-6xl mx-auto my-8">
            {/* testnomials Sliders */}
            <div className="max-w-2xl">
              <div className="   p-5 rounded-lg border border-gray-300 shadow-lg bg-white relative overflow-hidden">
                <div className="absolute flex gap-5 right-4 top-4">
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={prevTestimonial}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={nextTestimonial}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>

                <div ref={testimonialRef} className="mt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full border-2 border-gray-300"
                    />
                    <div>
                      <h3 className="text-xl font-bold ">
                        {testimonials[current].name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonials[current].title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-yellow-400 text-xl">
                      {"★★★★★"} {/* Replace with dynamic stars if needed */}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600">
                    {testimonials[current].review}
                  </p>
                </div>
              </div>
            </div>
            {/* Testnomial Second Section Map Rendering */}
            <div className="">
              <a
                href="https://www.google.com/maps/place/United+Plaza/@31.4621252,73.1541098,18.99z/data=!4m6!3m5!1s0x3922696409cc0d55:0x865419572531ace0!8m2!3d31.4620556!4d73.1556176!16s%2Fg%2F11jt5bpx5b?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <div className="bg-blue-600 p-8 rounded-lg shadow-lg text-center">
                  {/* Dashed border container */}
                  <div className="border-2 border-dashed border-white p-4 rounded-lg">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      <i className="fas fa-star text-yellow-400 text-xl mx-1"></i>
                      <i className="fas fa-star text-yellow-400 text-xl mx-1"></i>
                      <i className="fas fa-star text-yellow-400 text-xl mx-1"></i>
                      <i className="fas fa-star text-yellow-400 text-xl mx-1"></i>
                      <i className="fas fa-star text-yellow-400 text-xl mx-1"></i>
                    </div>

                    {/* Review Text */}
                    <h3 className="text-white text-xl font-bold mb-4">
                      Review us on...
                    </h3>

                    {/* Google Logo */}
                    <div className="mt-4">
                      <span className="text-white text-2xl">
                        <span className="text-blue-400 font-bold">G</span>
                        <span className="text-red-400 font-bold">o</span>
                        <span className="text-yellow-400 font-bold">o</span>
                        <span className="text-blue-400 font-bold">g</span>
                        <span className="text-green-400 font-bold">l</span>
                        <span className="text-red-400 font-bold">e</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope text-4xl font-bold text-center  text-gray-900 mb-6">
            Meet the Architects of Innovation – Building Tomorrow’s Software, Today.
            </h2>
            <p className="text-lg text-gray-500 text-center">
              We provide all the advantage that can simplify all your financial
              and banking support without any further issues
            </p>
          </div>
          {/* Slider */}
          <div className="relative max-w-5xl mx-auto">
            {/* Slider */}
            <div className="flex items-center justify-between">
              <button
                className="text-gray-400 hover:text-gray-600 text-2xl"
                onClick={prevSlide}
              >
                &larr;
              </button>
              <div
                ref={sliderRef}
                className="w-full mx-6 p-4 bg-white shadow-lg rounded-lg flex justify-around"
              >
                {visibleTeam.map((member, index) => (
                  <div key={index} className="w-1/2 text-center px-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-500">{member.title}</p>
                    <p className="mt-2 text-gray-600">{member.description}</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a
                        href={member.social.instagram}
                        className="text-gray-500 hover:text-gray-800"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-500 hover:text-gray-800"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 text-2xl"
                onClick={nextSlide}
              >
                &rarr;
              </button>
            </div>

            {/* Pagination */}
            <div className="text-center mt-4">
              {Array(totalSlides)
                .fill()
                .map((_, index) => (
                  <span
                    key={index}
                    className={`inline-block w-2 h-2 mx-1 rounded-full ${
                      index === currentSlide ? "bg-blue-500" : "bg-gray-400"
                    }`}
                  ></span>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-500 rounded-2xl p-8 xl:p-11">
            <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
              Subscribe to the latest offer
            </h2>
            <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                className="py-2 px-5 text-sm bg-pink-600 shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
