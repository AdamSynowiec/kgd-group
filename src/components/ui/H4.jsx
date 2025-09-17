import React from 'react'

const H4 = ({ children, className = '' }) => {
    const baseClass = `
        text-base sm:text-lg lg:text-1xl xl:text-2xl 2xl:text-3xl font-medium leading-[1.35]
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
