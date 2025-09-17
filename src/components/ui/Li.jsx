import React from 'react'

const Li = ({ children }) => {
    return (
        <li className="  font-montserrat
  font-light
  text-[#717171]
  text-[18px]/[32px]
  sm:text-[18px]/[32px]
  md:text-[32px]/[36px]
  lg:text-[22px]/[40px]
  xl:text-[24px]/[44px]">
            {children}
        </li>
    )
}

export default Li
