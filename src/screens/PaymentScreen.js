import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Form,
  Button,
  Col,
  FormGroup,
  FormLabel,
  FormCheck,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutStepsRow from '../components/CheckoutStepsRow'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  let navigate = useNavigate()

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayStack')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [showCreditForm, setShowCreditForm] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', cardNumber, expirationDate, cvv)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  const showCreditCardForm = () => {
    setShowCreditForm(true)
  }
  const hideCreditCardForm = () => {
    setShowCreditForm(false)
  }

  return (
    <>
      <FormContainer>
        <CheckoutStepsRow step1 step2 step3 />
        <div className='row my-5'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Payment Method{' '}
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <FormLabel as='legend'>Select Method</FormLabel>
            <Col>
              <FormCheck
                type='radio'
                label='PayStack'
                id='PayStack'
                name='paymentMethod'
                value='PayStack'
                checked
                className='my-2'
                onChange={(e) => setPaymentMethod(e.target.value)}
                onClick={hideCreditCardForm}></FormCheck>
              <FormCheck
                type='radio'
                label='Paypal or Credit Card'
                id='Paypal'
                name='paymentMethod'
                value='Paypal'
                onChange={(e) => setPaymentMethod(e.target.value)}
                onClick={showCreditCardForm}></FormCheck>
            </Col>
          </FormGroup>

          {showCreditForm ? (
            ''
          ) : (
            <Button type='submit' variant='primary' className='mt-4'>
              Continue
            </Button>
          )}
        </Form>

        {showCreditForm ? (
          <>
            <div className='my-5 mx-2'>
              <h3 className='mx-1'>Enter Credit Card Details</h3>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                    margin: '5px',
                  }}>
                  <label
                    for='card-input'
                    className='my-2'
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                    }}>
                    Select Card Type
                  </label>
                  <div className='input-group'>
                    <div className='form-div'>
                      <select
                        id='cars'
                        name='cars'
                        className='input-form'
                        required>
                        <option value='masterCard'>Master card</option>
                        <option value='visaCard'>Visa card</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                    margin: '5px',
                  }}>
                  <label
                    for='card-input'
                    className='my-2'
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                    }}>
                    Enter Credit Card Number
                  </label>
                  <div className='input-group'>
                    <div className='form-div'>
                      <input
                        type='text'
                        placeholder='1234 5678 9012 3456'
                        value={cardNumber}
                        id='card-input'
                        required
                        className='input-form'
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className='flex-container'>
                  <div className='flex-item1'>
                    <label
                      for='expiry-input'
                      className='my-2'
                      style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      Expiry Date
                    </label>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='MM/YY'
                        value={expirationDate}
                        id='expiry-input'
                        required
                        className='input-form'
                        onChange={(e) => setExpirationDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='flex-item2'>
                    <label
                      for='cvv-input'
                      className='my-2'
                      style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      CVV
                    </label>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='123'
                        value={cvv}
                        id='cvv-input'
                        required
                        className='input-form'
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button type='submit' className='btn btn-primary my-2'>
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          ''
        )}
      </FormContainer>
    </>
  )
}

export default PaymentScreen
