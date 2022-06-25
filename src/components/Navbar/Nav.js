import React, { Component, useContext, useEffect} from "react";
import Brand from "../images/Brand.png";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { DarkModeContext } from "../context/DarkModeContext";
import { Switch } from "antd";
import { GiHamburgerMenu } from 'react-icons/gi'
import {IoIosCloseCircle } from "react-icons/io";

export default function Nav(props) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [openNav, setOpenNav] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true);

  let white = 'bg-white text-black'
  let black = 'bg-black text-white'
  let bgWhite = "bg-white";
  let textWhite = "text-white";
  let bgBlack = "bg-black";
  let textBlack = "text-black";
  let invert = "invert",
    invert0 = "invert-0";

  function handleClick() {
    toggleDarkMode();
  }

  return (
    <>
      <nav
        className={`hidden lg:flex flex-col justify-between w-11/12 h-128 font-['Montserrat'] font-semibold text-navText tracking-wider leading-relaxed sticky top-0 z-30 ${
          darkMode ? bgBlack : bgWhite
        }`}
      >
        <div className="flex flex-row flex-1 w-full h-full justify-between">
          <ul className="flex-1 flex flex-row gap-4 h-full list-none items-center text-lg">
            <li>WOMEN</li>
            <li>MEN</li>
            <li>ALL</li>
          </ul>
          <div className="flex flex-row text-logo self-start resize">
            <span className="align-middle">YOUR SNEAKER</span>
          </div>
          <ul className="h-full list-none flex flex-row flex-1 gap-5 items-center justify-end">
            <div className="flex flex-row h-auto gap-5 w-auto justify-center items-center">
              <li>
                <button className="align-middle text-2xl">
                  <HiSearch />
                </button>
              </li>
              <li>
                <button className="align-middle text-2xl">
                  <MdOutlineLocalGroceryStore />
                </button>
              </li>
              <li>
                <div className="flex flex-row flex-1 gap-2 justify-center items-center">
                  <Switch
                    onClick={handleClick}
                    size="small"
                    className="invert-0"
                    style={
                      darkMode
                        ? { background: "gray" }
                        : { background: "black" }
                    }
                  />
                  <span className="text-xs">
                    {darkMode ? "WHITE" : "BLACK"}
                  </span>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-full flex flex-row place-content-center">
          <img
            src={Brand}
            alt=""
            className={`${darkMode ? invert0 : invert}`}
          />
        </div>
      </nav>

      {/* MOBILE */}

      {!openNav && (
        <nav
          className={`flex w-full h-14 flex-row lg:hidden items-center justify-between sticky top-0 z-40 ${
            darkMode ? black : white
          }`}
        >
          <a
            href="#home"
            className={`font-['Montserrat'] font-semibold text-navText ml-5 ${
              darkMode ? textWhite : textBlack
            }`}
          >
            YOUR SNEAKER
          </a>
          <span className="text-2xl h-full mr-5">
            <button className="h-full">
              <GiHamburgerMenu onClick={() => setOpenNav(!openNav)} />
            </button>
          </span>
        </nav>
      )}
      {openNav && (
        <div className="min-h-screen w-full z-20 flex justify-center items-center backdrop-blur-lg fixed top-0 lg:hidden">
          <span className="absolute top-5 right-5 text-3xl">
            <button>
              <IoIosCloseCircle onClick={() => setOpenNav(!openNav)} />
            </button>
          </span>
          <ul className="flex flex-col gap-5 text-xl">
            <li>About</li>
            <li>Contact</li>
            <li>Rules</li>
            <li>Help</li>
            <li>
              <Switch onClick={handleClick} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
