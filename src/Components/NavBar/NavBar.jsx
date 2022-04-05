import React, { Component } from "react";
import { getCategoriesAndCuruncies } from "../../Garphql/queries";
import '../../assets/styles/Navbar.styles.scss'
import logo from "../../assets/images/logo.png";
import CurruncyDropDown from "../Curruncy_Switcher_Components/Curruncy_Switcher";
import CartOverlay from "../CartOverlay/CartOverlay";
import ProductCategories from "./ProductCategories";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curuncies: [],
      categories: [],
    };
  }
// get curruncies and categories from graphql
  componentDidMount() {
    this.props.client
      .query({
        query: getCategoriesAndCuruncies,
      })
      .then((result) => {
        this.setState({
          curuncies: result.data.currencies,
          categories: result.data.categories,
        });
      });
  }
  render() {
    const currncies = this.state.curuncies;
    const categories = this.state.categories;
    return (
      <div className=" nav-container">
        <div className="nav-links">
          <ProductCategories categories={categories}/>
        </div>

        <img className="logo-img" src={logo} alt="logo" />

        <div className="cart-and-currency">
          <CurruncyDropDown currncies={currncies} />
          <CartOverlay/>
        </div>
      </div>
    );
  }
}

export default NavBar;
