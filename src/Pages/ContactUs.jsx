import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
const ContactUs = () => {
  const [Fname, setFName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setphone] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const FnameChange = (e) => setFName(e.target.value);
    const emailChange = (e) => setEmail(e.target.value);
    const compChange = (e) => setCompany(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);
    const messageChange = (e) => setMessage(e.target.value);
    const handleSubmit = ()=>{};
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center pb-14  pt-28 lg:pb-1 lg:pt-40 relative ">
        <div
          aria-hidden="true"
          class="z-10 flex  absolute max-w-8xl mx-auto -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div class="z-20 bg-gradient-to-r from-violet-300/50 to-purple-200 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-8xl h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <span className="px-2 py-1 z-30 text-sm bg-blue-100 text-blue-400 rounded-full">
          Contact Us
        </span>
        <div className="mx-auto z-30 max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-4xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Get in <span className="text-pink-600">Touch</span> with us!{" "}
          </h1>
          <p className="max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            In the world of architecture or organization, structure provides the
            backbone for a purposeful and harmonious existence.
          </p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center min-h-screen px-4 pb-7">
          <div className="flex flex-col items-center w-full max-w-6xl">
            <p className="text-2xl font-medium text-black w-full text-start m-8">
            Reach out to us anytime - we're here to assist you.
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-pink-100 w-full rounded-xl p-8 md:p-16">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <label className="w-full md:w-1/3 text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={FnameChange}
                    value={Fname}
                    type="text"
                    className="w-full md:w-2/3 py-2 rounded  px-2 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <label className="w-full md:w-1/3 text-gray-700">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={emailChange}
                    value={email}
                    type="email"
                    className="w-full md:w-2/3 py-2 rounded  px-2 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <label className="w-full md:w-1/3 text-gray-700">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={compChange}
                    value={company}
                    type="text"
                    className="w-full md:w-2/3 py-2 rounded  px-2 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <label className="w-full md:w-1/3 text-gray-700">Title</label>
                  <input
                    onChange={titleChange}
                    value={title}
                    type="text"
                    className="w-full md:w-2/3 py-2 rounded  px-2 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <label className="w-full md:w-1/2 text-gray-700">Phone</label>
                  <PhoneInput
                    country={"pk"}
                    value={phone}
                    onChange={setphone}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <label className="w-full md:w-1/3 text-gray-700">
                    Enter your message
                  </label>
                  <textarea
                    onChange={messageChange}
                    value={message}
                    className="w-full md:w-2/3 py-2 rounded  px-2 focus:outline-none"
                  />
                </div>
                <p className="text-sm mt-4">
                  By filling this form you accept the{" "}
                  <a href="/" className="text-blue-500">
                    Terms and Conditions
                  </a>{" "}
                  and the Privacy Policy statement.
                </p>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 w-full rounded-full font-medium mt-6"
                >
                  {isLoading ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
          <Toaster />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
