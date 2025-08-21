import React from 'react';

const Button = ({ children, type = 'primary', className = '' }) => {
    return (
        <>
            {type === "primary" && (
                <button className={`
                    bg-[#C9AB8B] 
                    font-poppins 
                    font-regular 
                    text-white 
                    cursor-pointer
                    
                    sm:text-[16px] 
                    md:text-[18px] 
                    lg:text-[26px] 
                    xl:text-[32px] 
                    
                    sm:px-[12px] 
                    md:px-[12px] 
                    lg:px-[12px] 
                    xl:px-[12px] 
                    
                    w-full 
                    min-h-[60px]
                    sm:min-h-[80px]
                    md:min-h-[100px]
                    lg:min-h-[100px]
                    xl:min-h-[100px]
                    ${className}
                `}>
                    {children}
                </button>
            )}

            {type === "secondary" && (
                <button className={`
                    w-full 
                    text-[#C9AB8B] 
                    bg-[#FFFFFF] 
                    font-poppins 
                    font-regular 
                    cursor-pointer
                    
                    sm:text-[16px] 
                    md:text-[18px] 
                    lg:text-[26px] 
                    xl:text-[32px] 
                    
                    sm:px-[12px] 
                    md:px-[12px] 
                    lg:px-[12px] 
                    xl:px-[12px] 
                    
                    w-full 
                    min-h-[60px]
                    sm:min-h-[80px]
                    md:min-h-[100px]
                    lg:min-h-[100px]
                    xl:min-h-[100px]
                    ${className}
                `}>
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
