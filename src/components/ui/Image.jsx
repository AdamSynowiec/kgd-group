import React from 'react'

const Image = ({ src }) => {
    return (
        <div className="">
            <img className="max-w-full" src={src} alt="" />
        </div>
    )
}

export default Image