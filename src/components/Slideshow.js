import React from 'react'
import { Carousel, Image, Container } from 'react-bootstrap'

const Slideshow = ({ products_0 }) => {
  return (
    <>
      <Carousel>
        {products_0.map((product) => (
          <Carousel.Item key={product._id}>
            <Image
              className='slide-image w-100'
              src={product.image}
              alt={product.name}
              fluid
            />
            <Carousel.Caption>
              <h3 className='text-light'>{product.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default Slideshow
