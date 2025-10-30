import React, { useEffect, useState } from "react";
import testimonial from "../assets/testimonial.avif";
import testimonial1 from "../assets/testimonial1.avif";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      offset: 100, // start animation when element is 100px from the viewport
      easing: "ease", // animation easing
      once: true, // whether animation happens only once
    });
    AOS.refresh();
  }, []);
  const [count, setCount] = useState(10);
  const [count1, setCount1] = useState(5);
  const [animate, setAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: testimonial,
      name: "Linda Grady",
      position: "Co-assistant manager",
      text: "“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”",
    },
    {
      image: testimonial1,
      name: "John Doe",
      position: "Product Manager",
      text: "“Another testimonial text here. Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae.”",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Trigger slide-up animation on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  // First counter animation
  useEffect(() => {
    let start = count;
    const end = 70;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Second counter animation
  useEffect(() => {
    let start = count1;
    const end = 50;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setCount1(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div
      className="relative bg-[#0f252a] text-white mt-36 py-20 "
      data-aos="fade-up"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-80 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cd4b7767641295ddbc57c6_Testimonial%20Background.avif')",
        }}
      ></div>

      <div className="px-4 sm:px-10 md:px-[200px] flex flex-col md:flex-row gap- justify-center mt-10 relative z-10">
        {/* Left section */}
        <div
          className="w-full md:w-[800px] flex flex-col items-center md:items-start"
          data-aos="fade-up"
        >
          <p>OUR TESTIMONIAL</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 text-center md:text-left">
            Trusted by our <br /> successful students
          </h1>
          <img src={current.image} alt="" className="w-[300px]" />
        </div>

        {/* Right section: counters and text */}
        <div
          className="w-full md:w-[350px] mt-10 md:mt-14 flex flex-col items-center md:items-start"
          data-aos="fade-up"
        >
          <div className="flex flex-row gap-10 md:gap-20 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <p
                className={`text-3xl font-semibold transform transition-all duration-700 ease-out ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                data-aos="fade-up"
              >
                {count}M
              </p>
              <div className="w-[2px] h-6 bg-gray-200"></div>
              <p className="leading-4 text-sm text-gray-400 text-center md:text-left">
                Successful <br /> students
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p
                className={`text-3xl font-semibold transform transition-all duration-700 ease-out ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {count1}M
              </p>
              <div className="w-[2px] h-6 bg-gray-200"></div>
              <p className="leading-4 text-sm text-gray-400 text-center md:text-left">
                Successful <br /> students
              </p>
            </div>
          </div>

          <div className="mt-4 text-center md:text-left">
            <p className="text-sm text-gray-400">{current.text}</p>
            <p className="pt-3 font-semibold">{current.name}</p>
            <p className="text-sm text-gray-500">{current.position}</p>

            <div className="mt-4 flex gap-4 justify-center md:justify-start">
              <span
                className="text-gray-400 cursor-pointer"
                onClick={handlePrev}
              >
                <FaArrowAltCircleLeft size={20} />
              </span>
              <span
                className="text-gray-400 cursor-pointer"
                onClick={handleNext}
              >
                <FaArrowAltCircleRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
