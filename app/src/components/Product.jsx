import "../styles/Product.css";
import { Link } from "react-router-dom"

export function Product({ product, addProduct }) {
  return (
    <div className="product-container">
      <figure className="image-container">
        <img src={`${product.imageUrl}`} alt={`${product.description}`} />
      </figure>
      <div className="description-container">
        <Link to={`/api/products/${product.id}`} className="link-product-detail">
          <h2>
            {product.description} ${product.price}
          </h2>
        </Link>
      </div>
      <div className="btn-container">
        <button className="btn-add" onClick={() => addProduct(product)}>
          Add to Cart{" "}
          <span className="material-symbols-outlined icon-link-card">
            shopping_cart
          </span>
        </button>
      </div>
    </div>
  );
}
