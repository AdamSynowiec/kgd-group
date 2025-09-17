import React from 'react'

const Input = ({ type = 'text', placeholder = '', name = '', onChange }) => {
    return (
        <input
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className="
            bg-[#FFFFFF]
            font-poppins 
            font-regular 
            text-black

            border-b-[3px] 
            border-[#C9AB8B]
            focus:border-[#A67C52]
            focus:outline-none

            sm:text-[16px] 
            md:text-[18px] 

            px-[8px]
            sm:px-[10px]
            md:px-[12px]
            lg:px-[14px]
            xl:px-[16px]

            min-h-[60px]
            sm:min-h-[80px]
            md:min-h-[50px]
            lg:min-h-[50px]
            xl:min-h-[50px]

            w-full
            transition-all duration-200 ease-in-out
            "
        />
    )
}

export default Input
