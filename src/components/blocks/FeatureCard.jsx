import React from 'react'
import H3 from '../ui/H3'
import Ul from '../ui/Ul'
import Li from '../ui/Li'
import A from '../ui/A'
import Image from '../ui/Image'
import Span from '../ui/Span'

const FeatureCard = ({
    title,
    location,
    features,
    link,
    linkLabel,
    imgSrc,
    imgAlt,
}) => {
    return (
        <div className="grid grid-cols-12 items-center gap-4 md:gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-6">
                <H3>{title}</H3>
                <Span>{location}</Span>
                <Ul className="py-8 sm:py-12 md:py-[73px]">
                    {features.map((feature, idx) => (
                        <Li key={idx}>{feature}</Li>
                    ))}
                </Ul>
                <A href={link} target="_blank" rel="noopener noreferrer">
                    {linkLabel || link}
                </A>
            </div>
            <div
                style={{
                    background: `url(${imgSrc})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                }}
                className="aspect-square h-full w-full col-span-12 lg:col-span-6">
                {/* <Image src={imgSrc} alt={imgAlt} /> */}
            </div>
        </div>
    )
}

export default FeatureCard
