import React from 'react'

const H3 = ({ children, className = '', aos, delay }) => {
    const baseClass = `
    text-[#C9AB8B]
    font-poppins
    font-bold
    text-[28px]
    sm:text-[36px]
    md:text-[36px]
    lg:text-[44px]
    xl:text-[64px]
  `
    return (
        <h3 data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom" className={`${baseClass} ${className}`.trim()}>
            {children}
        </h3>
    )
}

export default H3
