'use client'
import React from 'react';
import { ButtonProps } from "@/app/website/ui/buttons/type";
import { useTheme } from 'next-themes';

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           variant = 'dark',
                                           withCheckbox = false,
                                           disabled = false,
                                       }) => {
    const { resolvedTheme } = useTheme();

    const baseStyles = 'rounded-full flex items-center justify-center px-4 py-2 transition-all duration-300 h-14 px-[30px] py-[18px] font-roboto font-bold text-base';

    const variantStyles = {
        dark: resolvedTheme === 'dark' ? 'bg-white text-black bg-opacity-100' : 'bg-neutral-800 text-white',
        light: resolvedTheme === 'dark' ? 'bg-white bg-opacity-20 text-white' : 'bg-gray-100 text-gray-900',
    };

    const hoverStyles = {
        dark: resolvedTheme === 'dark' ? 'hover:opacity-80' : 'hover:opacity-80',
        light: resolvedTheme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-200',
    };

    const disabledStyles = {
        dark: 'bg-neutral-800 text-white opacity-30 cursor-not-allowed',
        light: 'bg-neutral-100 text-neutral-400 cursor-not-allowed',
    };

    return (
        <button
            className={`${baseStyles} ${disabled ? disabledStyles[variant] : `${variantStyles[variant]} ${hoverStyles[variant]}`}`}
            disabled={disabled}
        >
            <span>{label}</span>
            {withCheckbox && (
                <input
                    type="checkbox"
                    className="ml-2 accent-gray-700"
                    disabled={disabled}
                />
            )}
        </button>
    );
};

export default Button;
