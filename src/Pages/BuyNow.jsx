import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./CSS/BuyNow.css"
import "./CSS/LoginSignup.css"
import "../Components/CartItems/CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import empty_cart from '../Components/Assets/empty-cart.webp'
import SectionHeader from '../Components/Atoms/BuyNow/SectionHeader'
import LoginSignup from '../Components/Atoms/BuyNow/ LoginSignup'
import AddressPage from '../Components/Atoms/BuyNow/AddressPage'
import OrderSummaryPage from '../Components/Atoms/BuyNow/OrderSummaryPage'
import PaymentPage from '../Components/Atoms/BuyNow/PaymentPage'

const BuyNow = () => {

  const navigate = useNavigate()
  const { getTotalCartItems } = useContext(ShopContext)

  const [loginButton, setLoginButton] = useState(false)
  const [addressButton, setAddressButton] = useState(false)
  const [orderButton, setOrderButton] = useState(false)
  const [paymentButton, setPaymentButton] = useState(false)

  return (
    <div>
      {getTotalCartItems() > 0 ?
        <div>
          <div className='ldop' style={{ height: loginButton ? "auto" : "40px", backgroundColor: loginButton ? "#f5faff" : "#fff" }}>
            <SectionHeader step={1} title={"LOGIN"} onClick={() => setLoginButton(!loginButton)} />
            {loginButton && <LoginSignup setLoginButton={setLoginButton} />}
          </div>
          <div className='ldop' style={{ backgroundColor: addressButton ? "#f5faff" : "#fff" }}>
            <SectionHeader step={2} title={"DELIVERY ADDRESS"} onClick={() => setAddressButton(!addressButton)} />
            {addressButton && <AddressPage addressButton={addressButton} setAddressButton={setAddressButton} />}
          </div>
          <div className='ldop' style={{ backgroundColor: orderButton ? "#f5faff" : "#fff" }}>
            <SectionHeader step={3} title={"ORDER SUMMARY"} onClick={() => setOrderButton(!orderButton)} />
            {orderButton && <OrderSummaryPage />}
          </div>
          <div className='ldop' style={{ backgroundColor: paymentButton ? "#f5faff" : "#fff" }}>
            <SectionHeader step={4} title={"PAYMENT OPTION"} onClick={() => setPaymentButton(!paymentButton)} />
            {paymentButton && <PaymentPage />}
          </div>
        </div> :
        <div className='emptycart'>
          <img src={empty_cart} alt='' style={{ height: "162px" }} />
          <p style={{ fontSize: "18px" }}>You didn't add any items!</p>
          <p>Please, Add items to it now.</p>
          <button onClick={() => navigate("/")}>Shop Now</button>
        </div>
      }
    </div>
  )
}

export default BuyNow
