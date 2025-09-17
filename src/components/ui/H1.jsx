import React from 'react'

const H1 = ({ children, className = '' }) => {
  return (
    <h1
      className={`
         font-semibold md:font-extrabold tracking-tight text-gray-900  text-4xl/[56px] md:text-5xl/[68px] lg:text-6xl/[80px]
        text-white
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
