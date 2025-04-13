'use client';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

type DropdownProps = {
    children: React.ReactNode;
    trigger: React.ReactNode;
    className?: string;
};

export const CustomDropdown = ({ trigger, children, className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <div className={`relative ${className}`}>
            <div onClick={toggleDropdown} className="cursor-pointer">
                {trigger}
            </div>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 z-10 min-w-[200px] shadow-lg rounded-lg border border-gray-600">
                    {children}
                </div>
            )}
        </div>
    );
};

type DropdownMenuProps = {
    label: string;
    items: React.ReactNode[]; // Allow React nodes for dynamic content like Links
};

export const DropdownMenu = ({ label, items }: DropdownMenuProps) => (
    <div className="py-2 px-3">
        <div className="text-sm font-semibold text-gray-700">{label}</div>
        <div className="mt-2">
            {items.map((item, index) => (
                <div key={index} className="text-gray-600 px-2 py-1 hover:bg-gray-200 cursor-pointer rounded">
                    {item}
                </div>
            ))}

            <LogoutLink postLogoutRedirectURL='/'>
                Logout
            </LogoutLink>
        </div>
    </div>
);
