import React from 'react'
import Container from '../layout/Container'

const Footer = () => {
    return (
        <div className='h-[100px] bg-[#1F1F24] '>
            <div className="flex items-center h-[100px] w-full max-w-[1920px] mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        xl:px-[120px]
        2xl:px-[162px]">
                <p className='font-poppins font-regular text-[14px] text-[#878787]'>Copyright by kgd-group.pl</p>
            </div>
        </div>
    )
}

export default Footer