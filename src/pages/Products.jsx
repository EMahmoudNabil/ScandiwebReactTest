import React, { Component } from "react";
import { getProducts } from "../Garphql/queries";
import "../assets/styles/productsStyles.scss";
import Product from "../Components/products/Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: this.props.match.params.id,
    };
  }
  //  fetch data from graphql
  fetchData(id) {
    this.props.client
      .query({
        query: getProducts(id),
      })
      .then((result) => {
        this.setState({
          products: result.data.category.products,
        });
      });
  }
  componentDidMount() {
    console.log(this.props);
    this.fetchData(this.props.match.params.id);
  }

  //  when user Click another category update data
  componentDidUpdate() {
    if (this.state.id !== this.props.match.params.id) {
      this.fetchData(this.props.match.params.id);
      this.setState({
        id: this.props.match.params.id,
      });
    }
  }

  render() {
    const products = this.state.products;
    // category name 
    const categoryName = this.state.id.toUpperCase() ;

    return (
      <div className="container">
        <h1 className="category-name">{categoryName}</h1>
        <div className="products-wrapper">
          {products.map((product) => (
            <Product key={product.id} product={product} id={this.state.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
