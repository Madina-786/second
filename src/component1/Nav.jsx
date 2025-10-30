import React, { useState } from "react";
import { FaShoppingBag, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { name: "Home", dropdown: ["Home One", "Home Two", "Home Three"] },
    {
      name: "Courses",
      mega: true, // special flag for mega menu
      dropdown: [
        {
          title: "FINANCE",
          items: ["Understanding corporate finance", "Investments"],
        },
        {
          title: "MANAGEMENT",
          items: ["Crisis management", "Problem-solving strategies"],
        },
        {
          title: "DESIGN",
          items: ["Advanced Photoshop", "UI/UX basics"],
        },
        {
          title: "DEVELOPMENT",
          items: ["React basics", "Building with Angular"],
        },
      ],
    },
    {
      name: "Pages",
      dropdown: ["About", "Contact", "FAQ", "Pricing"],
    },
    { name: "Blog", dropdown: ["Latest Posts", "Categories"] },
    { name: "Contact", dropdown: ["Contact One", "Contact Two"] },
  ];

  return (
    <nav className="fixed z-50 w-full bg-[#10272A] text-white px-6 md:px-14 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg"
          alt="Logo"
          className="w-16"
        />
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 relative">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className="hover:text-yellow-400 text-[13px] flex items-center justify-center gap-1">
              {menu.name} <span className="text-[8px]">▼</span>
            </span>

            {/* Mega Menu */}
            {menu.mega && activeMenu === index && (
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[650px] bg-white text-black shadow-2xl rounded-xl p-6 grid grid-cols-4 gap-6 z-50 animate-fadeIn">
                {/* Left sidebar */}
                <div className="col-span-1 border-r pr-4">
                  <h3 className="font-semibold text-gray-800 text-xs mb-2">
                    Free courses
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Free learning resources for skill development.
                  </p>
                  <h3 className="font-semibold text-gray-800 text-xs mb-2">
                    Paid courses
                  </h3>
                  <p className="text-xs text-gray-500">
                    Courses are available upon purchase. (Requires login)
                  </p>
                </div>

                {/* Categories */}
                <div className="col-span-3 grid grid-cols-2 gap-6">
                  {menu.dropdown.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-[13px] mb-2 uppercase">
                        {section.title}
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="hover:text-yellow-600 cursor-pointer transition-colors"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Promo Box */}
                <div className="col-span-4 bg-[#f7fafb] rounded-lg p-4 flex flex-row justify-between">
                  <div>
                    <h4 className="font-semibold text-[13px] mb-2 text-gray-700">
                      Increase your potential earnings
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Lorem ipsum dolor sit amet scelerisque integer adipiscing.
                    </p>
                  </div>
                  <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-semibold px-5 py-2 rounded flex items-center gap-1 justify-center">
                    Learn More <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            )}

            {/* Simple Dropdown */}
            {!menu.mega && activeMenu === index && (
              <ul className="absolute top-6 left-0 bg-white text-black rounded-lg shadow-lg py-2 w-40 z-50 animate-fadeIn">
                {menu.dropdown.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-100 hover:text-yellow-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-3">
        <div className="relative">
          <FaShoppingBag className="text-lg" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
        <button className="hover:text-yellow-400">Login</button>
        <span className="text-gray-400">|</span>
        <button className="hover:text-yellow-400">Register</button>
      </div>

      {/* Hamburger (mobile only) */}
      <button
        className="md:hidden text-white text-xl"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0  w-full  bg-white text-black z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-black px-4 py-3 border-b border-gray-700">
          <img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg"
            alt="Logo"
            className="w-14"
          />
          <FaTimes
            className="text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Menu items */}
        <ul className="flex flex-col space-y-4 mt-6 px-6">
          {menus.map((menu, index) => (
            <li key={index}>
              <span className="block text-[14px] font-medium hover:text-yellow-400 cursor-pointer">
                {menu.name}
              </span>
              <ul className="ml-3 mt-2 space-y-1 text-[12px] text-gray-700">
                {menu.dropdown.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-yellow-500 cursor-pointer"
                  >
                    {item.title ? item.title : item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Bottom options */}
        <div className="mt-8 border-t border-gray-700 pt-4 px-6 flex flex-col gap-2">
          <button className="hover:text-yellow-400 text-left">Login</button>
          <button className="hover:text-yellow-400 text-left">Register</button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="w-full inset-1 bg-black text-white z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
