import React from 'react'
import '../../../Pages/CSS/BuyNow.css'
import { useNavigate, useLocation } from 'react-router-dom'

const OrderDetail = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        <div className='cartitems' style={{ height: "70vh" }}>
          <div className='cartitems-right'>
            <div className="cartitems-format-main">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <hr />
            {location.state.all_product.map((e) => {
              if (location.state.cartItems[e.id] > 0) {
                return <div>
                  <div className="cartitems-format cartitems-format-main" style={{ gridTemplateColumns: "grid-template-columns: 2fr 4fr 0.5fr 2fr 0.5fr" }}>
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className="cartitems-quantity">{location.state.cartItems[e.id]}</button>
                    <p>₹{e.new_price * location.state.cartItems[e.id]}</p>
                  </div>
                  <hr />
                </div>
              }
              return null;
            })}
            <div className='orderdetail_btn_class'>
              <button className='orderdetail_btn' onClick={() => navigate("/")}>Buy More</button>
              <button className='orderdetail_btn' onClick={() => navigate("/")}> Track Your Order</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default OrderDetail
