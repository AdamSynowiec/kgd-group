import React from 'react'
import Ul from '../ui/Ul'
import Li from '../ui/Li'
import H2 from '../ui/H2'
import H3 from '../ui/H3'
import P from '../ui/P'
import H4 from '../ui/H4'

const TimeLine = ({ index, header, content, isLast = false }) => {
    const renderContent = () => {
        if (typeof content === 'string') {
            return <P>{content}</P>
        }

        if (Array.isArray(content)) {
            return (
                <Ul>
                    {content.map((item, i) => (
                        <Li key={i}>{item}</Li>
                    ))}
                </Ul>
            )
        }

        if (typeof content === 'object' && content !== null) {
            return (
                <Ul>
                    {Object.values(content).map((item, i) => (
                        <Li key={i}>{item}</Li>
                    ))}
                </Ul>
            )
        }

        return null
    }

    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row mb-[28px]">
                {/* Timeline circle + line */}
                <div className="flex justify-center md:justify-start relative">
                    <div className="aspect-square w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] bg-[#C9AB8B] rounded-[20px] lg:rounded-[50px] flex items-center justify-center z-10 mb-[32px] lg:mb-0">
                        <H2 className="text-white">{index}</H2>
                    </div>

                    {/* Vertical line below the circle */}
                    {!isLast && (
                        <div className="hidden lg:block absolute top-[210px] left-1/2 -translate-x-1/2 w-[10px] -bottom-[20px] bg-[#C9AB8B] z-0 rounded-lg" />
                    )}
                </div>

                {/* Content */}
                <div className="lg:ml-[77px] border-b border-[#EEEEEE] pb-[28px]">
                    <H4>{header}</H4>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default TimeLine
