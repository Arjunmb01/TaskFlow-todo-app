
import React from "react"

type Input = {
    type: "text" | "checkbox" | "color";
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
}

export const Input = ({ inputValue, setInputValue, placeholder = "Add a new task..." }: Input) => {
    return (
        <div className="relative mb-7">
            <input 
                type="text" 
                className="w-full p-4 rounded-xl bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-400 
                          focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-20 
                          transition-all duration-300 shadow-lg"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}