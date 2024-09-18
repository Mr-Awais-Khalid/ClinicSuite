import React, { useState, useRef, useEffect } from "react";
import MainSection from "../DashboardHero/MainSection";
import createVideo from "../../Assets/video/docs30-1-future-of-docs.mp4";
import ComFeature from "../ComFeature/ComFeature";
import { motion, useInView } from "framer-motion";
import { FaRegFileAlt, FaCodeBranch, FaCogs } from "react-icons/fa";

export default function DentalDashboard() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView1) {
            setIsInView1(true); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView2) {
            setIsInView2(true); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );

    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView3) {
            setIsInView3(true); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
    };
  }, [isInView1, isInView2, isInView3]); // Dependencies on state changes
  return (
    <div className="d">
      <MainSection></MainSection>

      <div className="relative mt-10 2xl:px-48 xl:px-40 lg:px-16 px-8">
        <div className="grid grid-cols-9 gap-x-4">
          {/* Continuous gradient timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-blue-600"></div>

          {/* Timeline item 1 */}
          <motion.div
            className="col-span-4 pb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          ></motion.div>

           <div className="relative col-span-1 flex items-center justify-center">
            {/* Timeline Icon */}
            <motion.div
              className="absolute w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView2 ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FaCodeBranch className="text-2xl" />
            </motion.div>
          </div>
          <motion.div
            ref={ref1} // Attach ref to this item
            className="col-span-4 pb-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-lg border-4 bg-white shadow-lg p-4 text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mt-2 mb-1">
                Collaborate with Teams
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Work together on shared Docs and projects. Discuss, edit, and
                manage with ease using collaboration tools.
              </p>
              <div className="rounded-lg border-4 shadow-md inline-block">
                <video
                  className="rounded-lg object-cover w-full h-full min-h-48 min-w-80"
                  src={createVideo}
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </motion.div>

          {/* Timeline item 2 */}
          <motion.div
            ref={ref2} // Attach ref to this item
            className="col-span-4 pb-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-lg border-4 bg-white shadow-lg p-4 text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mt-2 mb-1">
                Collaborate with Teams
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Work together on shared Docs and projects. Discuss, edit, and
                manage with ease using collaboration tools.
              </p>
              <div className="rounded-lg border-4 shadow-md inline-block">
                <video
                  className="rounded-lg object-cover w-full h-full min-h-48 min-w-80"
                  src={createVideo}
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </motion.div>

          <div className="relative col-span-1 flex items-center justify-center">
            {/* Timeline Icon */}
            <motion.div
              className="absolute w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView2 ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FaCodeBranch className="text-2xl" />
            </motion.div>
          </div>

          <motion.div
            className="col-span-4 pb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          ></motion.div>

          {/* Timeline item 3 */}
          <motion.div
            ref={ref3}
            className="col-span-4 pb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          ></motion.div>
          
           <div className="relative col-span-1 flex items-center justify-center">
            {/* Timeline Icon */}
            <motion.div
              className="absolute w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView2 ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FaCodeBranch className="text-2xl" />
            </motion.div>
          </div>
          <motion.div
             // Attach ref to this item
            className="col-span-4 pb-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-lg border-4 bg-white shadow-lg p-4 text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mt-2 mb-1">
                Collaborate with Teams
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Work together on shared Docs and projects. Discuss, edit, and
                manage with ease using collaboration tools.
              </p>
              <div className="rounded-lg border-4 shadow-md inline-block">
                <video
                  className="rounded-lg object-cover w-full h-full min-h-48 min-w-80"
                  src={createVideo}
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="relative 2xl:px-48 xl:px-40 lg:px-16 px-8" >
    <div className="md:flex items-center justify-between  pb-10 pt-5 gap-8">
      
      <div className="w-1/2">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-300 text-sm  rounded-full px-3 py-1">Create</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Build Docs to suit any type of work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
        </p>
        <a 
          href="#"
          className="inline-block text-orange-600 bg-orange-100 hover:bg-orange-200 font-semibold rounded-full py-2 px-5 transition-colors"
        >
          Get started
        </a>
      </div>

      
      <div className="w-1/2 relative xl:p-14 p-8">
        <div className="rounded-lg border-4 bg-purple-500 shadow-lg p-2  inline-block">
        <video 
          className="-ml-6 my-3 rounded-lg object-cover w-full h-full min-h-48 min-w-80  "
          src={createVedio}
          autoPlay
          loop
          muted
        />
        </div>
      </div>
    </div>


    <div className="md:flex items-center justify-between bg-white pb-10  gap-8">
      
      <div className="w-1/2 relative xl:p-14 p-8">
      <div className="rounded-lg border-4 bg-purple-500 shadow-lg p-2 inline-block">
        <video 
          className=" ml-6 m-3 rounded-lg object-cover w-full h-full min-h-48 min-w-80 "
          src={createVedio}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
        
        <div className="w-1/2">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-300 text-sm  rounded-full px-3 py-1">Create</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Build Docs to suit any type of work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
        </p>
        <a 
          href="#"
          className="inline-block text-orange-600 bg-orange-100 hover:bg-orange-200 font-semibold rounded-full py-2 px-5 transition-colors"
        >
          Get started
        </a>
      </div>
      
    </div>

    <div className="md:flex items-center justify-between bg-white pb-10  gap-8">
      
      <div className="w-1/2">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-300 text-sm  rounded-full px-3 py-1">Create</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Build Docs to suit any type of work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
        </p>
        <a 
          href="#"
          className="inline-block text-orange-600 bg-orange-100 hover:bg-orange-200 font-semibold rounded-full py-2 px-5 transition-colors"
        >
          Get started
        </a>
      </div>

      
      <div className="w-1/2 relative xl:p-14 p-8">
        <div className="rounded-lg border-4 bg-purple-500 shadow-lg p-2 inline-block">
        <video 
          className="-ml-6 my-3 rounded-lg object-cover w-full h-full min-h-48 min-w-80 "
          src={createVedio}
          autoPlay
          loop
          muted
        />
        </div>
      </div>
    </div>


    <div className="md:flex items-center justify-between bg-white pb-10 gap-8">
      
      <div className="w-1/2 relative xl:p-14 p-8">
      <div className="rounded-lg border-4 bg-purple-500 shadow-lg p-2 inline-block">
        <video 
          className=" ml-6 m-3 rounded-lg object-cover w-full h-full min-h-48 min-w-80 "
          src={createVedio}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
        
        <div className="w-1/2">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-300 text-sm  rounded-full px-3 py-1">Create</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Build Docs to suit any type of work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
        </p>
        <a 
          href="#"
          className="inline-block text-orange-600 bg-orange-100 hover:bg-orange-200 font-semibold rounded-full py-2 px-5 transition-colors"
        >
          Get started
        </a>
      </div>
      
    </div>

    <div className="md:flex items-center justify-between bg-white pb-10 gap-8">
      
      <div className="w-1/2">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-300 text-sm  rounded-full px-3 py-1">Create</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Build Docs to suit any type of work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
        </p>
        <a 
          href="#"
          className="inline-block text-orange-600 bg-orange-100 hover:bg-orange-200 font-semibold rounded-full py-2 px-5 transition-colors"
        >
          Get started
        </a>
      </div>

      <div className="w-1/2 relative xl:p-14 p-8">
        <div className="rounded-lg border-4 bg-purple-500 shadow-lg p-2 inline-block">
        <video 
          className="-ml-6 my-3 rounded-lg object-cover w-full h-full min-h-48 min-w-80 "
          src={createVedio}
          autoPlay
          loop
          muted
        />
        </div>
      </div>
    </div>


    <div className="md:flex items-center justify-between bg-white pb-10 gap-8">
      
      <div className="w-1/2 relative xl:p-14 p-8">
      <div className="rounded-lg border-4 bg-purple-500 shadow-lg p-2 inline-block">
        <video 
          className=" ml-6 m-3 rounded-lg object-cover w-full h-full min-h-48 min-w-80"
          src={createVedio}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
        
        <div className="w-1/2">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-300 text-sm  rounded-full px-3 py-1">Create</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Build Docs to suit any type of work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
        </p>
        <a 
          href="#"
          className="inline-block text-orange-600 bg-orange-100 hover:bg-orange-200 font-semibold rounded-full py-2 px-5 transition-colors"
        >
          Get started
        </a>
      </div>
      
    </div>
    <div
        className="absolute left-0 right-0 mx-auto top-[5px] w-full h-[100px] z-[-1] bg-gradient-to-b from-[#f8f8fc] to-transparent border-t-[1px] border-[#ceceea]"
        style={{
          maxWidth: '100vw',
        }}
      />
    </div> */}
      <ComFeature />
    </div>
  );
}
