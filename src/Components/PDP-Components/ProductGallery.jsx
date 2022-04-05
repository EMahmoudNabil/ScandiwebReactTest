import React, { Component } from "react";

class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageShow: "",
    };
  }
  // changing image in image gallery on click
  getImageSource(e) {
    this.setState({
      imageShow: e.target.src,
    });
  }
  render() {
    const { product } = this.props;
    const imageShow = this.state.imageShow;
    return (
      <div className="image-gallery">
      {/* show the collection  of image in side left */}
        <div className="image-gallery_images">
          {product.gallery
            ? product.gallery.map((image, index) => (
                <div key={index}>
                  <img
                    onClick={(e) => this.getImageSource(e)}
                    src={image}
                    alt="img detail"
                  />
                </div>
              ))
            : null}
        </div>
        {/* show the main image */}
        <div className="image-gallery_show">
          <div>
            {product.gallery ? (
              <img src={imageShow ? imageShow : product.gallery[0]} alt={product.name} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductGallery;
