import React from "react";
import persoright from "../assets/persoright.webp";
import persoleft from "../assets/persoleft.webp";
import { FaDotCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Personalized() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      offset: 100, // start animation when element is 100px from the viewport
      easing: "ease", // animation easing
      once: true, // whether animation happens only once
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-5 items-start ">
        {/* Images: always beside each other, centered on small screens */}
        <div
          className="relative w-full md:w-1/2 flex  justify-center mb-48 md:mb-0"
          data-aos="fade-up"
        >
          <div>
            <img
              src={persoright}
              alt=""
              className="w-[190px] absolute top-20 right-20"
              data-aos="fade-up"
            />
          </div>
          <div>
            <img
              src={persoleft}
              alt=""
              className="w-[190px] absolute top-40 right-56 shadow-lg shadow-transparent"
            />
          </div>
        </div>

        {/* Text content */}
        <div
          className="w-full md:w-1/3 mt-72 md:mt-28 px-4 md:px-0 "
          data-aos="fade-up"
        >
          <p className="text-xs text-center md:text-left">WHAT WE OFFER</p>
          <h1 className="text-3xl font-bold mt-2 text-center md:text-left">
            Personalized learning for your ambition
          </h1>
          <p className="text-sm mt-1 text-gray-500 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          <div className="flex flex-col md:flex-row gap-5 mt-3 justify-center md:justify-start">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <FaDotCircle size={10} /> Skill-based instruction
              </p>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <FaDotCircle size={10} /> Analyses and insights
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <FaDotCircle size={10} /> Global certification
              </p>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <FaDotCircle size={10} /> Customizable courses
              </p>
            </div>
          </div>

          <div className="bg-[#eff6f8] flex flex-col md:flex-row p-3 mt-5 gap-3 justify-center md:justify-start items-center md:items-start">
            <div className="text-center md:text-left">
              <p className="font-semibold">Still have questions?</p>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>
            <div>
              <button className="px-8 py-2 bg-black text-white text-xs text-center rounded-md mt-2 md:mt-0">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
