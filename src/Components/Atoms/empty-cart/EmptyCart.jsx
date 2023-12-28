import React from 'react'
import '../../CartItems/CartItems.css'
import empty_cart from '../../Assets/empty-cart.webp'
import { useNavigate } from 'react-router-dom'


const EmptyCart = () => {

  const navigate = useNavigate()

  return (
    <div className='emptycart'>
      <img src={empty_cart} alt='' style={{ height: "162px" }} />
      <p style={{ fontSize: "18px" }}>Your Cart is Empty!</p>
      <p>Add items to it now.</p>
      <button onClick={() => navigate("/")}>Shop Now</button>
    </div>
  )
}

export default EmptyCart