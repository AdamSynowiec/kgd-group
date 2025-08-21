import React from 'react'
import Separator from './Separator'

const H2 = ({ children, separator, className = '', aos, delay }) => {
    const baseClass = `
    text-[#C9AB8B]
    text-[32px]/[52px]
    sm:text-[56px]/[72px]
    md:text-[72px]/[96px]
    lg:text-[88px]/[120px]
    xl:text-[96px]/[144px]
    font-bold
    font-poppins
  `
    const combinedClass = `${baseClass} ${className}`.trim()

    return (
        <>
            {separator ? (
                <>
                    <h2 className={combinedClass} data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom">{children}</h2>
                    <Separator aos={aos} delay={delay} className="mx-auto mt-[47px] mb-[66px]" />
                </>
            ) : (
                <h2 className={combinedClass} data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom">{children}</h2>
            )}
        </>
    )
}

export default H2
