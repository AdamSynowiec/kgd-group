import React from 'react'

const Ul = ({ children, className = '' }) => {
    return (
        <ul className={`list-disc ml-[44px] ${className}`}>
            {children}
        </ul>
    )
}

export default Ul
