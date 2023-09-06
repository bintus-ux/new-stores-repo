import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Typewriter from './Typewriter'
import { BsMegaphone } from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col className='text-center mt-4 header'>
            <BsMegaphone style={{ color: 'yellow', marginRight: '10px' }} />
            {'    '}
            <Typewriter
              text='Spend ₦40,000 and get 10% off automatically at checkout!'
              delay={90}
              infinite
            />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
