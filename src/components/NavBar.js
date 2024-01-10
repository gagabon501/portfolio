import React from "react";

function NavBar() {
  return (
    <div className="flex flex-row   bg-black color text-white mt-5 mb-5 shadow-slate-800">
      <div className="basis-1/2 text-5xl ml-5">G</div>
      <div className="basis-1/2">
        <ul className="flex justify-end mt-3 ">
          <li className="px-4">About me</li>
          <li className="px-4">My Work</li>
          <li className="px-4">Contact me</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
