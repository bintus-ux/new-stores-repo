import React from 'react'
import axios from 'axios'
import { PaystackButton } from 'react-paystack'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
import Loader from '../components/Loader'
import { getOrderDetails, deliverOrder } from '../actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

const OrderScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate
  let { id } = useParams()

  const publicKey = 'pk_test_14f50da15f13068f9df8602205ba7da42702d2a9'
  const user = JSON.parse(localStorage.getItem('userInfo'))

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  // if (!loading) {
  //   order.itemsPrice = order.orderItems.reduce(
  //     (acc, item) => acc + item.qty * item.price,
  //     0
  //   )
  // }

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
    if (successDeliver) {
      dispatch({ type: ORDER_DELIVER_RESET })
    }

    dispatch({ type: ORDER_PAY_RESET })
    dispatch(getOrderDetails(id))
  }, [dispatch, successDeliver, userInfo, id, navigate])

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  const componentProps = {
    email: user?.email || `null`,
    amount: parseInt(order?.totalPrice) * 100,
    metadata: {
      name: user?.name || `null`,
      phone: 123456789,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: (res) => {
      if (res.status === 'success') {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        }
        const body = {
          id: order._id,
          status: res.status,
          update_time: new Date(),
          email_address: user.email,
        }
        axios
          .put(`/api/orders/${id}/pay`, body, config)
          .then((res) => {
            window.location.reload()
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
    onClose: () => alert('try again!!!'),
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
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
                  {order.shippingAddress.lastName}{' '}
                  {order.shippingAddress.firstName}
                </div>
                <div className='item1'>
                  <strong>Address:</strong>
                </div>
                <div className='item2'>
                  {order.shippingAddress.address1}
                  {'  '}
                </div>

                <div className='item1'>
                  <strong>State:</strong>
                </div>
                <div className='item2'>
                  {order.shippingAddress.selectedState}
                </div>
                <div className='item1'>
                  <strong>Phone:</strong>
                </div>
                <div className='item2'>{order.shippingAddress.phoneNumber}</div>
              </div>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Your order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
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
                {order.orderItems.length === 0 ? (
                  <Message>Your order is empty</Message>
                ) : (
                  <ListGroup variant='flush' className='listing-items'>
                    {order.orderItems.map((item, index) => (
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
                  <Col>₦{order.itemsPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₦{order.shippingPrice}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Total</Col>
                  <Col>₦{order.totalPrice}</Col>
                </Row>
              </ListGroupItem>
              {!order.isPaid && (
                <ListGroup.Item>
                  <Row>
                    {loadingPay && <Loader />}
                    {error && <Message>{error}</Message>}
                    <PaystackButton
                      {...componentProps}
                      className='paystack'
                      id='paystack-button'
                    />
                  </Row>
                </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Row>
                      <Button
                        type='button'
                        className='btn btn-block'
                        onClick={deliverHandler}>
                        Mark As Shipped
                      </Button>
                    </Row>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
