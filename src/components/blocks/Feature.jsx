import React from 'react';

const Feature = ({ icon, header, content }) => {
    return (
        <div className='border-b border-[#EEEEEE]'>
            <div className="flex flex-col sm:flex-row items-start">
                <div class="aspect-square w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] bg-[#C9AB8B] rounded-[15px] flex items-center justify-center z-10"><h2 class="text-[#C9AB8B]
    text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-[1.25]
    font-poppins
   text-white" data-aos-anchor-placement="top-bottom">{icon}</h2></div>
                <div className="px-4 sm:pl-24">
                    <h2 className='font-poppins font-semibold text-2xl sm:text-[32px] text-[#717171]'>{header}</h2>
                    <div className='font-poppins font-light text-[#949494] text-[18px]/[36px] grid gap-4 sm:gap-[16px]' dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    );
};

export default Feature;
