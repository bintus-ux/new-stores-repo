import React from 'react'
import { Carousel, Col, Row, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryItems = ({ categoryItem }) => {
  return (
    <>
      <div xs={6} md={4} className='position-relative row'>
        <Link to={`/categoryItems/${categoryItem.text}/page/1`}>
          <Image
            src={categoryItem.image}
            className='img-fluid component-images darker'
          />
        </Link>

        <div className='position-absolute top-50 start-50 translate-middle text-center'>
          <Link
            to={`/categoryItems/${categoryItem.text}/page/1`}
            style={{ textDecoration: 'none' }}>
            <h3 className='text-light'>{categoryItem.text}</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategoryItems
