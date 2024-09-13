import React from "react";

const Pricing = () => {
  // testinomial Sliders
 
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
            Manage your Clinic's efficiently with {" "}
            <span className="text-pink-600">Affordable Pricing</span>
          </h1>
          <p className="max-w-4xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Take full control of your clinic operations with ease. Our
            comprehensive tool streamlines everything from patient management to
            appointment scheduling, enabling you to run your clinic more
            efficiently and effectively.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
