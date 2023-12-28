import React from 'react'
import '../../../Pages/CSS/BuyNow.css'

const SectionHeader = ({ step, title, onClick }) => {

  return (
    <div className='ldop-change_btn'>
      <div>
        <p>{step}</p>
        <p>{title}</p>
      </div>
      <button onClick={onClick}>CHANGE</button>
    </div>
  )
}

export default SectionHeader