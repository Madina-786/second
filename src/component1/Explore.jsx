import React from "react";
import { explore } from "../constant/Data";
import { journey } from "../constant/Data";

export default function Explore() {
  return (
    <div className="bg-[#eff6f8] py-16">
      <div className="md:px-[200px] px-6">
        {/* Header */}
        <div className="text-center md:text-start">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Trending Courses
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900">
            Explore our top programs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {explore.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
                <img
                  src={item.img}
                  alt={item.second}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Price Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-blue-600 text-white text-xs font-semibold rounded-full z-10">
                  {item.price}
                </div>
              </div>

              {/* Default Info */}
              <div className="p-4 transition-all duration-300 group-hover:opacity-0">
                <p className="text-xs text-gray-500 uppercase">{item.first}</p>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.second}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <img src={item.stars} alt="rating" className="w-16" />
                  <p className="text-xs text-gray-500">{item.besidestar}</p>
                </div>
              </div>

              {/* Hover Popup */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                 bg-white shadow-2xl rounded-lg p-5 w-[280px] opacity-0 scale-90
                 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-50"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.second}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  • {item.lessons} Lessons • {item.enrolled} Enrolled
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Eget viverra
                  suspendisse imperdiet.
                </p>

                <ul className="text-xs text-gray-600 mt-3 space-y-1">
                  <li>✔ Expert instructors</li>
                  <li>✔ Lifetime access</li>
                  <li>✔ Certificate included</li>
                </ul>

                <div className="mt-4 flex gap-3">
                  <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                    Course Details
                  </button>
                  <button className="bg-gray-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* down */}

        <div className="px-6 md:px-20 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase">WHY WE ARE</p>
            <h1 className="font-semibold text-2xl md:text-3xl">
              Elevate your professional journey
            </h1>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. <br />
              Vitae diam dolor lacus amet integer ut.
            </p>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center text-center">
            {journey.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img src={item.img} alt="" className="w-8 h-8 mb-2" />
                <p className="text-sm font-medium">{item.first}</p>
                <p className="text-[10px] pt-3 text-gray-600">{item.second}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
