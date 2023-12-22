import React from 'react'
import "./Breadcrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"
import { useNavigate } from 'react-router-dom'

const Breadcrums = (props) => {

  const { product } = props
  const navigate = useNavigate()

  return (
    <div className='breadcrums'>
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>SHOP</div> <img src={arrow_icon} alt='' /> <div onClick={() => navigate(`/${product.category}`)} style={{ cursor: "pointer" }}>{product.category}</div> <img src={arrow_icon} alt='' /> {product.name}
    </div>
  )
}

export default Breadcrums