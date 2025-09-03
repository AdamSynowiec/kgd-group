import React from 'react'

const Ul = ({ children, className = '', aos, delay }) => {
    return (
        <ul data-aos={aos} data-aos-delay={delay} data-aos-anchor-placement="top-bottom" className={`list-disc ml-[44px] ${className}`}>
            {children}
        </ul>
    )
}

export default Ul
