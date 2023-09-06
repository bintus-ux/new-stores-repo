import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='text-lg-start bg-light'>
      <Container>
        <Row className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <Col className='me-3 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </Col>
          <Col className='d-flex justify-content-center '>
            <a href='' className='me-4'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='' className='me-4'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='' className='me-4'>
              <i className='fab fa-google'></i>
            </a>
            <a href='' className='me-4'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='' className='me-4'>
              <i className='fab fa-github'></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <p>Search</p>
            <p>
              <a href='#!'>Size Chart</a>
            </p>
            <p>
              <a href='#!'>FAQ</a>
            </p>
            <p>
              <a href='#!'>Contact Us</a>
            </p>
          </Col>
          <Col className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <p>
              <a href='#!'>About Us</a>
            </p>
            <p>
              <a href='#!'>Privacy Policy</a>
            </p>
            <p>
              <a href='#!'>Refund Policy</a>
            </p>
            <p>
              <a href='#!'>Terms Of Service</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; <span>{currentYear}</span> Bintus Stores
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
