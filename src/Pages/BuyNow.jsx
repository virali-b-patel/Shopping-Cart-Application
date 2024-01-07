import React, { useContext, useEffect, useState } from 'react'
import "./CSS/BuyNow.css"
import "./CSS/LoginSignup.css"
import "../Components/CartItems/CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import SectionHeader from '../Components/Atoms/BuyNow/SectionHeader'
import LoginSignup from '../Components/Atoms/BuyNow/LoginSignup'
import AddressPage from '../Components/Atoms/BuyNow/AddressPage'
import OrderSummaryPage from '../Components/Atoms/BuyNow/OrderSummaryPage'
import PaymentPage from '../Components/Atoms/BuyNow/PaymentPage'
import EmptyCart from '../Components/Atoms/empty-cart/EmptyCart'

const BuyNow = () => {

  const { getTotalCartItems, getTotalCartAmount } = useContext(ShopContext)
  const [step, setStep] = useState(1)
  const [isLogin, setIsLogin] = useState(false);
  const [isAddress, setIsAddress] = useState(false)
  const userData = JSON.parse(localStorage.getItem('userData'))
  const addressData = JSON.parse(localStorage.getItem('savedAddresses'))

  useEffect(() => {
    if (step === 1) {
      console.log(step)
      if (userData !== null) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    } else if (step === 2) {
      if (addressData !== null) {
        setIsAddress(true)
      } else {
        setIsAddress(false)
      }
    }
  }, [step])

  const onChangeLogin = (state, password) => {
    if (isLogin) {
      if (userData.email === state && userData.password === password) {
        handleStepChange(2)
      }
    } else {
      localStorage.setItem('userData', JSON.stringify(state))
      setIsLogin(true)
    }
  }

  const onSaveAddress = (address) => {
    localStorage.setItem('savedAddresses', JSON.stringify(address));
    handleStepChange(3)
  }

  const handleStepChange = (stepNumber) => {
    setStep(stepNumber);
  };


  return (
    <div>
      {getTotalCartItems() > 0 ?
        <div className='cartitems'>
          <div style={{ width: "80%" }}>
            <div className='ldop' style={{ backgroundColor: step === 1 ? "#f5faff" : "#fff" }}>
              <SectionHeader step={1} title={isLogin ? "LOGIN" : "SIGN UP"} onClick={() => handleStepChange(1)} />
              {step === 1 && <LoginSignup onChangeLogin={onChangeLogin} isLogin={isLogin} setIsLogin={setIsLogin} />}
            </div>
            <div className='ldop' style={{ backgroundColor: step === 2 ? "#f5faff" : "#fff" }}>
              <SectionHeader step={2} title={"DELIVERY ADDRESS"} onClick={() => handleStepChange(2)} />
            </div>
            {step === 2 && <div onClick={() => { }} className='ldop' style={{ backgroundColor: step === 2 ? "#f5faff" : "#fff" }}>
              <div style={{ cursor: 'pointer' }} className='ldop-change_btn'>
                <div style={{ color: "blue" }}>
                  <p>+</p>
                  <p>{isAddress ? 'Edit Address' : 'Add New Address'}</p>
                </div>
              </div>
              {step === 2 && <AddressPage address={addressData} onClick={onSaveAddress} />}
            </div>}
            <div className='ldop' style={{ backgroundColor: step === 3 ? "#f5faff" : "#fff" }}>
              <SectionHeader step={3} title={"ORDER SUMMARY"} onClick={() => handleStepChange(3)} />
              {step === 3 && <OrderSummaryPage onClick={() => handleStepChange(4)} />}
            </div>
            <div className='ldop' style={{ backgroundColor: step === 4 ? "#f5faff" : "#fff" }}>
              <SectionHeader step={4} title={"PAYMENT OPTION"} onClick={() => handleStepChange(4)} />
              {step === 4 && <PaymentPage />}
            </div>
          </div>
          <div style={{ width: '20%', minWidth: "200px" }} className="cartitems-left" >
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
            </div>
          </div>
        </div> :
        <EmptyCart />
      }
    </div>
  )
}

export default BuyNow
