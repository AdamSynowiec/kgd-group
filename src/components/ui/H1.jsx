import React from 'react'

const H1 = ({ children, className = '' }) => {
  return (
    <h1
      className={`
         text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl
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
