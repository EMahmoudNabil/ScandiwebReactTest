import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/Navbar.styles.scss'


class ProductCategories extends Component {
    render() {
        const {categories} = this.props
        return (
            <ul>
            {categories.map((category) => (
              <li key={category.name}>
                <NavLink
                  to={`/${category.name}`}
                  className={({isActive})=>"nav-link"+(
                  isActive ? 
                  "headerBtnActive" :
                   "headerBtnUnActive" )
                  }
                  id={category.name}
                >
                <label className='btnHeader'> {category.name.toUpperCase()}</label> 
                </NavLink>
              </li>
            ))}
          </ul>
        );
    }
}

export default ProductCategories;