import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import './styles.css'

const carouselItems = [
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
    { img: 'https://source.unsplash.com/random', legend: 'Imagem' },
]

export default function MyCarousel() {

    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            {carouselItems.map((item) => {
                return (
                    <div className='carousel'>
                        <img alt="" src={item.img} />
                        <p className="legend">{item.legend}</p>
                    </div>
                )
            })}
        </Carousel>
    )
}