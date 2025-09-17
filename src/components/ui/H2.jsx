import React from 'react'
import Separator from './Separator'

const H2 = ({ children, separator, className = '', aos, delay }) => {
    const baseClass = `
    text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-[1.25]
    text-[#C9AB8B]
    font-bold
    font-poppins
    `;


    const combinedClass = `${baseClass} ${className}`.trim()

    return (
        <>
            {separator ? (
                <>
                    <h2 className={combinedClass} data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom">{children}</h2>
                    <Separator aos={aos} delay={delay} className="mx-auto my-[32.0px] md:my-[40px]" />
                </>
            ) : (
                <h2 className={combinedClass} data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom">{children}</h2>
            )}
        </>
    )
}

export default H2
