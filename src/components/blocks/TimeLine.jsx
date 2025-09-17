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
            <div className="flex flex-col lg:flex-row mb-[32.0px] md:mb-[40px]">
                {/* Timeline circle + line */}
                <div className="flex justify-start relative">
                    <div className="aspect-square w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] bg-[#C9AB8B] rounded-[15px] flex items-center justify-center z-10 mb-[32.1px] md:mb-0">
                        <H3 className="text-white">{index}</H3>
                    </div>

                    {/* Vertical line below the circle */}
                    {!isLast && (
                        <div className="hidden lg:block absolute top-[105px] left-1/2 -translate-x-1/2 w-[6px] -bottom-[32.0px] bg-[#C9AB8B] z-0 rounded-lg" />
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
