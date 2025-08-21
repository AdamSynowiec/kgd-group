import React from 'react'

const Li = ({ children }) => {
    return (
        <li className="
      text-[#717171]
      font-poppins
      font-extralight
      text-[18px]/[32px]
      sm:text-[20px]/[36px]
      md:text-[24px]/[44px]
      lg:text-[28px]/[52px]
      xl:text-[32px]/[64px]
      break-normal
    ">
            {children}
        </li>
    )
}

export default Li
