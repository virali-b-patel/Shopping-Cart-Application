import React, { useState } from 'react'
import '../../../Pages/CSS/BuyNow.css'


const AddressPage = ({ address, onClick }) => {

  const [addressData, setAddressData] = useState({
    name: address.name,
    mobile: address.mobile,
    pincode: address.pincode,
    locality: address.locality,
    address: address.address,
    city: address.city,
    state: address.state,
    addressType: address.addressType,
  });


  const onSaveAndDeliver = () => {

    // Validation logic
    const isPincodeValid = /^\d{6}$/.test(addressData.pincode);
    const isMobileValid = /^\d{10}$/.test(addressData.mobile);

    if (isPincodeValid && isMobileValid) {
      // TODO
      const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
      savedAddresses.push(addressData);
      localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
    } else {
      alert('Invalid pin code or mobile number. Please check and try again.');
    }
    onClick()
  };

  return (
    <div className='address_page' style={{ position: 'relative', padding: '10px 200px', boxShadow: 'none', border: 'none' }}>
      <div className='address_page_detail'>
        <input type='text' placeholder='Name' value={addressData.name} onChange={(e) => setAddressData({ ...addressData, name: e.target.value })} />
        <input type='number' placeholder='10-digit mobile number' value={addressData.mobile} onChange={(e) => setAddressData({ ...addressData, mobile: e.target.value })} />
      </div>
      <div className='address_page_detail'>
        <input type='text' placeholder='Pincode' value={addressData.pincode} onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })} />
        <input type='text' placeholder='Locality' value={addressData.locality} onChange={(e) => setAddressData({ ...addressData, locality: e.target.value })} />
      </div>
      <div className='address_page_detail'>
        <textarea type='text' placeholder='Address(Area and Street)' value={addressData.address} onChange={(e) => setAddressData({ ...addressData, address: e.target.value })} />
      </div>
      <div className='address_page_detail'>
        <input type='text' placeholder='City/District/Town' value={addressData.city} onChange={(e) => setAddressData({ ...addressData, city: e.target.value })} />
        <input type='text' placeholder='State' value={addressData.state} onChange={(e) => setAddressData({ ...addressData, state: e.target.value })} />
      </div>
      <div className='address_page_addresstype'>
        <p>Address Type</p>
        <input
          type='radio'
          name='Home'
          checked={addressData.addressType === 'Home'}
          value={addressData.addressType}
          onChange={() => {
            setAddressData({ ...addressData, addressType: 'Home' });
          }}
        />
        <label>Home(All day delivery)</label>
        <input
          type='radio'
          name='Work'
          value={addressData.addressType}
          checked={addressData.addressType === 'Work'}
          onChange={() => {
            setAddressData({ ...addressData, addressType: 'Work' });
          }}
        />
        <label>Work(Delivery between 10 AM - 5 PM)</label>
      </div>
      <div>
        <button onClick={onSaveAndDeliver}>SAVE AND DELIVER HERE</button>
      </div>
    </div>
  )
}

export default AddressPage