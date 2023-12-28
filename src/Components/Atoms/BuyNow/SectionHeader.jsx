import React from 'react'
import '../../../Pages/CSS/BuyNow.css'

const SectionHeader = ({ step, title, name, email, onClick }) => {

  return (
    <>
      <div className='ldop-change_btn'>
        <div>
          <p>{step}</p>
          <p>{title}</p>
        </div>
        <button onClick={onClick}>CHANGE</button>
      </div>
      <div style={{ display: 'flex' }}>
        <b style={{ marginRight: '20px' }}>{name}</b>
        <p>{email}</p>
      </div>
    </>
  )
}

export default SectionHeader