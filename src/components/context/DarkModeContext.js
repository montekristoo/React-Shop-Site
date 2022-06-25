import React, { createContext, useState } from 'react'

const DarkModeContext = createContext();

function DarkModeProvider(props) {

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode () {
        return setDarkMode(!darkMode);
    }

    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}