import React, { Component } from 'react'

export default class ProductOptions extends Component {
  render() {
    const {attributes,handleActive} = this.props
    return (
     <>
     {attributes
          ? attributes.map((attribute) => (
          <div key={attribute.id}>
          <p className="attribute-name">
            {attribute.name.toUpperCase()}:
          </p>
          <div className="product-attributes">
            {attribute.items.map((item) => (
              <div
                className={`${attribute.name} product-attributes_size`}
                key={item.id}
                onClick={(e) =>
                  handleActive(e, attribute.name, item)
                }
                style={{
                  backgroundColor:
                    attribute.name === "Color" ? item.value   : item.selected && "#1D1F22",
                    transform: 
                     attribute.name === 'Color' && item.selected && "scale(0.8)",
                }}
              >
                {attribute.name === "Color" ? "" : item.value}
              </div>
            ))}
          </div>
        </div>
              ))
            : null}
     </>
    )
  }
}
