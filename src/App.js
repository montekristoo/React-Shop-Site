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
  let white = "bg-white text-black";
  let black = "bg-black text-white";

  const shoes = data.map((item) => {
    return (
      <Main key={item.id} {...item} size={data.length} className="scroll" />
    );
  });

  return (
    <>
      <div
        className={`flex flex-col place-items-center relative scrollbar ${
          darkMode ? black : white
        }`}
      >
        <Nav />
        {shoes}
        <Footer />
      </div>
    </>
  );
}

export default App;
