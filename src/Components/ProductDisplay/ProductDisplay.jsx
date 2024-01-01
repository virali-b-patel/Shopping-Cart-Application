import React, { useContext, useState, useEffect } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate, useParams } from 'react-router-dom'
import shopping_cart from '../Assets/shopping-cart.svg'

const ProductDisplay = (props) => {

  const navigate = useNavigate()
  const { productId } = useParams();
  const { product } = props
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"]

  const handleSizeClick = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleAddToCartClick = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart");
    } else if (cartItems[productId]) {
      removeFromCart(productId)
      setSelectedSize(null)
    } else {
      addToCart(productId)
    }
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart");
    } else {
      addToCart(productId)
      navigate("/buy")
    }
  }

  const isItemInCart = cartItems[productId] > 0;

  useEffect(() => {
    setSelectedSize(null)
  }, [])

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">A lightweight, usually knitted, pullover shirt, close-ftting and with a round neckline and short sleeves, worn as an undershirt or outer garment. </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {sizes.map((size, index) => <div key={index} onClick={() => handleSizeClick(size)} style={{
              border: `2px solid ${size === selectedSize ? "blue" : "gray"}`,
            }}>{size}</div>)}
          </div>
        </div>
        <button onClick={handleAddToCartClick} style={{ backgroundColor: isItemInCart ? "red" : "orange" }} ><img src={shopping_cart} alt="" style={{ marginInline: "8px" }} />{isItemInCart ? "REMOVE FROM CART" : "ADD TO CART"}</button>
        <button onClick={handleBuyNow} style={{ background: "#fb641b" }}>BUY NOW</button>
        <p className="productdisplay-right-category"><span>Category : </span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay