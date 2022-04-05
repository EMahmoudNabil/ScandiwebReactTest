import React, { Component } from "react";
import AttributeDetails from "./AttributeDetails";
import ProductOptions from "./ProductOptions";

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      isDisabled: true,
      product: { ...this.props.product, count: 1, selectedOptions: [] },
      optionsSelected: false,
    };
  }
// handling user selected options
  handleActive(e, attributeName, item) {
    // user selected option
    const optionName = e.target.innerText;
    this.setState((prevState) => ({
      product: {
        ...this.props.product,
        count: 1,
        totalPrice: 0,
        selectedOptions: [
          ...prevState.product.selectedOptions,
          {
            [attributeName]:
              attributeName === "Color" ? item.value : optionName,
          },
        ],
      },
    }));
    // checking if the product attribute is a 'Color' attribute
    if (attributeName === "Color") {
      e.target.classList.add("selected-color", "selected-option");
      // getting all 'Color' options
      const attributesItems = Array.from(
        document.getElementsByClassName(attributeName)
      );
      attributesItems.map((attributesItem) => {
        const optionColor = attributesItem.style.backgroundColor;
        const userPickedColor = e.target.style.backgroundColor;
        if (optionColor !== userPickedColor) {
          attributesItem.classList.remove("selected-color", "selected-option");
        }
        return attributesItem
      });
    } else {
      e.target.classList.add("selected", "selected-option");
      const attributesItems = Array.from(
        document.getElementsByClassName(attributeName)
      );
      attributesItems.map((attributesItem) => {
        const optionName = e.target.innerText;
        if (attributesItem.innerText !== optionName) {
          attributesItem.classList.remove("selected", "selected-option");
        }
        return attributesItem
      });
    }

    this.checkUserSelection();
  }
  checkUserSelection() {
    // adding user selected options to product object
    const userSelection = Array.from(
      document.getElementsByClassName("selected-option")
    );
    const attribute = this.props.product.attributes;
    if (userSelection.length === attribute.length) {
      this.setState(() => ({ optionsSelected: true }));
    }
  }

  checkAttributes() {
    let sizes = this.state.sizes;
    const sizesLength = sizes.length;
    let selectedCount = 0;
    sizes.map(size => {
      return size.items.map(item => item.selected && ++selectedCount)
    });
    if (sizesLength === selectedCount) {
      this.setState(prev => ({
        ...prev,
        isDisabled: false
      }))
    }
  }

  setSize(name, size, product) {
    product.attributes.sizes.map(element => {
      element.attributes.items.map(item => {
        if (item.value === size && name === element.name) {
          item.selected = true;
        }
        if (name === element.name && item.value !== size) {
          item.selected = false;
        }
        return item;
      })
      return element;
    });
    this.checkAttributes();
    this.setState(prev => ({
      ...prev,
      sizes: product.sizes,
    }))
  }


  makeStyle(name, value, selected) {
    return {
      backgroundColor: name === 'Color' ? value : selected && "#1D1F22",
      transform: name === 'Color' && selected && "scale(0.8)",
      width: name === 'Capacity' && '63px',
      color: name === 'capacity' && "#FFFFFF",
    }
  }

  render() {
    const {  sizes  } = this.state;
    const { product } = this.props;
    const hasAttributes = product.attributes ? product.attributes.length : <p>Without attributes</p>;
    return (
      <div className="size-swatch">
        <ProductOptions attributes={product.attributes} handleActive={this.handleActive.bind(this)} />
       
        <AttributeDetails
          prices={product.prices}
          inStock={product.inStock}
          optionsSelected={
            hasAttributes === 0 ? true : this.state.optionsSelected
          }
          product={
            hasAttributes === 0 ? this.props.product : this.state.product
          }
        />
      </div>
    );
  }
}

export default ProductAttributes;
