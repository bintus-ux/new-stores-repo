import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div
      style={{
        width: 'fit-content',
        height: 'fit-content',
        margin: 'auto',
      }}>
      <MutatingDots
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
          border: 'solid 2px red',
        }}
        color='black'
        secondaryColor='gray'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  )
}

export default Loader
