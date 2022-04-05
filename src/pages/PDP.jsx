import React, { Component } from "react";
import { getProductByID } from "../Garphql/queries";
import ProductAttributes from "../Components/PDP-Components/ProductAttributes";
import ProductGallery from "../Components/PDP-Components/ProductGallery";
import "../assets/styles/productDescription.scss";
import ProductTitle from "../Components/PDP-Components/ProductTitle";
import parse from 'html-react-parser';

class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.productId,
      product: {},
    };
  }
  //  fetch data from graphql
  fetchData(id) {
    this.props.client
      .query({
        query: getProductByID(id),
      })
      .then((result) => {
        this.setState({
          product: result.data.product,
        });
      });
  }
  componentDidMount() {
    this.fetchData(this.state.id);
  }

  render() {
    const product = this.state.product;

    return (
      <>
        <div className="container product-details-wrapper">
          <ProductGallery product={product} />
          <div className="product-details">
            <ProductTitle productName={product.name} />
            <ProductAttributes product={product} client={this.props.client} />
            {product.description ? (
              <div
                className="product-description"
              >
                 {parse(`${product.description }`)}
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default PDP;
