import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutStepsRow from '../components/CheckoutStepsRow'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)

  // calculating total items cost

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  )

  // calculating shipping cost

  cart.shippingPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.qty * 500,
    0
  )

  // calculating total cost
  cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }
  return (
    <>
      <CheckoutStepsRow step1 step2 step3 step4 />
      <Row className='mt-5'>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Shipping Details</h2>
              <div className='shipping-details-container'>
                <div className='item1'>
                  <strong>Name:</strong>
                </div>
                <div className='item2'>
                  {cart.shippingAddress.lastName}{' '}
                  {cart.shippingAddress.firstName}
                </div>
                <div className='item1'>
                  <strong>Address:</strong>
                </div>
                <div className='item2'>
                  {cart.shippingAddress.address1}
                  {'  '}
                </div>
                <div className='item1'>
                  <strong>State:</strong>
                </div>
                <div className='item2'>
                  {cart.shippingAddress.selectedState}
                </div>
                <div className='item1'>
                  <strong>Phone:</strong>
                </div>
                <div className='item2'>{cart.shippingAddress.phoneNumber}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/₦{item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₦{item.price} = ₦{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2>Order Summery</h2>
              </ListGroupItem>
              <ListGroupItem>
                {cart.cartItems.length === 0 ? (
                  <Message>Your cart is empty</Message>
                ) : (
                  <ListGroup variant='flush' className='listing-items'>
                    {cart.cartItems.map((item, index) => (
                      <ListGroupItem key={index}>
                        <Row>
                          <Col md={5}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={7}>
                            <Link to={`/product/₦{item.product}`}>
                              {item.name}
                            </Link>
                            <p className='mt-2'>Quantity: - {item.qty}</p>
                            <div className='mt-5'>₦{item.price}</div>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                )}
              </ListGroupItem>
              <ListGroupItem style={{ border: 'none' }}>
                <Row>
                  <Col>Items</Col>
                  <Col>₦{cart.itemsPrice.toLocaleString('en-US')}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₦{cart.shippingPrice.toLocaleString('en-US')}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Total</Col>
                  <Col>₦{cart.totalPrice.toLocaleString('en-US')}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}>
                  Place Order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
