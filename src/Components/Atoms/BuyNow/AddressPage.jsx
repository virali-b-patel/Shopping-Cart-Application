import React, { useState } from 'react'
import '../../../Pages/CSS/BuyNow.css'


const AddressPage = ({ addressButton, setAddressButton }) => {

  const [selectHomeDelivery, setSelectHomeDelivery] = useState(null)
  const [selectWorkDelivery, setSelectWorkDelivery] = useState(null)

  const onSelectDeliverPlace = (e) => {
    let name = e.target.name
    setSelectHomeDelivery(name)
    setSelectWorkDelivery(name)
  }

  return (
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
  )
}

export default AddressPage