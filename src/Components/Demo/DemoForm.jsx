import React from "react";
import { Facebook, Twitter, Linkedin, Phone } from "lucide-react"; // Import the icons you need

const DemoForm = () => {
  return (
    <div className="bg-slate-50 rounded h-3/4  "> 
      <section className="overflow-auto  z-[9999] ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2 p-2">
              <div className="flex flex-col justify-between -mt-5 h-full max-w-xl mx-auto">
                <div>
                  <div className="px-2 py-3 rounded-md border mt-10  border-blue-100 bg-blue-50 inline-flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M8.5 1.215H3.5C2 1.215 1 2.215 1 3.715V6.715C1 8.215 2 9.215 3.5 9.215H5.5L7.725 10.695C8.055 10.915 8.5 10.68 8.5 10.28V9.215C10 9.215 11 8.215 11 6.715V3.715C11 2.215 10 1.215 8.5 1.215ZM7.75 5.625H4.25C4.045 5.625 3.875 5.455 3.875 5.25C3.875 5.045 4.045 4.875 4.25 4.875H7.75C7.955 4.875 8.125 5.045 8.125 5.25C8.125 5.455 7.955 5.625 7.75 5.625Z"
                        fill="blue"
                      />
                    </svg>
                    <span className="text-blue-500 text-sm font-medium">
                      Contact Support
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-4xl font-bold font-heading mb-4 max-w-xs lg:max-w-md">
                    How can we help you today?
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Submit your info and we’ll get back to you as soon as
                    possible.
                  </p>
                </div>
                <div className="bg-blue-600 rounded-3xl p-6">
                  <h2 className="text-white text-xl font-semibold mb-2 max-w-xs">
                    Technical Support
                  </h2>
                  <a
                    className="w-full sm:w-auto py-2 px-4 h-10 rounded-full bg-white border border-blue-700 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-blue-200 transition duration-200 inline-flex items-center justify-center gap-2"
                    href="#"
                  >
                    <Facebook className="w-5 h-5 text-blue-700" />
                    <span className="text-blue-900 text-sm font-semibold">
                      Facebook
                    </span>
                  </a>
                  <a
                    className="w-full sm:w-auto py-2 px-4 h-10 rounded-full bg-white border border-blue-700 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-blue-200 transition duration-200 inline-flex items-center justify-center gap-2 mt-2"
                    href="#"
                  >
                    <Twitter className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-900 text-sm font-semibold">
                      Twitter
                    </span>
                  </a>
                  <a
                    className="w-full sm:w-auto py-2 px-4 h-10 rounded-full bg-white border border-blue-700 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-blue-200 transition duration-200 inline-flex items-center justify-center gap-2 mt-2"
                    href="#"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-900 text-sm font-semibold">
                      LinkedIn
                    </span>
                  </a>
                  <h2 className="text-white text-xl font-semibold mt-5 mb-2 max-w-xs">
                    Or Call Us 24/7
                  </h2>
                  <a
                    className="w-full sm:w-auto py-2 px-4 h-10 rounded-full bg-white border border-blue-700 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-blue-200 transition duration-200 inline-flex items-center justify-center gap-2 mt-2"
                    href="#"
                  >
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-900 text-sm font-semibold">
                      +92-300-111-899
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <form action="">
                <div className="border border-gray-100 rounded-3xl p-6 max-w-xl mx-auto">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 p-2">
                      <label
                        className="text-sm font-medium mb-1 block"
                        htmlFor="textInput1"
                      >
                        First name
                      </label>
                      <input
                        className="w-full rounded-full p-3 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-blue-200 transition duration-200"
                        id="textInput1"
                        type="text"
                        placeholder="First name"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                      <label
                        className="text-sm font-medium mb-1 block"
                        htmlFor="textInput2"
                      >
                        Last name
                      </label>
                      <input
                        className="w-full rounded-full p-3 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-blue-200 transition duration-200"
                        id="textInput2"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 p-2">
                      <label
                        className="text-sm font-medium mb-1 block"
                        htmlFor="textInput3"
                      >
                        Email
                      </label>
                      <input
                        className="w-full rounded-full p-3 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-blue-200 transition duration-200"
                        id="textInput3"
                        type="text"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-2">
                      <label
                        className="text-sm font-medium mb-1 block"
                        htmlFor="textInput4"
                      >
                        Phone number
                      </label>
                      <div className="w-full rounded-full px-2 py-3 border border-gray-100 shadow flex items-center gap-3">
                        <select className="outline-none">
                          <option value="US">US</option>
                        </select>
                        <input
                          className="w-full outline-none placeholder-gray-500"
                          id="textInput4"
                          type="text"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-full p-2">
                      <label
                        className="text-sm font-medium mb-1 block"
                        htmlFor="textInput2"
                      >
                        Request Demo
                      </label>
                      <input
                        className="w-full rounded-full p-3 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-blue-200 transition duration-200"
                        id="textInput2"
                        type="text"
                        placeholder="Request a Demo for"
                      />
                    </div>
                  </div>
                  <label
                    className="text-sm font-medium mb-1 block"
                    htmlFor="textInput5"
                  >
                    Message
                  </label>
                  <textarea
                    className="resize-none w-full rounded-3xl p-3 mb-6 outline-none border border-gray-100 placeholder-gray-500 focus:ring focus:ring-blue-200 transition duration-200"
                    id="textInput5"
                    rows={4}
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                  <button
                    className="py-3 px-6 h-12 rounded-full w-full inline-flex items-center justify-center text-center mb-6 bg-blue-500 border border-blue-600 font-bold font-heading text-white hover:bg-blue-600 focus:ring focus:ring-blue-200 transition duration-200"
                    type="submit"
                  >
                    Submit
                  </button>
                  <p className="text-gray-500 text-sm">
                    <span>
                      We process your information in accordance with our
                    </span>
                    <span className="text-blue-500 text-sm font-semibold">
                      Privacy Policy
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoForm;
