import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const tabData = [
  {
    id: 1,
    heading: "Improve Collaboration",
    paragraph: "Enhance team productivity with our collaboration tools.",
    image:
      "https://images.ctfassets.net/w8fc6tgspyjz/3CaOf3lz2646UYevu9iKEo/699571cd5326f2ffb9a8121a3eaf9118/collaborate.png?fm=avif&q=50&w=800",
    content: {
      heading: "Streamline Your Workflow",
      paragraph:
        "Our collaboration tools help teams work together seamlessly, no matter where they are. Share ideas, track progress, and achieve your goals faster than ever before.",
    },
  },
  {
    id: 2,
    heading: "Enhance Visibility",
    paragraph: "Gain insights into your projects and team performance.",
    image:
      "https://images.ctfassets.net/w8fc6tgspyjz/3CaOf3lz2646UYevu9iKEo/699571cd5326f2ffb9a8121a3eaf9118/collaborate.png?fm=avif&q=50&w=800",
    content: {
      heading: "Clear Insights, Better Decisions",
      paragraph:
        "With enhanced visibility, you can make data-driven decisions. Our tools provide real-time updates and comprehensive analytics to keep you informed and in control.",
    },
  },
  {
    id: 3,
    heading: "Automate Work",
    paragraph: "Simplify tasks and boost efficiency with automation.",
    image:
      "https://images.ctfassets.net/w8fc6tgspyjz/3CaOf3lz2646UYevu9iKEo/699571cd5326f2ffb9a8121a3eaf9118/collaborate.png?fm=avif&q=50&w=800",
    content: {
      heading: "Let Automation Do the Heavy Lifting",
      paragraph:
        "Automate repetitive tasks and free up your team to focus on what matters most. Our automation tools are designed to increase productivity and reduce errors.",
    },
  },
  {
    id: 4,
    heading: "Execptiomnal Feature",
    paragraph: "Simplify tasks and boost efficiency with automation.",
    image:
      "https://images.ctfassets.net/w8fc6tgspyjz/3CaOf3lz2646UYevu9iKEo/699571cd5326f2ffb9a8121a3eaf9118/collaborate.png?fm=avif&q=50&w=800",
    content: {
      heading: "Let Automation Do the Heavy Lifting",
      paragraph:
        "Automate repetitive tasks and free up your team to focus on what matters most. Our automation tools are designed to increase productivity and reduce errors.",
    },
  },
];

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <>
      <h1 className="font-semibold text-4xl max-w-80 text-center mx-auto -mt-9">Save time and get more done</h1>
      <p className="max-w-80 text-center mx-auto">
        Super charge productivity. Streamline work by doing it, and seeing it,
        in one place.
      </p>
      <div className="max-w-[80rem] mx-auto h-screen  my-14  sm:p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-screen h-full sm:h-[calc(100vh-4rem)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left side: Tab buttons */}
          <div className="w-full lg:w-1/3 p-4 sm:p-6 bg-gradient-to-b from-blue-500 to-indigo-600 overflow-y-auto">
            {tabData.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-4 sm:p-4 mb-4 rounded-2xl transition-all duration-300 ease-in-out ${
                  activeTab.id === tab.id
                    ? "bg-white text-blue-600 shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-bold text-xl sm:text-2xl mb-2 flex items-center justify-between">
                  {tab.heading}
                  <ChevronRight
                    className={`transition-transform duration-300 ${
                      activeTab.id === tab.id ? "rotate-90" : ""
                    }`}
                  />
                </h3>
                <p className="text-sm opacity-80">{tab.paragraph}</p>
              </motion.button>
            ))}
          </div>

          {/* Right side: Content and Image */}
          <motion.div
            className="w-full lg:w-2/3 p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={activeTab.id}
          >
            <div className="mb-6 sm:mb-8 ">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 sm:mb-6">
                {activeTab.content.heading}
              </h2>
              <p className="text-blue-600 leading-relaxed text-base sm:text-lg">
                {activeTab.content.paragraph}
              </p>
            </div>
            <div className="mt-auto overflow-hidden">
              <motion.img
                src={activeTab.image}
                alt={activeTab.heading}
                className="w-full h-auto overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TabPanel;
