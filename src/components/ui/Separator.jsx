import React from 'react'

function Separator({ className = '', aos, delay }) {
  return (
    <div data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom"  className={`w-[150px] h-[7px] bg-[#C9AB8B] rounded-[50px] ${className}`}></div>
  )
}

export default Separator
