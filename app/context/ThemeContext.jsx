"use client"
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    dark: true,
    setDark: () => {}
});

const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(false);

    return (<ThemeContext.Provider value={{dark,setDark}}>
        {children}
    </ThemeContext.Provider>)
}


export default ThemeProvider;