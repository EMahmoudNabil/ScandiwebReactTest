import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import ProductPrice from "./ProductPrice";

class Product extends Component {
  render() {
    const { product, id } = this.props;

    return (
      <Link
        to={`/${id}/${product.id}`}
        className="product-container"
        key={product.id}
      >
        <div
          className={
            product.inStock ? "product-figure" : "product-figure out-of-stock"
          }
        >
          <img
            className="product-image"
            src={product.gallery[0]}
            alt={product.name}
          />
          <AddToCart product={product} />
          <h3>{product.name}</h3>
          <div className="price">
            <ProductPrice prices={product.prices} />
          </div>
        </div>
      </Link>
    );
  }
}

export default Product;
