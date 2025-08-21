import React from 'react'

const P = ({ children, className = '', aos, delay }) => {
  const baseClass = `
    text-[#717171]
    font-montserrat
    text-[18px]/[32px]
    sm:text-[20px]/[36px]
    md:text-[24px]/[44px]
    lg:text-[28px]/[52px]
    xl:text-[32px]/[64px]
    font-extralight
  `
  return (
    <p data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom" className={`${baseClass} ${className}`.trim()}>
      {children}
    </p>
  )
}

export default P
