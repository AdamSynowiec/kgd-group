import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`
        w-full 
        max-w-[1536px] 
        mx-auto 
        px-3          /* mobilnie: 12px */
        sm:px-5       /* sm: 20px */
        md:px-8       /* md: 32px */
        lg:px-16      /* lg: 64px */
        xl:px-24      /* xl: 96px */
        2xl:px-24     /* 2xl: 128px */
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Container
