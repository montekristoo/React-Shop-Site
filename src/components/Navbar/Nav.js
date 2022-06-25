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

    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll) {
        isVisible && setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

  function handleClick() {
    toggleDarkMode();
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "hidden lg:flex flex-col justify-between w-11/12 h-128 font-['Montserrat'] font-semibold text-navText tracking-wider leading-relaxed sticky top-0 z-30 bg-dark"
            : "hidden lg:flex flex-col justify-between w-11/12 h-128 font-['Montserrat'] font-semibold text-navText tracking-wider leading-relaxed sticky top-0 z-30 bg-white"
        }
      >
        <div className="flex flex-row flex-1 w-full h-full justify-between">
          <ul
            className={
              darkMode
                ? "flex-1 flex flex-row gap-4 h-full text-white list-none items-center text-lg"
                : "flex-1 flex flex-row gap-4 h-full text-black list-none items-center text-lg"
            }
          >
            <li>WOMEN</li>
            <li>MEN</li>
            <li>ALL</li>
          </ul>
          <div
            className={
              darkMode
                ? "flex flex-row text-white text-logo self-start resize"
                : "flex flex-row text-black text-logo self-start resize"
            }
          >
            <span className="align-middle">YOUR SNEAKER</span>
          </div>
          <ul
            className={
              darkMode
                ? "h-full list-none flex flex-row flex-1 gap-5 text-white items-center justify-end"
                : "h-full list-none flex flex-row flex-1 gap-5 text-black items-center justify-end"
            }
          >
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
                  {darkMode ? (
                    <Switch
                      onClick={handleClick}
                      size="small"
                      className="invert-0"
                      style={{ background: "gray" }}
                    />
                  ) : (
                    <Switch
                      onClick={handleClick}
                      size="small"
                      className="invert-0"
                      style={{ background: "black" }}
                    />
                  )}
                  {darkMode ? (
                    <span className="text-xs">WHITE</span>
                  ) : (
                    <span className="text-xs">BLACK</span>
                  )}
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-full flex flex-row place-content-center">
          {darkMode ? (
            <img src={Brand} alt="" />
          ) : (
            <img src={Brand} alt="" className="invert" />
          )}
        </div>
      </nav>

      {/* MOBILE */}

      {!openNav && (
        <nav
          className={
            darkMode
              ? "flex w-full h-14 bg-black text-white flex-row lg:hidden items-center justify-between sticky top-0 z-40"
              : "flex w-full h-14 bg-white text-black flex-row lg:hidden items-center justify-between sticky top-0 z-40"
          }
        >
          <a
            href="#home"
            className={
              darkMode
                ? "font-['Montserrat'] font-semibold text-navText ml-5 text-white"
                : "font-['Montserrat'] font-semibold text-navText ml-5 text-black"
            }
          >
            YOUR SNEAKER
          </a>
          <span className="text-2xl h-full mr-5">
            <button className="h-full">
              <GiHamburgerMenu
                onClick={() => setOpenNav(!openNav)}
                className={darkMode ? "text-white" : "text-black"}
              />
            </button>
          </span>
        </nav>
      )}
      {openNav && (
        <div
          className={
            darkMode
              ? "min-h-screen w-full z-20 text-white flex justify-center items-center backdrop-blur-lg fixed top-0 lg:hidden"
              : "min-h-screen w-full z-20 text-black flex justify-center items-center backdrop-blur-lg fixed top-0 lg:hidden"
          }
        >
          <span className="absolute top-5 right-5 text-3xl">
            <button className={darkMode ? "text-white" : "text-black"}>
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
