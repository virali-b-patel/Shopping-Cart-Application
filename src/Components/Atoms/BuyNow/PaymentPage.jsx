import React, { useContext, useState } from 'react'
import { ShopContext } from '../../../Context/ShopContext'
import '../../../Pages/CSS/BuyNow.css'
import upi_img from '../../Assets/UPI.gif'
import wallet_img from '../../Assets/Wallets.gif'
import hdfc_img from '../../Assets/hdfc.svg'
import icici_img from '../../Assets/icici.svg'
import sbi_img from '../../Assets/sbi.svg'
import axis_img from '../../Assets/axis.svg'
import kmb_img from '../../Assets/kmb.svg'
import lock_img from '../../Assets/lock.svg'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {

  const navigate = useNavigate()

  const { getTotalCartAmount, all_product, cartItems, setCartItems } = useContext(ShopContext)

  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null)
  const [selectPhonepe, setSelectPhonepe] = useState(null)
  const [selectUpiId, setSelectUpiId] = useState(null)
  const [selectHdfc, setSelectHdfc] = useState(null)
  const [selectIcici, setSelectIcici] = useState(null)
  const [selectSbi, setSelectSbi] = useState(null)
  const [selectAxis, setSelectAxis] = useState(null)
  const [selectKmb, setSelectKmb] = useState(null)

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const isFormValid = cardNumber.trim() !== '' && expiryDate.trim() !== '' && cvv.trim() !== '';

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

  const onClickPayNow = () => {
    navigate("/order-detail", { state: { all_product: all_product, cartItems: cartItems } })
    setCartItems({})
  }

  return (
    <div className='payment_option'>
      <div className='payment_UPI'>
        <div>
          <input name='upi' type="radio" checked={selectedPaymentOption === 'upi'} onChange={(e) => onSelectRadio(e)} style={{ cursor: "pointer" }} />
        </div>
        <div>
          <img src={upi_img} alt="" style={{ height: "24px", width: "24px" }} />
        </div>
        <p style={{ marginBottom: "10px", fontSize: "17px" }}>UPI</p>
      </div>
      {selectedPaymentOption === 'upi' && <div className='payment_UPI_options' >
        <label htmlFor="">Choose an option</label>
        <div style={{ display: "flex" }}>
          <input type="radio" name="phonepe" checked={selectPhonepe === 'phonepe'} onChange={(e) => onSelectInnerRadio(e)} style={{ cursor: "pointer" }} id="" /> <p>PhonePe</p>
        </div>
        <div style={{ display: "flex" }}>
          <input type="radio" name="upi_id" checked={selectUpiId === 'upi_id'} onChange={(e) => onSelectInnerRadio(e)} style={{ cursor: "pointer" }} id="" /> <p>Your UPI ID</p>
        </div>
        <button onClick={selectPhonepe === 'phonepe' || selectUpiId === 'upi_id' ? onClickPayNow : null} className='payment_button' style={{ backgroundColor: selectPhonepe === 'phonepe' || selectUpiId === 'upi_id' ? "blue" : "gray", cursor: "pointer" }}  >PAY ₹{getTotalCartAmount()}</button>
      </div>}
      <hr />
      <div className='payment_wallets'>
        <div>
          <input type="radio" name='wallet' checked={selectedPaymentOption === 'wallet'} onChange={(e) => onSelectRadio(e)} style={{ cursor: "pointer" }} />
        </div>
        <div>
          <img src={wallet_img} alt="" style={{ height: "24px", width: "24px" }} />
        </div>
        <p style={{ marginBottom: "10px", fontSize: "17px" }}>Wallets</p>
      </div>
      {selectedPaymentOption === 'wallet' && <div className='payment_wallet_option'>
        <div style={{ display: "flex" }}>
          <input type="radio" name="phonepe_wallet" checked={selectPhonepe === 'phonepe_wallet'} onChange={(e) => onSelectInnerRadio(e)} style={{ cursor: "pointer" }} id="" /> <p>Phonepe Wallet</p> <br />
        </div>
        <div style={{ display: "flex" }}>
          <input type="radio" name="paytm_wallet" checked={selectUpiId === 'paytm_wallet'} onChange={(e) => onSelectInnerRadio(e)} style={{ cursor: "pointer" }} id="" /> <p>Paytm Payments Bank Wallet</p> <br />
        </div>
        <button onClick={selectPhonepe === 'phonepe_wallet' || selectUpiId === 'paytm_wallet' ? onClickPayNow : null} className='payment_button' style={{ backgroundColor: selectPhonepe === 'phonepe_wallet' || selectUpiId === 'paytm_wallet' ? "blue" : "gray", cursor: "pointer" }} >PAY ₹{getTotalCartAmount()}</button>
      </div>}
      <hr />
      <div className='payment_C_D_ATM'>
        <div className='payment_C_D_ATM_input'>
          <input type="radio" name='cdatm' checked={selectedPaymentOption === 'cdatm'} onChange={(e) => onSelectRadio(e)} style={{ cursor: "pointer" }} id='' />
          <div style={{ fontSize: "17px" }}>Credit/Debit/ATM Card</div>
        </div>
        {selectedPaymentOption === 'cdatm' && <div className='payment_C_D_ATM_option'>
          <input type="text" placeholder='Enter Card Number' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          <div className='payment_C_D_ATM_inputbtn' >
            <input type="text" placeholder="Valid thru" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} /> <input type="text" placeholder="CVV" style={{ padding: "16px" }} value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </div>
          <button onClick={onClickPayNow} className='payment_button' disabled={!isFormValid} style={{ backgroundColor: cardNumber && expiryDate && cvv ? "blue" : "gray", cursor: "pointer" }}>PAY ₹{getTotalCartAmount()}</button>
        </div>}
        <p>Add and secure cards as per RBI guidelines</p>
      </div>
      <hr />
      <div className='payment_net_Banking'>
        <div className='payment_title'>
          <input type="radio" name='banking' checked={selectedPaymentOption === 'banking'} onChange={(e) => onSelectRadio(e)} style={{ cursor: "pointer" }} />
          <p>Net Banking</p>
        </div>
        {selectedPaymentOption === 'banking' && <div className='bank_detail'>
          <div className='popular_banks'>
            <p>Popular Banks</p>
          </div>
          <div className='bank_names' >
            <div>
              <input type="radio" name='hdfc' checked={selectHdfc === 'hdfc'} onChange={(e) => onSelectBank(e)} style={{ cursor: "pointer" }} />
              <img src={hdfc_img} alt="" style={{ height: "16px", verticalAlign: "middle" }} />
              <p>HDFC Bank</p>
            </div>
            <div>
              <input type="radio" name='icici' checked={selectIcici === 'icici'} onChange={(e) => onSelectBank(e)} style={{ cursor: "pointer" }} />
              <img src={icici_img} alt="" />
              <p>ICICI Bank</p>
            </div>
            <div>
              <input type="radio" name='sbi' checked={selectSbi === 'sbi'} onChange={(e) => onSelectBank(e)} style={{ cursor: "pointer" }} />
              <img src={sbi_img} alt="" />
              <p>State Bank of India</p>
            </div>
            <div>
              <input type="radio" name='axis' checked={selectAxis === 'axis'} onChange={(e) => onSelectBank(e)} style={{ cursor: "pointer" }} />
              <img src={axis_img} alt="" />
              <p>Axis Bank</p>
            </div>
            <div>
              <input type="radio" name='kmb' checked={selectKmb === 'kmb'} onChange={(e) => onSelectBank(e)} style={{ cursor: "pointer" }} />
              <img src={kmb_img} alt="" />
              <p>Kotak Mahindra Bank</p>
            </div>
          </div>
          <button onClick={selectHdfc === 'hdfc' || selectIcici === 'icici' || selectSbi === 'sbi' || selectAxis === 'axis' || selectKmb === 'kmb' ? onClickPayNow : null} className='payment_button' style={{ marginLeft: "33px", backgroundColor: selectHdfc === 'hdfc' || selectIcici === 'icici' || selectSbi === 'sbi' || selectAxis === 'axis' || selectKmb === 'kmb' ? "blue" : "gray", cursor: "pointer" }}>PAY ₹{getTotalCartAmount()}</button>
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
          <button onClick={onClickPayNow} className='payment_button' style={{ cursor: "pointer" }} >PAY ₹{getTotalCartAmount()}</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage