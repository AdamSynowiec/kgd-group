import React from 'react'

const Card = ({ icon, header, content, aosDelay }) => {
    return (
        <div
            data-aos={"fade-up"} data-aos-delay={aosDelay * 1}
            className='w-full mx-auto flex flex-col items-center bg-white border border-[#EEEEEE] py-10 sm:py-12 md:py-[96px] px-4 sm:px-6 md:px-10 rounded-2xl sm:rounded-[30px] md:rounded-[50px]'>

            <div
                data-aos={"fade-up"} data-aos-delay={aosDelay * 3}
                className='mb-6 sm:mb-8 md:mb-[42px]'
            >
                {icon}
            </div>

            <span
                data-aos={"fade-up"} data-aos-delay={aosDelay * 5}
                className='text-lg sm:text-xl md:text-[32px] text-[#717171] font-extralight font-poppins text-center px-2 sm:px-0'
                dangerouslySetInnerHTML={{ __html: header }}
            ></span>

            <h3
                data-aos={"fade-up"} data-aos-delay={aosDelay * 7}
                className='font-montserrat text-2xl sm:text-4xl md:text-[28px] lg:text-[32px] font-light text-[#949494] text-center leading-snug mt-4'
                dangerouslySetInnerHTML={{ __html: content }}
            ></h3>
        </div>
    )
}

export default Card
