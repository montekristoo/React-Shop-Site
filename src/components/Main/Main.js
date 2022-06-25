import React, { useContext, useEffect, useState, useRef,  useLayoutEffect} from "react";
import Arrow from "../images/Arrow.png";
import Number from "../images/01.png";
import "antd/dist/antd.css";
import { Switch } from "antd";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Main(props) {
 
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [size, setSize] = useState(800);

  function scroll(scrollOffset) {
     window.scrollTo({
       top: scrollOffset == 1 ? 0 : (scrollOffset-1)*850,
       behavior: "smooth",
     });
  }

  const goToElement = () => {
    console.log(props.id)
  };
    
     let settings = darkMode
       ? "transition duration-0 ease-in flex flex-col justify-center h-full w-full bg-white text-black rounded-2xl"
    : "transition duration-0 ease-in flex flex-col justify-center h-full w-full bg-black text-white rounded-2xl";

  function handleClick() {
    toggleDarkMode();
  }

  const array = [
    settings + " hover:bg-blue-500 hover:text-white hover:duration-300",
    settings + " hover:bg-cyan-500 hover:text-white hover:duration-300",
    settings + " hover:bg-red-500  hover:text-white hover:duration-300",
    settings + " hover:bg-green-500 hover:text-white hover:duration-300",
  ];

  return (
    <>
      <div className="flex flex-col xl:w-11/12 xl:h-[calc(100vh_-_81px)] w-auto h-min-[calc(100vh_-_81px)] justify-around relative">
        <div className="grid xl:grid-cols-3 relative">
          <div className="flex flex-col justify-evenly max-w-lg mx-auto">
            <div
              className={
                darkMode
                  ? "flex flex-col xl:items-start xl:p-0 p-10 text-white font-serif transition duration-300 delay-75"
                  : "flex flex-col xl:items-start xl:p-0 p-10 text-black font-serif transition duration-300 delay-75"
              }
            >
              <span className="text-customGray text-3xl">SNEAKER</span>
              <span className="xl:text-productName text-6xl">AIR JORDAN</span>
              <br />
              <span className="text-2xl xl:w-auto w-72">{props.name}</span>
            </div>
            <div
              className={
                darkMode
                  ? "flex flex-col text-white xl:items-start xl:p-0 p-5 text-base font-normal transition ease-in-out duration-500 delay-250"
                  : "flex flex-col text-black xl:items-start xl:p-0 p-5 text-base font-normal transition ease-in-out duration-500 delay-250"
              }
            >
              <span className="ml-5 mr-5 xl:ml-0 xl:mr-0">
                {props.description}
              </span>
              <br />
              <ul className="list-none ml-5 mr-5 xl:ml-0 xl:mr-0">
                <li>{props.row1}</li>
                <li>{props.row2}</li>
                <li>{props.release}</li>
                <li>{props.color}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={props.photo}
              alt=""
              className="max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col h-auto w-auto justify-between items-center">
            {props.id === 1 ? (
              <span></span>
            ) : (
              <img
                src={Arrow}
                alt=""
                className={
                  darkMode
                    ? "xl:rotate-180 xl:cursor-pointer xl:transition xl:duration-300 xl:delay-75 xl:block hidden"
                    : "xl:rotate-180 xl:cursor-pointer xl:transition xl:duration-300 xl:delay-75 xl:block xl:invert hidden"
                }
                onClick={() => scroll(props.id === 1 ? 1 : props.id - 1)}
              />
            )}
            <span className="shrink text-8xl text-number">{props.id}</span>
            {props.size === props.id ? (
              <span></span>
            ) : (
              <img
                src={Arrow}
                alt=""
                className={
                  darkMode
                    ? "xl:transition xl:duration-300 xl:delay-75 xl:cursor-pointer xl:block hidden"
                    : "xl:transition xl:duration-300 xl:delay-75 xl:cursor-pointer xl:block xl:invert hidden"
                }
                onClick={() =>
                  scroll(props.size === props.id ? props.size : props.id + 1)
                }
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between w-12/12 h-auto">
          <div
            className={
              darkMode
                ? "flex justify-center text-white text-logo transition duration-300 delay-75"
                : "flex justify-center text-black text-logo transition duration-300 delay-75"
            }
          >
            <span className="">${props.price}</span>
          </div>

          <div className="flex justify-center relative w-12/12">
            {/* {array.map((color, index) => ( */}
            <div className={"h-16 w-56"}>
              <button
                className={
                  props.id === 1
                    ? array[0]
                    : props.id === 2
                    ? array[1]
                    : props.id === 3
                    ? array[2]
                    : array[3]
                }
              >
                <span className="mx-auto text-logo font-serif">BUY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
