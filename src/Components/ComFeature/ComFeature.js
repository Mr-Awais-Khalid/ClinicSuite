import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ComFeature = () => {
  const carouselRef = useRef(null);
  const animating = useRef(false);

  const animateCarousel = (direction = 1) => {
    // Ensure the ref is not null
    if (!carouselRef.current || animating.current) return;
    animating.current = true;

    const items = carouselRef.current.children;

    gsap.to(carouselRef.current, {
      x: `${-direction * 33.3333}%`, // Move by the width of one item
      duration: 1,
      ease: "power1.inOut",
      onComplete: function () {
        if (direction === 1) {
          carouselRef.current.appendChild(items[0]); // Move the first item to the end
        } else {
          carouselRef.current.prepend(items[items.length - 1]); // Move the last item to the front
        }
        gsap.set(carouselRef.current, { x: 0 });
        animating.current = false;
      },
    });
  };

  useEffect(() => {
    // Check that the carouselRef is attached to a DOM element before using it
    if (!carouselRef.current) return;

    const interval = setInterval(() => animateCarousel(1), 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => animateCarousel(1);
  const handlePrev = () => animateCarousel(-1);

  return (
    <div className="relative">
      <div className=" pt-24 flex justify-center align-middle">
        <span className="bg-sky-100 text-sky-300 text-sm rounded-full px-3 py-1">
          Features
        </span>
      </div>
      <div className="text-center w-[40%] m-auto">
        <h1 className="text-4xl font-semibold p-3">
          Get more done with time-saving features.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Write distraction-free with Focus Mode, save templates for later, and
          keep track of your doc details.
        </p>
      </div>
      {/* Sliders swiper */}
      <div className="relative mx-auto overflow-hidden w-2/3 mb-10">
        <div ref={carouselRef} className="flex">
          <div className="carousel-item w-1/3 flex-shrink-0  p-4">
             {/* Card Start */}
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Upper Card Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Document 2 preview"
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Mode
                </h2>
                <p className="text-gray-600">
                  Cancel out the noise and concentrate your writing on one line,
                  sentence, or paragraph at a time.
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
          <div className="carousel-item w-1/3 flex-shrink-0 p-4">
             {/* Card Start */}
             <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Upper Card Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Document preview"
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Mode
                </h2>
                <p className="text-gray-600">
                  Cancel out the noise and concentrate your writing on one line,
                  sentence, or paragraph at a time.
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
          <div className="carousel-item w-1/3 flex-shrink-0 p-4">
             {/* Card Start */}
             <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Upper Card Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Document preview"
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Mode
                </h2>
                <p className="text-gray-600">
                  Cancel out the noise and concentrate your writing on one line,
                  sentence, or paragraph at a time.
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
          <div className="carousel-item w-1/3 flex-shrink-0 p-4">
             {/* Card Start */}
             <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Upper Card Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Document preview"
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Mode
                </h2>
                <p className="text-gray-600">
                  Cancel out the noise and concentrate your writing on one line,
                  sentence, or paragraph at a time.
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
          <div className="carousel-item w-1/3 flex-shrink-0 p-4">
             {/* Card Start */}
             <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Upper Card Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Document preview"
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Mode
                </h2>
                <p className="text-gray-600">
                  Cancel out the noise and concentrate your writing on one line,
                  sentence, or paragraph at a time.
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
          <div className="carousel-item w-1/3 flex-shrink-0 p-4">
             {/* Card Start */}
             <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Upper Card Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Document preview"
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Focus Mode
                </h2>
                <p className="text-gray-600">
                  Cancel out the noise and concentrate your writing on one line,
                  sentence, or paragraph at a time.
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
        >
          <i class="fa-sharp fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
        >
         <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* shad style in the main top div */}
      <div
        className="absolute left-0 right-0 mx-auto top-[5px] w-full h-[100px] z-[-1] bg-gradient-to-b from-[#f8f8fc] to-transparent border-t-[1px] border-[#ceceea]"
        style={{
          maxWidth: "100vw",
        }}
      />
    </div>
  );
};

export default ComFeature;
