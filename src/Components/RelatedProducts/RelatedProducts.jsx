import "./RelatedProducts.css"
import data_product from "../Assets/data"
import Item from '../Items/Item'

const RelatedProducts = (props) => {

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
