import React, { Component } from "react";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
import CartButton from "./CartButton";

export default class CartItems extends Component {
  render() {
    const { cart, showBag } = this.props;
   
    return (
      <div
        className="cart-overlay"
        style={{ display: showBag ? "block" : "none" }}
      >
        {/* title cart */}
        <div>
        <p className="cart-title">
          <strong>My Bag,</strong> {cart.length}
          {cart.length > 1 ? " items" : " item"}
        </p>
        </div>
        {/* items cart */}
        {cart ? (
          <ul>
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </ul>
        ) : null}
        {/* total price */}
        <TotalPrice />
        <div className="dflex">
          <CartButton text="VIEW BAG" />
          <CartButton text="CHECKOUT" />
        </div>
      </div>
    );
  }
}
