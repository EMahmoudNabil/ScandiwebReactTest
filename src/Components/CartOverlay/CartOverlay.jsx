import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "./CartItems";
import emptyCartImg from "../../assets/images/Empty Cart.png";

class CartOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBag: false,
    };
  }


  toggling() {
    if (!this.state.showBag) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    this.setState(prev => ({
      ...prev,
      showBag: !this.state.showBag,
      
    }));
  }

  
  // hide cart when click outside the cart 
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.toggling(e);
    }
  };
  render() {
    const { cart } = this.props;
    const showBag = this.state.showBag;
    let totalCartQuantity = 0
    // getting the cart quantity 
    cart.map(item=> totalCartQuantity+= item.count)
    return (
      <div
        ref={(cartNode) => {
          this.node = cartNode;
        }}
      >
      {/* cart image and total quantity */}
        <div onClick={() => this.toggling()}>
          <div>
            <img src={emptyCartImg} alt="cartImg" />
          </div>
          <div className="cart-notification">
            <p>{totalCartQuantity}</p>
          </div>
        </div>
      {/* item cart  */}
        <CartItems cart={cart} showBag={showBag} />
        </div>
        
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartOverlay);
