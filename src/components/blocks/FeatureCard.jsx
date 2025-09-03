import React, { useEffect } from 'react'
import H3 from '../ui/H3'
import Ul from '../ui/Ul'
import Li from '../ui/Li'
import A from '../ui/A'
import Span from '../ui/Span'

const FeatureCard = ({
    title,
    location,
    features, // może być tablica lub rich text
    link,
    linkLabel,
    imgSrc,
    imgAlt,
    investmentDate
}) => {
    const renderFeatures = () => {
        if (Array.isArray(features)) {
            return (
                <Ul className="py-8 sm:py-12 md:py-[73px]">
                    {features.map((feature, idx) => (
                        <Li key={idx}>{feature}</Li>
                    ))}
                </Ul>
            )
        } else if (typeof features === 'string') {
            return (
                <div
                    className="py-8 sm:py-12 md:py-[73px] text-gray-600 font-sans
             [&_ul]:list-disc
             [&_ul]:ml-4
             [&_li]:mb-2 
             [&_p]:m-0 
             [&_li]:text-[21px]/[42px]
             [&_li]:font-poppins
             [&_li]:font-extralight
             "
                    dangerouslySetInnerHTML={{ __html: features }}
                />
            )
        } else {
            return null
        }
    }

    return (
        <div
            data-aos={"fade-up"}
            data-aos-delay={200}
            data-aos-anchor-placement="top-bottom"
            className="grid grid-cols-12 items-center gap-4 md:gap-6 lg:gap-8">
            {/* Tekst */}
            <div className="col-span-12 lg:col-span-7">
                <H3>{title || ""}</H3>
                <Span>{location || ""}</Span>
                <Span>{" - " + investmentDate || ""}</Span>
                {renderFeatures()}
                <A href={link} target="_blank" rel="noopener noreferrer">
                    {linkLabel || link || ""}
                </A>
            </div>

            {/* Obraz */}
            <div className="col-span-12 lg:col-span-5">
                <div
                    className="w-full relative overflow-hidden"
                    style={{
                        paddingTop: `${(753 / 798) * 100}%`, // proporcja 798x753
                        borderRadius: '50px', // teraz na pewno jest
                    }}
                >
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // wypełnia kontener, zachowuje proporcje
                            borderRadius: '50px', // dla pełnej pewności
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
