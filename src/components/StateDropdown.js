import React from 'react'

const StateDropdown = ({ states, onSelect }) => {
  return (
    <select onChange={onSelect} className='input-form'>
      <option value=''>Select a state</option>
      {states.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  )
}

export default StateDropdown
