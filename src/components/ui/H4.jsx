import React from 'react'

const H4 = ({ children, className = '' }) => {
    const baseClass = `
        text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-[1.35]
        text-[#717171]
        font-poppins
        font-bold
    `
    return (
        <h4 className={`${baseClass} ${className}`.trim()}>
            {children}
        </h4>
    )
}

export default H4
