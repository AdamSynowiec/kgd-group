import React from 'react'

const A = ({ children, href }) => {
    return (
        <a
            href={href}
            className="
                font-poppins font-extralight
                text-[16px] sm:text-[24px] md:text-[24px] lg:text-[24px]/[48px]
                text-[#C9AB8B]
                underline hover:no-underline
                cursor-pointer
                transition-all duration-200
            "
        >
            {children}
        </a>
    )
}

export default A
