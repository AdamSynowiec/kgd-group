import React, { useRef } from 'react'
import logo from '../../assets/logo/KGD logo.svg';

const FeatureCard = ({
    key,
    title,
    location,
    features,
    link,
    linkLabel,
    imgSrc,
    imgAlt,
    investmentDate,
    animationDelay
}) => {

    const renderFeatures = () => {
        if (Array.isArray(features)) {
            return (
                <ul className="">
                    {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
            )
        } else if (typeof features === 'string') {
            return (
                <div
                    className="text-gray-600 font-sans
             [&_ul]:list-disc
             [&_ul]:ml-4
             [&_p]:m-0 
             [&_li]:text-[14px]/[24px]
             [&_li]:text-[#717171]
             [&_span]:text-[#717171]
             [&_p]:text-[#717171]
             [&_li]:font-poppins
             "
                    dangerouslySetInnerHTML={{ __html: features }}
                />
            )
        } else {
            return null
        }
    }

    return (
        <div className="h-full flex flex-col"
            data-aos={"fade-up"}
            data-aos-delay={100}
            data-aos-anchor-placement="top-bottom"
        >
            {/* Wrapper dla obrazu z zachowaniem proporcji */}
            <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-200">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <img src={logo} alt="" className='absolute w-[50px] right-4 bottom-4' />
            </div>

            <div className="p-[32px] border-l border-b border-r border-[#e2e0e0] transition-all flex-1 flex flex-col justify-between bg-white">
                <div>
                    <h2 className='font-poppins text-xl'>{title}</h2>
                    <span className='font-montserrat block'>{location}</span>
                    {renderFeatures()}
                </div>
                {link ? <a href={link || "#"} className="pt-[32px] font-montserrat border-t border-[#e2e0e0] text-left hover:underline  cursor-pointer">
                    Zobacz szczegóły inwestycji →
                </a> : <span className="pt-[32px] font-montserrat border-t border-[#e2e0e0] text-left">
                    Zobacz szczegóły inwestycji →
                </span>}
            </div>
        </div>


    )
}

export default FeatureCard
