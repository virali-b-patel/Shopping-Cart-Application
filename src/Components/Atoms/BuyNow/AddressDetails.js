import React from 'react'

const AddressDetails = ({ newAddressData, onClickEdit, onDelivery }) => {

  return (
    <div style={{ marginTop: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <input style={{ marginRight: '18px' }} type='radio' name='address' checked={true} />
          <p style={{ fontWeight: 600 }}>{newAddressData?.name}</p>
          <div style={{ background: '#f0f0f0', padding: '3px 6px', borderRadius: '2px', fontSize: '11px', fontWeight: 500, color: '#878787', margin: '0 11px 0 11px' }}>{newAddressData?.addressType}</div>
          <p style={{ fontWeight: 600 }}>{newAddressData?.mobile}</p>
        </div>
        <div onClick={onClickEdit} style={{ color: "#2874f0", fontWeight: 600, cursor: 'pointer' }}>Edit</div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p style={{ fontSize: '15px' }}>{newAddressData?.address + ', ' + newAddressData?.locality + ", " + newAddressData?.city + ", " + newAddressData?.state}<b> - {newAddressData?.pincode}</b></p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p style={{ color: "#ff9f00" }}>Address details insufficient to attempt delivery. Continue with same address?</p>
        <button onClick={onDelivery} style={{ cursor: 'pointer', marginTop: '12px', background: '#fb641b', fontSize: '14px', padding: '16px 40px', border: 'none', color: '#FFF' }}>DELIVERY HERE</button>
      </div>
    </div>
  )
}

export default AddressDetails