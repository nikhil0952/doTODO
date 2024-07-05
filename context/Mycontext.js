"use client"

import { createContext, useState } from "react";

export const Mycontext = createContext();

export const Myprovider = ({ children }) => {
    const [dark, setDark] = useState(false);
    return (
        <Mycontext.Provider value={{ dark, setDark }}>
            {children}
        </Mycontext.Provider>
    )
}