"use client"

import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useThemeClass from "../hooks/useThemeClass";
import Link from 'next/link'

interface MyProps {
    code: string,
}

const Navbar = (props:MyProps) => {

    const {dark,setDark} = useContext(ThemeContext);
       
    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme === "light") {
            setDark(false);
        } else if (theme === "dark") {
            setDark(true);
        }
        
    },[setDark]);

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme === "light") {
            setDark(false);
        } else if (theme === "dark") {
            setDark(true);
        }
        
    },[setDark]);

    function handleDarkMode(){
        setDark(() => {
            const newDark = !dark;
            localStorage.setItem('theme',newDark ? "dark" : "")
            return newDark;
        });
    }

    function handleDarkMode(){
        setDark(() => {
            const newDark = !dark;
            localStorage.setItem('theme',newDark ? "dark" : "")
            return newDark;
        });
    }

    function handleDownload(){

    }
    
    useThemeClass(dark);

    return (
        <nav className={`${dark ? "bg-vscode-background" : "bg-white"} p-3`}>
            <div className={`container p-2 rounded-full
            border border-gray-500/20
            ${dark ? "bg-vscode-panel" : "bg-gray-500/20 text-black"} flex justify-between
            items-center`}>
                <Link href="/" className="brand-logo
                lg:text-xl">
                    Online code editor
                </Link>
                <div className="btns flex gap-3">
                    <button className="cursor-pointer text-white
                    hover:bg-blue-600
                    transition duration-300
                    bg-blue-500 text-sm px-2 rounded download-source-code"
                    onClick={handleDownload}>
                        Download
                    </button>
                    <button type="button" className="theme-btn
                    bg-blue-500 rounded-full
                    cursor-pointer text-white
                    hover:bg-blue-600
                    transition duration-300
                    w-[50px] h-[50px]" onClick={handleDarkMode}>
                        {dark ? "Light" : "Dark"}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;