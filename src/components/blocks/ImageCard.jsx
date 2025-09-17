import React, { useEffect, useRef, useState } from 'react'
import P from '../ui/P'
import H3 from '../ui/H3'

const ImageCard = ({ src, title, subtitle, link }) => {
  const containerRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      // Sprawdź szerokość okna
      if (window.innerWidth < 768) {
        setOffset(0) // bez paralaksy na mobile
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const yOffset = (rect.top + scrollTop) * 0.5 - scrollTop * 0.5
      setOffset(yOffset)
    }

    // Ustaw offset przy resize oraz scroll
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="relative w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
        {/* Image + Gradient */}
        <div
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-anchor-placement="top-bottom"
          className="relative"
          style={{ overflow: 'hidden' }}
        >
          <img
            className="w-full h-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-200 ease-out"
            src={src}
            alt=""
            style={{ transform: `translateY(${offset}px)` }}
          />

          {/* Gradient Overlay */}
          
          <div
            className="absolute inset-0 pointer-events-none z-0 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-200 ease-out"
            style={{
              transform: `translateY(${offset}px)`,
              background: `rgba(14, 14, 14, 0.5)`
            }}
          />
        </div>

        {/* Text Content */}
        <div
          className="hidden sm:block absolute left-4 sm:left-10 md:left-20 bottom-10 sm:bottom-20 md:bottom-[180px] text-left text-white z-10 pr-4 sm:pr-10 md:pr-[100px] transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
          <H3 aos="fade-up" delay="300" className="text-white">{title}</H3>
          <P aos="fade-up" delay="200" className="text-white max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1172px]">
            {subtitle}
          </P>
        </div>
      </div>

      {/* Mobile Text */}
      <div className="block sm:hidden relative z-10">
        <H3 className="text-white  md:">{title}</H3>
        <P className="text-white max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1172px]">
          {subtitle}
        </P>
      </div>
    </>
  )
}

export default ImageCard
