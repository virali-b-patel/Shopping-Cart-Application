import React, { useContext, useEffect, useState } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Items/Item'
import { useLocation } from 'react-router-dom'

const ShopCategory = (props) => {
  console.log(props);
  const { all_product } = useContext(ShopContext)
  const location = useLocation()
  const [showDropdown, setShowDropdown] = useState(false)
  const [sortBy, setSortBy] = useState("all")

  const productHandler = () => {
    if (sortBy === "ascending") {
      return all_product.slice().sort((a, b) => a.new_price - b.new_price);
    } else if (sortBy === "descending") {
      return all_product.slice().sort((a, b) => b.new_price - a.new_price)
    } else {
      return all_product
    }
  }

  useEffect(() => {
    productHandler()
    setShowDropdown(false)
  }, [sortBy])

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        {location.pathname === "/men" && <p>
          <span>Showing 1-12</span> out of 36 products
        </p>}{location.pathname === "/women" && <p>
          <span>Showing 13-24</span> out of 36 products
        </p>}{location.pathname === "/kid" && <p>
          <span>Showing 25-36</span> out of 36 products
        </p>}
        <div className='dropdown-sort'>
          <div className='shopcategory-sort' onClick={() => setShowDropdown(!showDropdown)}>
            <span>Sort by</span><img src={dropdown_icon} alt='' />
          </div>
          {showDropdown && <div className="shopcategory-option" >
            <div onClick={() => setSortBy("ascending")}>Low-High Price</div>
            <div onClick={() => setSortBy("descending")}>High-Low Price</div>
          </div>}
        </div>
      </div>
      <div className='shopcategory-products'>
        {productHandler().map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category} />
          }
          else {
            return null
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory