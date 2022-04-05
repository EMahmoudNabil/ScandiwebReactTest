import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartButton extends Component {
  render() {
    const { text } = this.props;
    // its a button for the view cart Bag and checkout buttons and redirects to the cart page
    return (
      <Link
        to={"/cart"}
        className={
          text === "VIEW BAG"
            ? "cart-button cart-bag-button"
            : "cart-button checkout-button"
        }
      >
        {text}
      </Link>
    );
  }
}
