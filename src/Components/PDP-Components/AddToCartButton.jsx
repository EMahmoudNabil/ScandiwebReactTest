import React, { Component } from "react";
import { connect } from "react-redux";
import addToCart from "../../redux/actions/addToCart";
import increaseProductCount from "../../redux/actions/increaseProductCount";

class AddToCartButton extends Component {
  
  
  // adding user selected product to cart
    addToBag() {
        const { dispatch, cart,product,inStock,optionsSelected,attributes } = this.props;
       //avoid repeating products in cart
        if (!cart.some(item => item.id === product.id) && optionsSelected && inStock) {
          if(attributes.name===cart.selectedOptions){
            dispatch(addToCart(product))  
          }
          else{
            dispatch(increaseProductCount(product.id));
          }
          
        }
        else{
          // dispatch(addToCart(product))
          dispatch(increaseProductCount(product.id));
        }
      }
  render() {
      const {inStock, optionsSelected} = this.props
    return (
      <>
        <button
          className="addToCart"
          style={{
            backgroundColor: inStock ? "#5ECE7B" : "#A6A6A6",
            cursor:
              inStock && optionsSelected 
                ? "pointer"
                : "not-allowed",
          }}
          onClick={() => this.addToBag()}
        >
          {inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      cart: state.cart,
      selectedCurruncy: state.selectedCurruncy,
    };
  };

export default connect(mapStateToProps)(AddToCartButton)