import React, { useContext, useEffect, useState } from 'react'
import "./CSS/BuyNow.css"
import "./CSS/LoginSignup.css"
import "../Components/CartItems/CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import SectionHeader from '../Components/Atoms/BuyNow/SectionHeader'
import LoginSignup from '../Components/Atoms/BuyNow/ LoginSignup'
import AddressPage from '../Components/Atoms/BuyNow/AddressPage'
import OrderSummaryPage from '../Components/Atoms/BuyNow/OrderSummaryPage'
import PaymentPage from '../Components/Atoms/BuyNow/PaymentPage'
import EmptyCart from '../Components/Atoms/empty-cart/EmptyCart'

const BuyNow = () => {

  const { getTotalCartItems } = useContext(ShopContext)
  const [step, setStep] = useState(1)
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')))
  const [addressData, setAddressData] = useState(JSON.parse(localStorage.getItem('savedAddresses'))[0])

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userData')))
    if (userData && step === 1) {
      setIsLogin(true);
      setAddressData(JSON.parse(localStorage.getItem('savedAddresses'))[0])
      setStep(2);
    } else if (userData && addressData && step === 2) {
      setIsLogin(true);
      setStep(3)
    } else {
      setIsLogin(false);
    }
  }, []);


  const handleStepChange = (stepNumber) => {
    setStep(stepNumber);
  };

  const sequenceOrder = ["address", "locality", "city", "state", "pincode"];

  const onPlaceOrder = () => {
    handleStepChange(4)
  }

  const onSaveAndDeliver = () => {
    handleStepChange(3)
  }

  return (
    <div>
      {getTotalCartItems() > 0 ?
        <div>
          <div className='ldop' style={{ backgroundColor: step === 1 ? "#f5faff" : "#fff" }}>
            <SectionHeader step={1} title={"LOGIN"} name={userData.name} email={userData.email} onClick={() => handleStepChange(1)} />
            {step === 1 && <LoginSignup isLogin={isLogin} setIsLogin={setIsLogin} />}
          </div>
          <div className='ldop' style={{ backgroundColor: step === 2 ? "#f5faff" : "#fff" }}>
            <SectionHeader step={2} title={"DELIVERY ADDRESS"} name={sequenceOrder.map(key => addressData[key]).join(', ')} onClick={() => handleStepChange(2)} />
            {step === 2 && <AddressPage address={addressData} onClick={onSaveAndDeliver} />}
          </div>
          <div className='ldop' style={{ backgroundColor: step === 3 ? "#f5faff" : "#fff" }}>
            <SectionHeader step={3} title={"ORDER SUMMARY"} onClick={() => handleStepChange(3)} />
            {step === 3 && <OrderSummaryPage onClick={onPlaceOrder} />}
          </div>
          <div className='ldop' style={{ backgroundColor: step === 4 ? "#f5faff" : "#fff" }}>
            <SectionHeader step={4} title={"PAYMENT OPTION"} onClick={() => handleStepChange(4)} />
            {step === 4 && <PaymentPage />}
          </div>
        </div> :
        <EmptyCart />
      }
    </div>
  )
}

export default BuyNow
