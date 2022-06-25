import logo from "./logo.svg";
import React, { useContext } from "react";
import Nav from "./components/Navbar/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./components/dataShoes/dataShoes";
import { DarkModeContext } from "./components/context/DarkModeContext";
import "antd/dist/antd.css";
import { Switch } from "antd";
import "./App.css";

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const shoes = data.map((item) => {
    return <Main key={item.id} {...item} size={data.length}/>;
  });

  return (
    <>
      <div
        className={
          darkMode
            ? "flex flex-col place-items-center bg-black text-black relative"
            : "flex flex-col place-items-center bg-white text-white relative"
        }
      >
        <Nav />
        {shoes}
        <Footer />
      </div>
    </>
  );
}

export default App;
