import React from 'react'

const ContactUs = () => {
 
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center pb-14  pt-28 lg:pb-24 lg:pt-40 relative ">
      
        <div
          aria-hidden="true"
          class="z-10 flex  absolute max-w-8xl mx-auto -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div class="z-20 bg-gradient-to-r from-violet-300/50 to-purple-200 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-8xl h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <span className="p-2  text-sm bg-blue-100 text-blue-400 rounded-full">Contact Us</span>
        <div className="mx-auto z-30 max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-4xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
          Get in <span className="text-pink-600">Touch</span> with us!{" "}
            
          </h1>
          <p className="max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
          In the world of architecture or organization, structure provides the backbone for{" "} 
          a purposeful and harmonious existence.
          </p>
        </div>
      </section>

     
    </div>
 
   
  )
}

export default ContactUs
