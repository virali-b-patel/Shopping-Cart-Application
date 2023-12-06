import React from 'react'
import "./Popular.css"
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {

  const newData = data_product.splice(0, 4)

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {newData.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular