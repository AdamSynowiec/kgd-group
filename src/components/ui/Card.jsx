import React from 'react'

const Card = ({ icon, header, content, aosDelay }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={aosDelay}
            className="w-full mx-auto flex flex-col items-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 "
        >
            {/* Ikona */}
            <img src={icon}
                data-aos="fade-up"
                data-aos-delay={aosDelay * 2}
                className="h-[64px]"
            />

            {/* Nagłówek */}
            <span
                data-aos="fade-up"
                data-aos-delay={aosDelay * 3}
                className="text-base sm:text-lg md:text-xl text-[#717171] font-normal font-poppins text-center px-4 sm:px-0"
                dangerouslySetInnerHTML={{ __html: header }}
            />

            {/* Treść */}
            <h3
                data-aos="fade-up"
                data-aos-delay={aosDelay * 4}
                className="font-montserrat text-lg sm:text-xl md:text-2xl font-light text-[#949494] text-center leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}

export default Card
