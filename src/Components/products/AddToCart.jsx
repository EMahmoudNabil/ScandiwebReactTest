import React, { Component } from "react";
import cartIcon from "../../assets/images/Vector.png";
import addToCart from "../../redux/actions/addToCart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInCart: { 
        ...this.props.product,
        count: 1 , 
        selectedOptions: [] 
      },
    };
  }
  addToCarts(e, product) {
    e.preventDefault();
    //adding user selected options to product object
      const selectedOptions = product.attributes.map((attr) => {
      const attributeName = attr.name;
      const attributeValue = attr.items[0].value;
      const option = { [attributeName]: attributeValue };
      return option;
    });
    this.setState(
      () => ({
        productInCart: {
          ...product,
          count: 1,
          totalPrice: 0,
          selectedOptions: [...selectedOptions],
        },
      }),
      () => this.addProductToCart()
    );
  }
  //adding selected product to cart
  addProductToCart() {
    const { dispatch, cart } = this.props;
    const { productInCart } = this.state;
    
    // repeating products in cart
    if (cart.length > 0) {
      if (!cart.some((item) => item.id === productInCart.id)) {
        dispatch(addToCart(productInCart));
      }
    } else {
      dispatch(addToCart(productInCart));
    }
  }

  render() {
    const { product ,id } = this.props;
    return (
      // <div
      //   onClick={(e) => this.addToCarts(e, product)}
      <Link
        to={`/${id}/${product.id}`}
        className="card-overlay"
        style={{ display: product.inStock ? "" : "none" }}
      >   
        <img src={cartIcon} alt="add to cart icon " />
       
      </Link>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(AddToCart);
