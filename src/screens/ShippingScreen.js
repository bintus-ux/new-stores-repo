import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutStepsRow from '../components/CheckoutStepsRow'
import StateDropdown from '../components/StateDropdown'

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [firstName, setFirstName] = useState(shippingAddress.firstName)
  const [lastName, setLastName] = useState(shippingAddress.lastName)
  const [address1, setAddress1] = useState(shippingAddress.address1)
  const [address2, setAddress2] = useState(shippingAddress.address2)
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)

  const nigerianStates = ['Abia', 'Adamawa', 'Akwa Ibom' /* ... and so on */]

  const [selectedState, setSelectedState] = useState(
    shippingAddress.selectedState
  )

  const handleStateSelect = (e) => {
    setSelectedState(e.target.value)
  }

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({
        firstName,
        lastName,
        address1,
        address2,
        selectedState,
        phoneNumber,
      })
    )
    navigate('/payment')
  }

  return (
    <>
      <FormContainer>
        <CheckoutStepsRow step1 step2 />
        <div className='row my-4'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Shipping{' '}
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
        <Form onSubmit={submitHandler}>
          <div className='container'>
            <label
              for='address'
              className='my-2'
              style={{ fontWeight: 'bold', fontSize: '20px' }}>
              First Name:
            </label>
            <div className='input-group'>
              <div className='form-div'>
                <input
                  type='text'
                  placeholder='Enter first name'
                  value={firstName}
                  required
                  id='address'
                  className='input-form'
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='container'>
            <label
              for='address'
              style={{ fontWeight: 'bold', fontSize: '20px' }}>
              Last Name:
            </label>
            <div className='input-group'>
              <div className='form-div'>
                <input
                  type='text'
                  placeholder='Enter last name'
                  value={lastName}
                  required
                  id='address'
                  className='input-form'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='container'>
            <label
              for='address'
              className='my-2'
              style={{ fontWeight: 'bold', fontSize: '20px' }}>
              <i className='fa-solid fa-location-dot'></i> Street address 1:
            </label>
            <div class='row'>
              <div class='col-md-12'>
                <textarea
                  class='form-control'
                  value={address1}
                  required
                  rows='2'
                  style={{ width: '100%' }}
                  onChange={(e) => setAddress1(e.target.value)}></textarea>
              </div>
            </div>
          </div>

          <div className='container'>
            <label
              for='address'
              className='my-2'
              style={{ fontWeight: 'bold', fontSize: '20px' }}>
              <i className='fa-solid fa-location-dot'></i> Street address
              2(optional):
            </label>
            <div class='row'>
              <div class='col-md-12'>
                <textarea
                  class='form-control'
                  value={address2}
                  rows='2'
                  style={{ width: '100%' }}
                  onChange={(e) => setAddress2(e.target.value)}></textarea>
              </div>
            </div>
          </div>

          <div className='container'>
            <label
              for='city'
              className='my-2'
              style={{ fontWeight: 'bold', fontSize: '20px' }}>
              <i className='fa-solid fa-city'></i> City:
            </label>
            <div className='input-group'>
              <div className='form-div'>
                <StateDropdown
                  states={nigerianStates}
                  onSelect={handleStateSelect}
                  value={selectedState}
                  required
                  style={{ width: '300px' }}
                />
              </div>
              {selectedState && <p>You selected: {selectedState} state</p>}
            </div>
          </div>

          <div className='container'>
            <label
              for='phoneNumber'
              className='my-2'
              style={{ fontWeight: 'bold', fontSize: '20px' }}>
              <i class='fa-solid fa-phone'></i> Phone Number:
            </label>
            <div className='input-group'>
              <div className='form-div'>
                <input
                  type='text'
                  placeholder='Enter phone number'
                  value={phoneNumber}
                  required
                  id='country'
                  className='input-form'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='container'>
            <Button type='submit' variant='primary'>
              Continue
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen
