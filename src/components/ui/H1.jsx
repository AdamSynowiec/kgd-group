import React from 'react'

const H1 = ({ children, className = '' }) => {
  return (
    <h1
      className={`
        text-white
        text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[84px]
        font-bold
        font-poppins
        ${className}
      `}
    >
      {children}
    </h1>
  )
}

export default H1
