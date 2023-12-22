import React, { useContext, useState } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {

  const { all_product, cartItems, increaseCartQuantity, decreaseCartQuantity, getTotalCartAmount, removeItemFromCart } = useContext(ShopContext)

  return (
    <div>
      <div className='cartitems'>
        <div>
          <div className='cartitems-right'>
            <div className="cartitems-format-main">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return <div>
                  <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className="cartitems-quantity"><p onClick={() => { decreaseCartQuantity(e.id) }} style={{ color: `${cartItems[e.id] === 1 ? "#ebebeb" : "black"}` }}>−</p>{cartItems[e.id]}<p onClick={() => { increaseCartQuantity(e.id) }}>+</p></button>
                    <p>₹{e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeItemFromCart(e.id) }} alt="" />
                  </div>
                  <hr />
                </div>
              }
              return null;
            })}
            <div className='order-place-btn'>
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
        <div className="cartitems-left">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItems
