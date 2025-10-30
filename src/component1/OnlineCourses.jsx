import React, { useState } from "react";
import { cards } from "../constant/Data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OnlineCourses() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      offset: 100, // start animation when element is 100px from the viewport
      easing: "ease", // animation easing
      once: true, // whether animation happens only once
    });
    AOS.refresh();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All courses");

  // Filter logic
  const filteredCards =
    selectedCategory === "All courses"
      ? cards
      : cards.filter(
          (item) => item.first.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-[#eff6f8] pb-24 mt-14 " data-aos="fade-up">
      <div className="md:px-[200px] px-5">
        {/* Header */}
        <div className="pt-16">
          <h1 className="text-sm text-gray-500 md:text-start sm:text-center">
            ONLINE LEARNING
          </h1>

          <div className="flex md:flex-row flex-col justify-between items-center">
            <h1 className="text-2xl font-bold">Top online courses</h1>
            <ul className="flex flex-row pt-1 gap-4 text-xs text-gray-600">
              {[
                "All courses",
                "Design",
                "Development",
                "Management",
                "Finance",
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10">
          {filteredCards.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="group bg-white rounded-md shadow hover:shadow-2xl transition-all duration-500 overflow-visible relative"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-t-md">
                <img
                  src={item.img}
                  alt={item.second}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Price Circle */}
              <div className="absolute top-40 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold transition-transform duration-300 group-hover:scale-110 z-10">
                {item.price}
              </div>

              {/* Content Section */}
              <div className="p-4">
                <p className="text-xs text-gray-500">{item.first}</p>
                <h1 className="font-semibold text-lg mt-1 transition-colors">
                  {item.second}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <img src={item.stars} alt="rating" className="w-12 h-4" />
                  <p className="text-xs text-gray-600">{item.besidestar}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-3"></div>

                {/* Bottom Info & Button Transition */}
                <div className="relative h-10">
                  {/* Info section (visible by default, hidden on hover) */}
                  <div className="absolute inset-0 flex justify-between items-center text-sm text-gray-500 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                    <div className="flex items-center gap-1">
                      <img src={item.firstBTN} alt="" className="w-4 h-4" />
                      <span>{item.firstTxt}</span>
                    </div>

                    <div className="w-px h-6 bg-gray-300"></div>

                    <div className="flex items-center gap-1">
                      <img src={item.secondBTN} alt="" className="w-4 h-4" />
                      <span>{item.secondTxt}</span>
                    </div>
                  </div>

                  {/* Course Details button (hidden by default, visible on hover) */}
                  <div className="absolute inset-0 flex justify-center items-center transition-all duration-500 delay-150">
                    <button className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 bg-amber-500 text-white text-sm font-semibold py-2 px-4 rounded-md w-full transition-all duration-500">
                      Course Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredCards.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No courses found in this category.
          </p>
        )}
      </div>

      {/* Footer message */}
      <div className="p-2 rounded-2xl text-sm bg-black flex justify-center mt-10 mx-auto text-white w-[530px] text-center">
        <p>
          We assist you in finding the ideal tutor at no cost.{" "}
          <a href="#" className="underline">
            Browse all available courses
          </a>
        </p>
      </div>
    </div>
  );
}
