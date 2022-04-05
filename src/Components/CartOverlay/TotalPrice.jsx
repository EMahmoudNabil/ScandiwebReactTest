import React, { Component } from "react";
import { connect } from "react-redux";

class TotalPrice extends Component {
  render() {
    const { cart, selectedCurruncy } = this.props;
    let total = 0;
    
    // calculate the total price in the cart
    const totalPrice = cart.map(
      (item) =>
        (item.totalPrice =
          item.prices.filter(
            (price) => price.currency.symbol === selectedCurruncy
          )[0].amount * item.count)
    );
    totalPrice.map((itemPrice) => (total += itemPrice));
    return (
      <div className="items-total-price">
        <span className="total">Total</span>
        <span className="totalAmount">{`${selectedCurruncy}${total.toFixed(0)}`}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    selectedCurruncy: state.selectedCurruncy,
  };
};

export default connect(mapStateToProps)(TotalPrice);
