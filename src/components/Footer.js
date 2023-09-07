import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer text-lg-start bg-light'>
      <Container>
        <Row className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <Col className='col-md-6'>
            <span>Get connected with us on social networks:</span>
          </Col>
          <Col className='d-flex justify-content-center '>
            <i className='fab fa-facebook-f me-4'></i>
            <i className='fab fa-twitter me-4'></i>
            <i className='fab fa-google me-4'></i>
            <i className='fab fa-instagram me-4'></i>
            <i className='fab fa-linkedin me-4'></i>
            <i className='fab fa-github me-4'></i>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <p>Search</p>
            <p>Size Chart</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </Col>
          <Col className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Terms Of Service</p>
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
