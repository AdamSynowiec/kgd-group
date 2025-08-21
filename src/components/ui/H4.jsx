import React from 'react'

const H4 = ({ children, className = '' }) => {
    const baseClass = `
    text-[#717171]
    font-poppins
    font-bold
    text-[16px]
    sm:text-[16px]
    md:text-[16px]
    lg:text-[24px]
    xl:text-[32px]
  `
    return (
        <h4 className={`${baseClass} ${className}`.trim()}>
            {children}
        </h4>
    )
}

export default H4
