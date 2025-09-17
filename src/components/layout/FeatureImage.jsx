import React from 'react'
import Container from './Container'
import ImageCard from '../blocks/ImageCard'
import { Link } from 'react-router-dom'

const FeatureImage = ({ src, title, subtitle, link }) => {
    return (
        <div className="relative">
            {/* Tło w responsywnej formie */}
            <div className={`absolute left-0 top-0 bottom-0 bg-[#C9AB8B] w-full sm:w-1/3 md:w-1/2 rounded-tr-[180px] md:rounded-br-[180px] sm:rounded-tr-[360px] sm:rounded-br-[360px]`} />
            <Container>
                {link ? (
                    <Link to={link}>
                        <ImageCard link={link ? true : false} src={src} title={title} subtitle={subtitle} />
                    </Link>
                ) : (
                    <ImageCard link={link ? true : false} src={src} title={title} subtitle={subtitle} />
                )}
            </Container>
        </div>
    )
}

export default FeatureImage
