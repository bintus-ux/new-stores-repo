import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { products_0 } from '../products_folder/products'
import Slideshow from '../components/Slideshow'
import CategoryItems from '../components/CategoryItems'
import axios from 'axios'

const HomeScreen = () => {
  const [categoryItems, setCategoryItems] = useState([])
  const [newArrivalItems, setNewArrivalItems] = useState([])

  const fetchNewArrivalItems = async () => {
    const { data } = await axios.get('/api/categoryItems/new-arrivals')
    console.log(data, 'new')
    setNewArrivalItems(data.data)
  }

  useEffect(() => {
    const fetchCategoryItems = async () => {
      const { data } = await axios.get('/api/categoryItems')
      setCategoryItems(data)
    }

    fetchCategoryItems()
    fetchNewArrivalItems()
  }, [])

  return (
    <Container fluid>
      <div className='row my-4'>
        <div className='col-12'>
          <h2 className='display-4 text-center text-capitalize font-italic'>
            Welcome To Bintus Store
          </h2>
          <hr className='border border-primary ' />
        </div>
      </div>
      <Slideshow products_0={products_0} />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-6 text-center text-capitalize font-italic'>
              Categories
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Row>
        <div className='custom-margin'>
          {categoryItems.map((categoryItem) => (
            <CategoryItems key={categoryItem._id} categoryItem={categoryItem} />
          ))}
        </div>
      </Row>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-6 text-center text-capitalize font-italic'>
              New Arrivals
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Row>
        <div className='custom-margin'>
          {newArrivalItems.map((newArrival) => (
            <div xs={6} md={4} key={newArrival._id} className='text-center'>
              <Link
                to={`/categoryItems/${newArrival.category}/${newArrival._id}`}>
                {newArrival.countInStock === 0 ? (
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
                      src={newArrival.image}
                      className='img-fluid component-images lighter'
                      style={{ height: '350px', width: 'auto' }}
                    />
                  </>
                ) : (
                  <Image
                    src={newArrival.image}
                    className='img-fluid component-images darker'
                    style={{ height: '350px', width: 'auto' }}
                  />
                )}
              </Link>

              <div>
                <Link
                  to={`/categoryItems/${newArrival.category}/${newArrival._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h4
                    style={{
                      color: 'black',
                      width: '400px',
                    }}
                    className='text-capitalize my-3'>
                    {newArrival.name}
                  </h4>
                  <h3 style={{ color: 'black' }}>
                    - ₦{newArrival.price.toLocaleString('en-US')}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center text-capitalize font-italic'>
              Read Customer Reviews...
            </h2>
            <div md={6} className='text-center'>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
            </div>
            <Link to='#'>
              <p className='h6 text-center'>from reviews</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='p-3 mb-2 bg-danger text-white'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='display-6 text-center text-capitalize font-italic'>
                Subscribe to our newsletter
              </h4>
              <p md={12} className='text-center'>
                Promotions, new products and sales. Directly to your inbox.
              </p>
              <p md={12} className='text-center'>
                Become a part of us, now!
              </p>
              <hr className='border border-primary ' />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <form>
                <div className='form-group'>
                  <label for='email'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Enter email'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomeScreen
