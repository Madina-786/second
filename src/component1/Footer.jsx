import React from "react";

export default function Footer() {
  return (
    <div>
      <section className="relative bg-[#0f252a] text-white overflow-visible">
        {/* Background layers */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cc74abfe41ded5921fb644_Footer%20One%20Background-3.avif')",
          }}
        ></div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Orange floating card */}
        <div className="absolute z-40 right-1/2 transform translate-x-1/2 -top-10 bg-[#edb419] flex flex-col md:flex-row justify-between items-center rounded-sm px-6 md:px-20 py-6 md:py-10 gap-6 md:gap-10 shadow-lg w-[90%] md:w-[70%]">
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl text-black font-semibold">
              Are you ready to start <br className="hidden md:block" /> your
              journey?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <button className="py-2 px-4 text-[14px] bg-black text-white rounded-sm">
              Browse courses
            </button>
            <button className="py-2 px-4 border text-[14px] border-black rounded-sm text-black bg-transparent">
              Become a teacher
            </button>
          </div>
        </div>

        {/* Footer content */}
        <div className="relative md:px-[200px] px-6 pb-16 pt-36 flex flex-wrap justify-between gap-8 z-10">
          <div className="w-full sm:w-1/2 md:w-auto max-w-xs">
            <img
              src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg"
              alt=""
              className="mb-4 w-[80px]"
            />
            <p className="text-[12px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </div>

          <div className="w-1/2 sm:w-1/4 md:w-auto">
            <h1 className="font-semibold mb-2 text-[13px]">Quick links</h1>
            <ul className="space-y-1 text-[12px] text-gray-500">
              <li>Home</li>
              <li>Events</li>
              <li>Careers</li>
              <li>Instructors</li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/4 md:w-auto">
            <h1 className="font-semibold text-[13px] mb-2">Popular Courses</h1>
            <ul className="space-y-1 text-[12px] text-gray-500">
              <li>Finance</li>
              <li>Management</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/4 md:w-auto">
            <h1 className="font-semibold text-[13px] mb-2">Company</h1>
            <ul className="space-y-1 text-[12px] text-gray-500">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>License</li>
              <li>Pricing</li>
              <li>404</li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/4 md:w-auto">
            <h1 className="font-semibold text-[13px] mb-2">CMS</h1>
            <ul className="space-y-1 text-[12px] text-gray-500">
              <li>Course details</li>
              <li>Instructor details</li>
              <li>Blog details</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
