
import type { JSX } from "react";

type Button = {
    children: JSX.Element | string;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
}

export const Button = ({ children, className, onClick, variant = "primary", disabled = false }: Button) => {
    const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantClasses = {
        primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white focus:ring-cyan-500 shadow-lg",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 shadow-md",
        danger: "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white focus:ring-red-500 shadow-lg"
    };

    return (
        <button 
            type="submit" 
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}