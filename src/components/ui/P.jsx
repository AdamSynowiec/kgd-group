import React from 'react'

const P = ({ children, className = '', aos, delay }) => {
  const baseClass = `
  text-[#717171]
  font-montserrat
  text-[16px]/[28px]
  sm:text-[18px]/[32px]
  md:text-[20px]/[36px]
  lg:text-[22px]/[40px]
  xl:text-[24px]/[44px]
  font-light
  text-justify
`;

  return (
    <p data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom" className={`${baseClass} ${className}`.trim()}>
      {children}
    </p>
  )
}

export default P
