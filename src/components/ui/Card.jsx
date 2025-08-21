import React from 'react'

const Card = ({ icon, header, content, aosDelay }) => {
    return (
        <div
            data-aos={"fade-up"} data-aos-delay={aosDelay * 1}
            className='w-full mx-auto flex flex-col items-center bg-white border border-[#EEEEEE] py-10 sm:py-12 md:py-[96px] px-4 sm:px-6 md:px-10 rounded-2xl sm:rounded-[30px] md:rounded-[50px]'>
            <svg
                data-aos={"fade-up"} data-aos-delay={aosDelay * 3}
                width="98"
                height="98"
                viewBox="0 0 98 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='mb-6 sm:mb-8 md:mb-[42px]'
            >
                <path
                    d="M40.1225 0.03125L1.95753 20.9154H9.7266L37.4747 5.73132L34.1864 20.9154H38.0133L40.4212 9.79822L43.2665 20.9152H47.1275L43.0851 5.12082L85.27 20.9154H95.9019L40.1225 0.03125ZM0.982422 24.6417V30.8523H97.0175V24.6417H0.982422ZM7.6342 34.5787V40.7892H20.522V34.5787H7.6342ZM37.5672 34.5787V44.1016H43.8033V34.5787H37.5672ZM47.5449 34.5787V44.1016H51.5511L53.7809 41.8809V34.5787H47.5449ZM87.0398 34.5787V63.9148C87.6357 63.6814 88.2703 63.5616 88.9107 63.5614C89.5688 63.5614 90.1994 63.6877 90.7815 63.9148V34.5787H87.0398ZM37.5672 47.8279V97.9266H43.8033V47.8279H37.5672ZM88.9107 67.2877C88.0848 67.2877 87.4556 67.9144 87.4556 68.7369C87.4556 69.5594 88.0848 70.186 88.9107 70.186C89.7365 70.186 90.3657 69.5594 90.3657 68.7369C90.3657 67.9144 89.7365 67.2877 88.9107 67.2877ZM84.6716 71.7107L81.2582 76.8106H85.7544L87.7796 73.7854C86.5079 73.4989 85.4064 72.7421 84.6716 71.7107ZM93.1497 71.7107C92.4149 72.7419 91.3134 73.4989 90.0417 73.7854L92.0669 76.8106H96.5631L93.1497 71.7107ZM80.8038 80.537V86.7476H97.0175V80.537H80.8038ZM33.8256 85.609L21.2704 94.9869L23.5153 97.968L33.8256 90.2669V85.609ZM47.5449 85.609V90.2669L57.8551 97.968L60.1001 94.9869L47.5449 85.609Z"
                    fill="#C9AB8B"
                />
            </svg>

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
