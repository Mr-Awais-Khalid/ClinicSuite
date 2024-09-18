import React from "react";
import { Camera } from "lucide-react";
import img2 from "../../Assets/Pics/image2.png";
import img3 from "../../Assets/Pics/image3.png";
import img4 from "../../Assets/Pics/image4.png";
import img5 from "../../Assets/Pics/image5.png";
import img1 from "../../Assets/Pics/image1.png";

const TaskCard = ({ title, description, gradient, isLarge, imageSrc }) => {
  return (
    <div
      className={`rounded-xl bg-white shadow-lg ${
        isLarge ? "w-full" : "w-full"
      }`}
    >
      <div
        className={`relative rounded-t-xl overflow-hidden  ${
          isLarge ? "h-60" : "h-56"
        } ${gradient}`}
      >
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full  object-cover"
        />
      </div>
      <div className="p-4 pt-0">
        <div className="relative z-10 flex  items-center justify-center mb-4">
          {/* <Camera className="w-12 h-12 text-gray-400" /> */}
        </div>
        <h3 className="text-lg font-semibold  text-black">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className="max-w-[80rem] mt-20 mx-auto py-0  sm:px-6 ">
      <div className="text-center mb-12">
        {/* <span className="inline-block bg-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
          Clinic Suites 
        </span> */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Tasks that define your Needs
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Add custom fields, link dependent tasks, and define tasks with Task
          Types to fit the way you work.
        </p>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <TaskCard
          title="Customize task status"
          description="Quickly identify and categorize tasks by adding custom tags and statuses."
          gradient="bg-gradient-to-br from-purple-400 to-purple-600"
          imageSrc={img2} // Example image link
        />
        <TaskCard
          title="Do more with task types"
          description="Manage any kind of work with task types that make sense for your team."
          gradient="bg-gradient-to-br from-pink-400 to-pink-600"
          imageSrc={img3} // Example image link
        />
        <TaskCard
          title="Set priority levels"
          description="Easily focus on what matters most by setting priority levels."
          gradient="bg-gradient-to-br from-blue-400 to-blue-600"
          imageSrc={img4} // Example image link
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TaskCard
          title="Get context with Custom Fields"
          description="Add Custom Fields in tasks to include links, relationships, files, and more."
          gradient="bg-gradient-to-br from-red-400 to-red-600"
          isLarge={true}
          imageSrc={img5} // Example image link
        />
        <TaskCard
          title="Link related and dependent tasks"
          description="Provide clear insights into how your projects impact each other."
          gradient="bg-gradient-to-br from-indigo-400 to-indigo-600"
          isLarge={true}
          imageSrc={img1} // Example image link
        />
      </div>
    </section>
  );
};

export default Cards;
