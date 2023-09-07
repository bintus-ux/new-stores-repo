import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Navbar expand='false' bg='light' className='px-4'>
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement='start'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id='offcanvasNavbarLabel-expand-false'
                style={{ fontSize: '20px' }}>
                Bintus Store
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link py-2'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/catalog'>
                  <Nav.Link className='nav-link py-2'>Shop Now!</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/size-chart'>
                  <Nav.Link className='nav-link py-2'>Size Chart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/faq'>
                  <Nav.Link className='nav-link py-2'>FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link className='nav-link py-2'>
                    About Bintus Store
                  </Nav.Link>
                </LinkContainer>
                <NavDropdown
                  title='Account'
                  id={`offcanvasNavbarDropdown-expand-$'false`}>
                  <LinkContainer to='/login'>
                    <NavDropdown.Item>Log in</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to='/register'>
                    <NavDropdown.Item>Create Account</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
              <SearchBar navigate={navigate} />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Link to='/'>
            <img
              className='img-responsive img-fit'
              src='/logo_bs.jpg'
              width='250'
              height='auto'
              alt='Bintus Store logo'
            />
          </Link>
          <div className='d-inline-flex'>
            <Link to='/search'>
              <i className='fa-solid fa-magnifying-glass mx-2'></i>{' '}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item>
                  <Link to='/profile'>Profile</Link>
                </NavDropdown.Item>

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to='/login'>
                <i className='fas fa-user'></i>
              </Link>
            )}
            <Link to='/cart'>
              <i className='fa-sharp fa-solid fa-cart-shopping mx-2'></i>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
