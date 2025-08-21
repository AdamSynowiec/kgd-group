import React from 'react'

const Input = ({ type = 'text', placeholder = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="
            bg-[#FFFFFF]
            font-poppins 
            font-regular 
            text-black

            border-b-[5px] 
            border-[#C9AB8B]
            focus:border-[#A67C52]
            focus:outline-none

            text-[16px]
            sm:text-[18px]
            md:text-[20px]
            lg:text-[22px]
            xl:text-[24px]

            px-[8px]
            sm:px-[10px]
            md:px-[12px]
            lg:px-[14px]
            xl:px-[16px]

            min-h-[60px]
            sm:min-h-[80px]
            md:min-h-[100px]
            lg:min-h-[100px]
            xl:min-h-[100px]

            w-full
            transition-all duration-200 ease-in-out
            "
        />
    )
}

export default Input
