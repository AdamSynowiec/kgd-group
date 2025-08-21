import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full max-w-[1920px] mx-auto py-[60px] lg:py-[120px]
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        xl:px-[120px]
        2xl:px-[162px]
        ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
