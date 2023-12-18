import "./RelatedProducts.css"
import all_product from "../Assets/all_product"
import Item from '../Items/Item'

const RelatedProducts = (props) => {

  function getProductsByCategory(all_product, category) {
    const productsInCategory = all_product.filter(product => product.category === category);
    return productsInCategory.slice(0, 4);
  }

  const relatedProducts = getProductsByCategory(all_product, props.category);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} category={item.category} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
