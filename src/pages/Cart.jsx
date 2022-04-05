import React, { Component } from 'react'
import CartItem from '../Components/CartOverlay/CartItem'
import '../assets/styles/cartBag.scss';
import { connect } from 'react-redux'

class Cart extends Component {
  render() {
    const { cart } = this.props
    return (
      <div className='container cart-bag'>
        <h1>CART</h1>
        {cart.length > 0 && cart ? (
          <ul>
            {cart.map((item, index) => (
              <CartItem item={item} key={index}/>
            ))}
          </ul>
        ) : <h2 >There is no item in Cart</h2>}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    cart:state.cart
  }
}

export default connect(mapStateToProps)(Cart)
