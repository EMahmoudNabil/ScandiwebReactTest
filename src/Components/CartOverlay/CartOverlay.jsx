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

  // Function show cart Dropdawen
  showCartDropdawen() {
    if (!this.state.showBag) {
      document.addEventListener("click", (e)=>  {
        if (!this.node.contains(e.target)) {
          this.showCartDropdawen();
        }
      });
    } else {
      document.removeEventListener("click", (e)=>  {
        if (!this.node.contains(e.target)) {
          this.showCartDropdawen();
        }
      });
    }
    this.setState((prevState) => ({
      showBag: !prevState.showBag,
    }));
  }
  
  render() {
    const { cart } = this.props;
    const showBag = this.state.showBag;
    let totalCartQuantity = 0
    // getting the cart quantity 
    cart.map(item=> totalCartQuantity+= item.count)
    return (
      <>
      {/* cart image and total quantity */}
        <div onClick={() => this.showCartDropdawen()}>
          <div>
            <img src={emptyCartImg} alt="cartImg" />
          </div>
          <div className="cart-notification">
            <p>{totalCartQuantity}</p>
          </div>
        </div>
      {/* item cart  */}
        <CartItems cart={cart} showBag={showBag} />
      
    </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartOverlay);
