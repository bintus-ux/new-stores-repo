import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBar = ({ navigate }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/search')
    }
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div style={{ width: 'auto' }}>
          <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Search products...'
              style={{ height: 'auto' }}
              className='mr-sm-2 ml-sm-5'></Form.Control>

            <Button type='submit' variant='outline-success' className='p-2'>
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
