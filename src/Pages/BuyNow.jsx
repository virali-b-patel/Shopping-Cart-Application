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
import AddressDetails from '../Components/Atoms/BuyNow/AddressDetails'

const BuyNow = () => {

  const { getTotalCartItems, getTotalCartAmount } = useContext(ShopContext)
  const [step, setStep] = useState(1)
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')))
  const [addressData, setAddressData] = useState(JSON.parse(localStorage.getItem('savedAddresses')))
  const [isAddNewAddress, setIsAddNewAddress] = useState(false)

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userData')))
    if (userData && step === 1) {
      setIsLogin(true);
      setAddressData(JSON.parse(localStorage.getItem('savedAddresses')))
      setStep(2);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleStepChange = (stepNumber) => {
    setStep(stepNumber);
  };



  const addNewAddress = () => {
    setIsAddNewAddress(true)
  }

  return (
    <div>
      {getTotalCartItems() > 0 ?
        <div className='cartitems'>
          <div style={{ width: "80%" }}>
            <div className='ldop' style={{ backgroundColor: step === 1 ? "#f5faff" : "#fff" }}>
              <SectionHeader step={1} title={"LOGIN"} name={userData.name} email={userData.email} onClick={() => handleStepChange(1)} />
              {step === 1 && <LoginSignup isLogin={isLogin} setIsLogin={setIsLogin} />}
            </div>
            <div className='ldop' style={{ backgroundColor: step === 2 ? "#f5faff" : "#fff" }}>
              <SectionHeader step={2} title={"DELIVERY ADDRESS"} name={`${addressData.address}, ${addressData.locality}, ${addressData.city}, ${addressData.state}`} email={`Pincode - ${addressData.pincode}`} onClick={() => handleStepChange(2)} />
              {step === 2 && <AddressDetails onDelivery={() => handleStepChange(3)} onClickEdit={addNewAddress} newAddressData={addressData} />}
            </div>
            {step === 2 && <div onClick={addNewAddress} className='ldop' style={{ backgroundColor: step === 2 ? "#f5faff" : "#fff" }}>
              <div style={{ cursor: 'pointer' }} className='ldop-change_btn'>
                <div style={{ color: "blue" }}>
                  <p>+</p>
                  <p>Add new address</p>
                </div>
              </div>
              {step === 2 && isAddNewAddress && <AddressPage address={addressData} onClick={() => handleStepChange(3)} />}
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
