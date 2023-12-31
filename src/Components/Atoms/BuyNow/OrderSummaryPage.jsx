import React, { useContext } from 'react'
import { ShopContext } from '../../../Context/ShopContext'
import '../../../Pages/CSS/BuyNow.css'
import remove_icon from '../../Assets/cart_cross_icon.png'

const OrderSummaryPage = ({ onClick }) => {

  const { all_product, cartItems, decreaseCartQuantity, increaseCartQuantity, removeItemFromCart } = useContext(ShopContext)

  return (
    <div className='cartitems-right' style={{ position: "relative", border: "none", boxShadow: "none", padding: "0px", margin: "auto", width: "auto" }}>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (cartItems[e.id] > 0) {
          return <div>
            <div className="cartitems-format cartitems-format-main" key={index}>
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>{e.new_price}</p>
              <button className="cartitems-quantity"><p onClick={() => cartItems[e.id] === 1 ? null : decreaseCartQuantity(e.id)} style={{ color: `${cartItems[e.id] === 1 ? "#ebebeb" : "black"}` }}>−</p>{cartItems[e.id]}<p onClick={() => { increaseCartQuantity(e.id) }}>+</p></button>
              <p>₹{e.new_price * cartItems[e.id]}</p>
              <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeItemFromCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className='order-place-btn'>
        <button onClick={onClick}>PLACE ORDER</button>
      </div>
    </div>
  )
}

export default OrderSummaryPage