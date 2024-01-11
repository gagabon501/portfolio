import React from "react";

function NavBar() {
  const logo = "GAG_Profile.jpg";
  return (
    <div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
      <a
        href="#"
        className="flex title-font font-medium items-center text-gray-900 mb-4"
      >
        <img src={logo} className="w-100 h-20 mr-2 rounded-full" alt="Logo" />
      </a>
      <div className="flex flex-wrap items-center text-base justify-center">
        <a href="#aboutme" className="mr-5">
          About Me
        </a>
        <a href="#mywork" className="mr-5">
          My Work
        </a>
        <a href="#contactme" className="mr-5">
          Contact Me
        </a>
      </div>
      <button className="inline-flex items-center bg-slate-700 border-0 p-3 mt-4 rounded-lg text-white">
        Download CV
      </button>
    </div>
  );
}

export default NavBar;
