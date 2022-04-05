import React, { Component } from "react";
import { connect } from "react-redux";
import CurrunciesList from "./CurrunciesList";
import downArrow from "../../assets/images/down-arrow.png";
import upArrow from "../../assets/images/up-arrow.png";

class CurruncyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedOption: "$ USD",
      image: downArrow
    };
    this.showCurunciesList=this.showCurunciesList.bind(this)
    this.toggling = this.toggling.bind(this);
  }
  
  
  toggling() {
    this.setState(prev => ({
      ...prev,
      showModal: !this.state.showModal,
      image: !this.state.showModal ? upArrow : downArrow
    }));
  }



  // show and hide curruncies list on user click
  showCurunciesList = (e) => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  // close the currucies list when user clicks outside the list
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.showCurunciesList();
    }
  };

  render() {
    const { currncies, selectedCurrency } = this.props;
    return (
     <>
     {/* Toggler Currencies List */}
        <div onClick={this.toggling}>
        {currncies[0] && (
          <div className="selected-curruncy">
            <p>{selectedCurrency}</p>{" "}
            <div className='img'>
              <img src={this.state.image} alt='list arrow' />
            </div>
          </div>
        )}
      </div>


        <CurrunciesList
          currncies={currncies}
          showModal={this.state.showModal}
          showCurunciesList={this.showCurunciesList}
        />
     </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.selectedCurruncy,
  };
};

export default connect(mapStateToProps)(CurruncyDropDown);
