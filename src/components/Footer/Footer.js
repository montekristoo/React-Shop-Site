import React from 'react'
import {useContext} from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TbBrandFacebook } from 'react-icons/tb'
import { TbBrandTwitter } from 'react-icons/tb'
import { DarkModeContext } from '../context/DarkModeContext'
export default function Footer() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    
    function handleClick() {
        toggleDarkMode();
    }

    return (
      <>
        <div
          className={
            darkMode
              ? "flex flex-col w-11/12 h-52 bg-black text-white justify-center items-center"
              : "flex flex-col w-11/12 h-52 bg-white text-black justify-center items-center"
          }
        >
          <ul className="flex flex-row gap-6 text-logo shrink h-20 items-center">
            <li className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
              <AiOutlineInstagram />
            </li>
            <li className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
              <TbBrandFacebook />
            </li>
            <li className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
              <TbBrandTwitter />
            </li>
          </ul>
          <div className="flex text-xl">
            (c) Air Jordan Corporation. 2011-2022
          </div>
        </div>
      </>
    );
}