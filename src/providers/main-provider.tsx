'use client';

import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import { User } from "@prisma/client"; // make sure you import User from Prisma

// Define the shape of your context
interface MainContextType {
    mainUser: User | null;
    setMainUser: Dispatch<SetStateAction<User | null>>;
}

// Create the context with default empty values
const MainContext = createContext<MainContextType | undefined>(undefined);

// Create the provider
export const MainProvider = ({ children }: { children: React.ReactNode }) => {
    const [mainUser, setMainUser] = useState<User | null>(null);

    return (
        <MainContext.Provider value={{ mainUser, setMainUser }}>
            {children}
        </MainContext.Provider>
    );
};

// Optional: create a hook to use the context easily
export const useMainContext = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("useMainContext must be used within a MainProvider");
    }
    return context;
};


