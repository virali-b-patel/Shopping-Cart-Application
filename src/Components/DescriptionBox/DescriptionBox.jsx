import React, { useState } from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {

  const [showDescription, setShowDescription] = useState("description")

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className={`descriptionbox-nav-box ${showDescription === "review" && "fade"}`} onClick={() => setShowDescription("description")}>Description</div>
        <div className={`descriptionbox-nav-box ${showDescription === "description" && "fade"}`} onClick={() => setShowDescription("review")}>Reviews (122)</div>
      </div>
      {showDescription === "description" && <div className="descriptionbox-description">
        <p>An e-commerce website is an online platfoem that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
        <p>E-commerce websites typically display products or services along with detaied descriptions,images,prices, and any available variations(e.g., size, colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>}
      {showDescription === "review" && <div className="descriptionbox-description"><p>Review</p></div>}
    </div >
  )
}

export default DescriptionBox
