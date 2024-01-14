import React from "react";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const profile = "GAG_Profile.jpg";

function NavBar() {
  const { width } = useWindowDimensions();

  const [burger, setBurger] = useState(true);
  const [menu, setMenu] = useState("hidden");
  const liClass =
    "p-2 hover:bg-slate-300 transition ease-out duration-2000" +
    (width >= 768 ? " hover:text-black" : "");

  const doClick = (e) => {
    e.preventDefault();
    setMenu(
      burger
        ? "block text-black mt-2 bg-slate-100 border border-solid border-black rounded-b"
        : "hidden"
    );
    setBurger(!burger);
  };

  const handleMenuClick = (e) => {
    setMenu("hidden");
    setBurger(true);
  };

  const NavSmall = () => {
    return (
      <nav>
        <div className="flex justify-between flex-wrap text-white w-full fixed mx-auto top-0 h-14 p-2 bg-black z-10">
          <a href="#about">
            <img
              src={profile}
              className="w-100 h-10 mr-2 rounded-full"
              alt="profile"
            />
          </a>

          <div>
            <svg
              className="md:hidden w-10 h-10 cursor-pointer"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              onClick={doClick}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
            <ul className={menu}>
              <li className={liClass} onClick={handleMenuClick}>
                <a href="#about">about me</a>
              </li>
              <li className={liClass} onClick={handleMenuClick}>
                <a href="#mywork">my work</a>
              </li>
              <li className={liClass} onClick={handleMenuClick}>
                <a href="#contact">contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  const NavBig = () => {
    return (
      <nav>
        <div className="flex justify-between flex-wrap text-white w-full fixed mx-auto top-0 h-14 p-2 bg-black z-10">
          <a href="#about" className="">
            <img
              src={profile}
              className="w-100 h-10 mr-2 rounded-full"
              alt="profile"
            />
          </a>

          <ul className="flex">
            <li className={liClass}>
              <a href="#about">about me</a>
            </li>
            <li className={liClass}>
              <a href="#mywork">my work</a>
            </li>
            <li className={liClass}>
              <a href="#contact">contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  return <div>{width < 768 ? <NavSmall /> : <NavBig />};</div>;
}

export default NavBar;
