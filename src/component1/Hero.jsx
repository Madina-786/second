import React from "react";
import { motion } from "framer-motion";
import prof1 from "../assets/prof1.jpg";
import prof2 from "../assets/prof2.jpg";
import prof3 from "../assets/prof3.jpg";
import prof4 from "../assets/prof4.jpg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      offset: 100, // start animation when element is 100px from the viewport
      easing: "ease", // animation easing
      once: true, // whether animation happens only once
    });
  }, []);

  // Smooth, slow fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section className="relative bg-[#0f252a] text-white overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cc74abfe41ded5921fb644_Footer%20One%20Background-3.avif')",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-80 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cd4b7767641295ddbc57c6_Testimonial%20Background.avif')",
        }}
      ></div>

      {/* Floating shapes */}
      <span className="absolute top-[20%] left-[10%] w-4 h-4 bg-yellow-500 rounded-full"></span>
      <span className="absolute top-[50%] left-[15%] w-3 h-3 bg-blue-500 rounded-full"></span>
      <span className="absolute bottom-[15%] left-[40%] w-2 h-2 bg-yellow-500 rounded-full"></span>
      <span className="absolute top-[30%] right-[20%] w-3 h-3 bg-blue-500 rounded-full"></span>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px- md:px-20 py-16 md:py-24">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 relative flex justify-center"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <motion.img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8ca55c188e59cf91d8_Banner%20Girl-p-1080.webp"
            alt="Student"
            className="rounded-[40px] w-[300px] md:w-[420px] shadow-2xl object-cover"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Badge 1 */}
          <motion.div
            className="absolute bottom-14 left-4 bg-white text-black px-4 py-2 rounded-xl shadow-md flex flex-col items-center gap-1"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            <p className="text-lg font-bold text-black">125+</p>
            <p className="text-sm ">Achievement awards</p>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            className="absolute bottom-3 -right-10 bg-[#0f252a] text-white px-4 py-3 rounded-3xl shadow-lg text-sm w-52"
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
          >
            <p className="text-gray-300">Trusted by</p>
            <p className="font-semibold">15000+ enrolled students</p>
            <div className="flex justify-center mt-2">
              {[prof1, prof2, prof3, prof4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`w-9 h-9 rounded-full border-2 border-white ${
                    i > 0 ? "ms-[-14px]" : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaStar className="text-yellow-500" />
              <span className="text-white font-bold">4.94</span>
              <span className="text-gray-300">(625)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-[500px] text-center md:text-left mt-12 md:mt-0 space-y-4"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
        >
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Online Learning
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            More than <span className="text-yellow-500">25000+</span> education
            courses online
          </h1>
          <p className="text-gray-300 md:w-4/5">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tristique commodo ornare.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#0f252a] text-xs border border-gray-400 text-white font-semibold rounded-md shadow-md hover:bg-yellow-400 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
