import React from 'react'

const H3 = ({ children, className = '', aos, delay }) => {
    const baseClass = `
        text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-[1.3]
        text-[#C9AB8B]
        font-poppins
        font-bold
    `
    return (
        <h3 data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom" className={`${baseClass} ${className}`.trim()}>
            {children}
        </h3>
    )
}

export default H3
