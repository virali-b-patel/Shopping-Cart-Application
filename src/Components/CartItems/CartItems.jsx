import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import { useNavigate } from 'react-router-dom'
import empty_cart from '../Assets/empty-cart.webp'

const CartItems = () => {

  const { all_product, cartItems, increaseCartQuantity, decreaseCartQuantity, getTotalCartAmount, removeItemFromCart } = useContext(ShopContext)
  const { getTotalCartItems } = useContext(ShopContext)
  const navigate = useNavigate()

  const handlePageChange = () => {
    navigate("/buy")
  }

  return (
    < div >
      {getTotalCartItems() === 0 ?
        <div className='emptycart'>
          <img src={empty_cart} alt='' style={{ height: "162px" }} />
          <p style={{ fontSize: "18px" }}>Your Cart is Empty!</p>
          <p>Add items to it now.</p>
          <button onClick={() => navigate("/")}>Shop Now</button>
        </div> :
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
                <button onClick={handlePageChange}>PLACE ORDER</button>
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
      }
    </ div >
  )
}
export default CartItems
