import React, { Component } from "react";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

export default class ImgSlider extends Component {
  render() {
      const {imgSlider} = this.props
    return (
      <div className="img-slider">
        <div onClick={() => imgSlider("prev")}>
          <img src={leftArrow} alt="" />
        </div>
        <div onClick={() => imgSlider("next")}>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    );
  }
}
