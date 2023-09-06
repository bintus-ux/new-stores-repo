import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductItems } from '../actions/productActions'

const ShortScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, data } = productList

  let { pageNumber } = useParams() || 1

  let { category } = useParams()

  useEffect(() => {
    dispatch(listProductItems(pageNumber, category))
  }, [dispatch, pageNumber])

  const isFound = data?.some((short) => {
    if (short._id) {
      return true
    }
    return false
  })

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {isFound ? (
            <>
              <div className='container my-5'>
                <div className='row'>
                  <div className='col-12'>
                    <h2 className='display-4 text-center text-capitalize font-italic'>
                      {category}
                    </h2>
                    <hr className='border border-primary ' />
                  </div>
                </div>
              </div>
              <Row>
                <div className='custom-margin'>
                  {data.map((item) => (
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
                            className='text-teesitalize my-3'>
                            {item.name}
                          </h4>
                          <h4 style={{ color: 'black' }}>- ₦{item.price}</h4>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Row>
            </>
          ) : (
            <div className='container my-5'>
              <div className='row'>
                <div className='col-12'>
                  <p className='display-4 text-center font-italic'>
                    Sorry, there are no available items in this collection
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ShortScreen
