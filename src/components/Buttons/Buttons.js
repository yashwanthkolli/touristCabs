import React from 'react'
import './Buttons.Styles.scss'

const PrimaryButton = ({ label }) => {
  return (
    <button className='btn btn-primary'>{label}</button>
  )
}

export { PrimaryButton }