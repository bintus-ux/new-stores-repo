import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Image, Container } from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import { searchProducts } from '../actions/productActions'

const SearchScreen = () => {
  let { keyword } = useParams()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const searchProduct = useSelector((state) => state.productSearch)
  const { data } = searchProduct

  useEffect(() => {
    dispatch(searchProducts(keyword))
  }, [keyword, dispatch])
  return (
    <>
      <Container fluid>
        <Row>
          {keyword && (
            <div className='container mt-3'>
              <div className='row'>
                <div className='col-12'>
                  <h2 className='text-center text-capitalize font-italic'>
                    Your search result for "{keyword}" returned{' '}
                    {data?.length ? data?.length : 'no'} items:
                  </h2>
                  <hr className='border border-primary ' />
                </div>
              </div>
            </div>
          )}

          <div className='col my-4'>
            <SearchBar navigate={navigate} />
          </div>
          <div className='custom-margin'>
            {data?.map((item) => (
              <div xs={6} md={4} key={item._id} className='text-center'>
                <Link to={`/categoryItems/${item.category}/${item._id}`}>
                  {item.countInStock === 0 ? (
                    <>
                      <div className='row justify-content-left'>
                        <div className='circle d-flex align-items-center justify-content-center'>
                          <p className='circle-text position-absolute'>
                            Sold
                            <br /> Out
                          </p>
                        </div>
                      </div>
                      <Image
                        src={item.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={item.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${item.category}/${item._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {item.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{item.price}</h4>
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

export default SearchScreen
