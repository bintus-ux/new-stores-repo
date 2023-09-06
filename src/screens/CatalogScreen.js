import React from 'react'
import categoryItems from '../products_folder/categoryItems'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CatalogScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Catalog
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Container fluid>
        <Row>
          <div className='custom-margin'>
            {categoryItems.map((categoryItem) => (
              <div
                key={categoryItem._id}
                xs={6}
                md={4}
                className='position-relative row justify-content-center'
                style={
                  categoryItem._id % 2 === 0
                    ? {
                        order: 0,
                        flexBasis: '250px',
                        flexGrow: '2',
                      }
                    : {
                        order: 0,
                        flexBasis: 'auto',
                      }
                }>
                <Link to={`/categoryItems/${categoryItem.text}`}>
                  <Image
                    src={categoryItem.image}
                    className='img-fluid darker'
                    width='100%'
                  />
                </Link>

                <div className='position-absolute top-50 start-50 translate-middle text-center'>
                  <Link to={`/categoryItems/${categoryItem.text}`}>
                    <h3
                      className='text-light text '
                      style={{ textDecoration: 'none' }}>
                      {categoryItem.text}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default CatalogScreen
