import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./CSS/BuyNow.css"
import "./CSS/LoginSignup.css"
import "../Components/CartItems/CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Components/Assets/cart_cross_icon.png'
import upi_img from '../Components/Assets/UPI.gif'
import wallet_img from '../Components/Assets/Wallets.gif'
import hdfc_img from '../Components/Assets/hdfc.svg'
import icici_img from '../Components/Assets/icici.svg'
import sbi_img from '../Components/Assets/sbi.svg'
import axis_img from '../Components/Assets/axis.svg'
import kmb_img from '../Components/Assets/kmb.svg'
import lock_img from '../Components/Assets/lock.svg'
import empty_cart from '../Components/Assets/empty-cart.webp'

const BuyNow = () => {


  const location = useLocation()
  const navigate = useNavigate()
  const { all_product, cartItems, decreaseCartQuantity, increaseCartQuantity, removeItemFromCart } = useContext(ShopContext)
  const { getTotalCartItems, getTotalCartAmount } = useContext(ShopContext)

  const [loginButton, setLoginButton] = useState(false)
  const [addressButton, setAddressButton] = useState(false)
  const [orderButton, setOrderButton] = useState(false)
  const [paymentButton, setPaymentButton] = useState(false)

  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null)
  const [selectPhonepe, setSelectPhonepe] = useState(null)
  const [selectUpiId, setSelectUpiId] = useState(null)
  const [selectHdfc, setSelectHdfc] = useState(null)
  const [selectIcici, setSelectIcici] = useState(null)
  const [selectSbi, setSelectSbi] = useState(null)
  const [selectAxis, setSelectAxis] = useState(null)
  const [selectKmb, setSelectKmb] = useState(null)
  const [selectHomeDelivery, setSelectHomeDelivery] = useState(null)
  const [selectWorkDelivery, setSelectWorkDelivery] = useState(null)


  const onChangeRoute = () => {
    if (location.pathname === "/buy") {
      navigate("/login")
    }
  }

  const onSelectRadio = (e) => {
    let name = e.target.name
    setSelectedPaymentOption(name)
  }

  const onSelectBank = (e) => {
    let name = e.target.name
    setSelectHdfc(name)
    setSelectIcici(name)
    setSelectSbi(name)
    setSelectAxis(name)
    setSelectKmb(name)
  }

  const onSelectInnerRadio = (e) => {
    let name = e.target.name
    setSelectPhonepe(name)
    setSelectUpiId(name)
  }

  const onSelectDeliverPlace = (e) => {
    let name = e.target.name
    setSelectHomeDelivery(name)
    setSelectWorkDelivery(name)
  }



  return (
    <div>
      {getTotalCartItems() > 0 ?
        <div>
          <div className='ldop' style={{ height: loginButton ? "auto" : "40px", backgroundColor: loginButton ? "#f5faff" : "#fff" }}>
            <div className='ldop-change_btn'>
              <div>
                <p>1</p>
                <p>LOGIN</p>
              </div>
              <button onClick={() => setLoginButton(!loginButton)}>CHANGE</button>
            </div>
            {loginButton &&
              <div className='loginsignup-container' style={{ position: "relative", padding: "0", boxShadow: "none" }}>
                <h1>{location.pathname === "/buy" ? "Sign Up" : "Login"}</h1>
                <div className='loginsignup-fields'>
                  {location.pathname === "/signup" && <input type='text' placeholder='Your Name' />}
                  <input type='email' placeholder='Email Address' />
                  <input type='password' placeholder='Password' />
                  <input type='number' placeholder='Mobile Number' />
                </div>
                <div className='loginsignup-agree'>
                  <input type='checkbox' name='' id='' />
                  <p>By continuing, i agree to the terms of use & privacy policy. </p>
                </div>
                <button onClick={() => setLoginButton()}>Continue</button>
                <p className='loginsignup-login' onClick={onChangeRoute}>Already have an account?  <span>{location.pathname === "/buy" ? "Login" : "Sign Up"} here</span></p>
              </div>
            }
          </div>
          <div className='ldop' style={{ backgroundColor: addressButton ? "#f5faff" : "#fff" }}>
            <div className='ldop-change_btn'>
              <div>
                <p>2</p>
                <p>DELIVERY ADDRESS</p>
              </div>
              <button onClick={() => setAddressButton(!addressButton)}>CHANGE</button>
            </div>
            {addressButton &&
              <div className='address_page' style={{ position: "relative", padding: "10px 200px", boxShadow: "none", border: "none" }}>
                <div className='address_page_detail'>
                  <input type="text" placeholder="Name" />
                  <input type="number" placeholder="10-digit mobile number" />
                </div>
                <div className='address_page_detail'>
                  <input type="number" placeholder="Mobile Number" />
                  <input type="text" placeholder="Locality" />
                </div>
                <div className='address_page_detail'>
                  <textarea type="text" placeholder="Address(Area and Street)" />
                </div>
                <div className='address_page_detail'>
                  <input type="text" placeholder="City/District/Town" />
                  <input type="text" placeholder="State" />
                </div>
                <div className='address_page_addresstype'>
                  <p>Address Type</p>
                  <input type="radio" name='delivery_home' checked={selectHomeDelivery === "delivery_home"} onChange={(e) => onSelectDeliverPlace(e)} /><label>Home(All day delivery)</label>
                  <input type="radio" name='delivery_work' checked={selectWorkDelivery === "delivery_work"} onChange={(e) => onSelectDeliverPlace(e)} /><label>Work(Delivery between 10 AM - 5 PM)</label>
                </div>
                <div>
                  <button onClick={() => setAddressButton(!addressButton)}>SAVE AND DELIVERY HERE</button>
                  <button onClick={() => setAddressButton(!addressButton)}>CANCEL</button>
                </div>
              </div>
            }
          </div>
          <div className='ldop' style={{ backgroundColor: orderButton ? "#f5faff" : "#fff" }}>
            <div className='ldop-change_btn'>
              <div>
                <p>3</p>
                <p>ORDER SUMMARY</p>
              </div>
              <button onClick={() => setOrderButton(!orderButton)}>CHANGE</button>
            </div>
            {orderButton && <div className='cartitems-right' style={{ position: "relative", border: "none", boxShadow: "none", padding: "0px", margin: "auto", width: "auto%" }}>
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
                <button>PLACE ORDER</button>
              </div>
            </div>
            }
          </div>
          <div className='ldop' style={{ backgroundColor: paymentButton ? "#f5faff" : "#fff" }}>
            <div className='ldop-change_btn'>
              <div>
                <p>4</p>
                <p>PAYMENT OPTION</p>
              </div>
              <button onClick={() => setPaymentButton(!paymentButton)}>CHANGE</button>
            </div>
            {paymentButton &&
              <div className='payment_option'>
                <div className='payment_UPI'>
                  <div>
                    <input name='upi' type="radio" checked={selectedPaymentOption === 'upi'} onChange={(e) => onSelectRadio(e)} />
                  </div>
                  <div>
                    <img src={upi_img} alt="" style={{ height: "24px", width: "24px" }} />
                  </div>
                  <p style={{ marginBottom: "10px", fontSize: "17px" }}>UPI</p>
                </div>
                {selectedPaymentOption === 'upi' && <div className='payment_UPI_options' >
                  <label htmlFor="">Choose an option</label>
                  <div style={{ display: "flex" }}>
                    <input type="radio" name="phonepe" checked={selectPhonepe === 'phonepe'} onChange={(e) => onSelectInnerRadio(e)} id="" /> <p>PhonePe</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input type="radio" name="upi_id" checked={selectUpiId === 'upi_id'} onChange={(e) => onSelectInnerRadio(e)} id="" /> <p>Your UPI ID</p>
                  </div>
                  <p style={{ color: "gray", marginBottom: "15px" }}>Pay by any UPI app</p>
                </div>}
                <hr />
                <div className='payment_wallets'>
                  <div>
                    <input type="radio" name='wallet' checked={selectedPaymentOption === 'wallet'} onChange={(e) => onSelectRadio(e)} />
                  </div>
                  <div>
                    <img src={wallet_img} alt="" style={{ height: "24px", width: "24px" }} />
                  </div>
                  <p style={{ marginBottom: "10px", fontSize: "17px" }}>Wallets</p>
                </div>
                {selectedPaymentOption === 'wallet' && <div className='payment_wallet_option'>
                  <div style={{ display: "flex" }}>
                    <input type="radio" name="phonepe_wallet" checked={selectPhonepe === 'phonepe_wallet'} onChange={(e) => onSelectInnerRadio(e)} id="" /> <p>Phonepe Wallet</p> <br />
                  </div>
                  <div style={{ display: "flex" }}>
                    <input type="radio" name="paytm_wallet" checked={selectUpiId === 'paytm_wallet'} onChange={(e) => onSelectInnerRadio(e)} id="" /> <p>Paytm Payments Bank Wallet</p> <br />
                  </div>
                  <div className='payment_wallet_inputbtn' style={{ display: "flex" }}>
                    <input type="text" placeholder="Enter Paytm Payments Bank Wallet linked no." /> <button>CONTINUE</button>
                  </div>
                </div>}
                <hr />
                <div className='payment_C_D_ATM'>
                  <div className='payment_C_D_ATM_input'>
                    <input type="radio" name='cdatm' checked={selectedPaymentOption === 'cdatm'} onChange={(e) => onSelectRadio(e)} />
                    <div style={{ fontSize: "17px" }}>Credit/Debit/ATM Card</div>
                  </div>
                  {selectedPaymentOption === 'cdatm' && <div className='payment_C_D_ATM_option'>
                    <input type="text" placeholder='Enter Card Number' />
                    <div className='payment_C_D_ATM_inputbtn'>
                      <input type="text" placeholder="Valid thru" /> <input type="text" placeholder="CVV" style={{ padding: "16px" }} />
                    </div>
                    <button>PAY ₹{getTotalCartAmount()}</button>
                  </div>}
                  <p>Add and secure cards as per RBI guidelines</p>
                </div>
                <hr />
                <div className='payment_net_Banking'>
                  <div className='payment_title'>
                    <input type="radio" name='banking' checked={selectedPaymentOption === 'banking'} onChange={(e) => onSelectRadio(e)} />
                    <p>Net Banking</p>
                  </div>
                  {selectedPaymentOption === 'banking' && <div className='bank_detail'>
                    <div className='popular_banks'>
                      <p>Popular Banks</p>
                    </div>
                    <div className='bank_names' >
                      <div>
                        <input type="radio" name='hdfc' checked={selectHdfc === 'hdfc'} onChange={(e) => onSelectBank(e)} />
                        <img src={hdfc_img} alt="" style={{ height: "16px", verticalAlign: "middle" }} />
                        <p>HDFC Bank</p>
                      </div>
                      <div>
                        <input type="radio" name='icici' checked={selectIcici === 'icici'} onChange={(e) => onSelectBank(e)} />
                        <img src={icici_img} alt="" />
                        <p>ICICI Bank</p>
                      </div>
                      <div>
                        <input type="radio" name='sbi' checked={selectSbi === 'sbi'} onChange={(e) => onSelectBank(e)} />
                        <img src={sbi_img} alt="" />
                        <p>State Bank of India</p>
                      </div>
                      <div>
                        <input type="radio" name='axis' checked={selectAxis === 'axis'} onChange={(e) => onSelectBank(e)} />
                        <img src={axis_img} alt="" />
                        <p>Axis Bank</p>
                      </div>
                      <div>
                        <input type="radio" name='kmb' checked={selectKmb === 'kmb'} onChange={(e) => onSelectBank(e)} />
                        <img src={kmb_img} alt="" />
                        <p>Kotak Mahindra Bank</p>
                      </div>
                    </div>
                    <button>PAY ₹{getTotalCartAmount()}</button>
                  </div>}
                  <p className='text'>This instrument has low success, use UPI or cards for better experience</p>
                </div>
                <hr />
                <div className='cashon_delivery'>
                  <div>
                    <img src={lock_img} alt="" />
                  </div>
                  <div>
                    <p style={{ fontSize: "17px", color: "black" }}>Cash on Delivery</p>
                    <p>Pay advance of ₹148 now to use Cash on Delivery.</p>
                    <button>PAY ₹{getTotalCartAmount()}</button>
                  </div>
                </div>
              </div>
            }
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
