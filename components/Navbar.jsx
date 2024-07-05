"use client"
import { Mycontext } from "@/context/Mycontext.js";
import Link from "next/link";
import { useContext, useState } from "react";

const Navbar = () => {
    const{dark,setDark} = useContext(Mycontext);
    const modeChange = () => { setDark(!dark) };
    return (
        <div className={`${dark ? "dark" : ""}`}>
            <nav
                className={`flex rounded-sm justify-around max-sm:p-3 p-10 bg-[#2f3642] dark:bg-white `}
            >
                <div className=" dark:text-black font-serif font-bold flex justify-center items-center max-sm:text-sm al text-3xl ">
                    <Link href={"/"}>doTODO</Link>
                </div>
                <div className=" text-3xl w-[70%] text-center">
                    <Link
                        className=" dark:text-white dark:bg-black max-sm:text-sm max-sm:p-2 text-black bg-slate-300 p-3 rounded"
                        href={"/addTodo"}>Create Task</Link>
                </div>
                <div className="">
                    <button
                        className=" dark:text-white dark:bg-black max-sm:text-xs max-sm:p-1 text-black bg-white p-2 rounded"
                        onClick={modeChange}
                    >
                        {
                            dark ? <p>Dark Mode</p> : <p>Light Mode</p>
                        }
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;