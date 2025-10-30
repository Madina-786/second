import React from "react";
import Top from "../constant/Data.js";
import leftgirl from "../assets/rightgirl.webp";
import talking from "../assets/talking.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Categories() {
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
      <div className="text-center mt-20 " data-aos="fade-up">
        <p className="text-xs">TOP CATEGORIES</p>
        <h1 className="text-2xl font-semibold">
          Discover leading categories to <br /> elevate your journey
        </h1>
      </div>
      <div
        className="flex flex-wrap gap-6 justify-center items-center mt-7"
        data-aos="fade-up"
      >
        {Top.map((item) => (
          <div
            key={item.id}
            className="w-[120px] h-[150px] border rounded-md border-gray-200 p-5 flex flex-col justify-center hover:shadow-2xl hover:shadow-gray-400 shadow "
          >
            <div className="w-10 h-10 rounded-full bg-[#eff6f8] flex items-center justify-center">
              <img src={item.icon} alt="" className="items-center w-6" />
            </div>
            <h1 className="text-[12px] font-bold text-gray-600 pt-2 text-center">
              {item.title}
            </h1>
            <p className="text-xs text-gray-400 pt-2 text-center">{item.des}</p>
          </div>
        ))}
      </div>

      {/* down */}

      <div
        className="flex md:flex-row gap-3 justify-center items-center flex-col mt-14"
        data-aos="fade-up"
      >
        <div className="w-[420px] flex flex-row justify-center items-center bg-[#eff6f8]">
          <div>
            <p className=" ps-2 text-md leading-6 font-semibold">
              Quick access to the popular courses
            </p>
            <button className="ms-2 px-5 py-2 rounded-sm text-xs font-semibold mt-3 bg-amber-300">
              View Courses
            </button>
          </div>
          <div>
            <img src={leftgirl} alt="" className="w-[380px]" />
          </div>
        </div>

        <div className="w-[420px] flex flex-row gap-20 justify-center p-4 items-center bg-[#f1f1e9]">
          <div>
            <p className=" ps-2 text-md leading-6 font-semibold">
              Develop your <br /> skills online!
            </p>
            <button className="ms-2 px-5 py-2 rounded-sm text-xs font-semibold mt-3 text-white bg-black">
              Apply Now
            </button>
          </div>
          <div>
            <img src={talking} alt="" className="w-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
