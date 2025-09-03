import React from 'react';

const Feature = ({ icon, header, content }) => {
    return (
        <div className='mb-16 pb-16 border-b border-[#EEEEEE]'>
            <div className="flex flex-col sm:flex-row items-start">
                <div class="aspect-square w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] bg-[#C9AB8B] rounded-[20px] lg:rounded-[50px] flex items-center justify-center z-10 mb-[32px] lg:mb-0"><h2 class="text-[#C9AB8B]
    text-[32px]/[52px]
    sm:text-[56px]/[72px]
    md:text-[72px]/[96px]
    lg:text-[88px]/[120px]
    xl:text-[96px]/[144px]
    font-bold
    font-poppins
   text-white" data-aos-anchor-placement="top-bottom">{icon}</h2></div>
                <div className="px-4 sm:pl-24">
                    <h2 className='font-poppins font-semibold text-2xl sm:text-[32px] text-[#717171] mb-2 sm:mb-[9px]'>{header}</h2>
                    <div className='font-poppins font-light text-[#949494] text-base sm:text-[32px] leading-relaxed sm:leading-[64px] grid gap-4 sm:gap-[16px]' dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    );
};

export default Feature;
