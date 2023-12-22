import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CSS/BuyNow.css"

const BuyNow = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className='ldop'>
        <div className='ldop-change_btn'>
          <div>
            <p>1</p>
            <p>LOGIN</p>
          </div>
          <button onClick={() => navigate("/login")}>CHANGE</button>
        </div>
      </div>
      <div className='ldop'>
        <div className='ldop-change_btn'>
          <div>
            <p>2</p>
            <p>DELIVERY ADDRESS</p>
          </div>
          <button>CHANGE</button>
        </div>
      </div> <div className='ldop'>
        <div className='ldop-change_btn'>
          <div>
            <p>3</p>
            <p>ORDER SUMMARY</p>
          </div>
          <button>CHANGE</button>
        </div>
      </div> <div className='ldop'>
        <div className='ldop-change_btn'>
          <div>
            <p>4</p>
            <p>PAYMENT OPTION</p>
          </div>
          <button>CHANGE</button>
        </div>
      </div>
    </div>
  )
}

export default BuyNow
