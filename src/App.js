import React, { Component } from "react";
import Products from "./pages/Products";
import PDP from "./pages/PDP.jsx";
import NavBar from "./Components/NavBar/NavBar";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { client } from "./Garphql/client";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
    }
    this.showModal= this.showModal.bind(this);
    this.closeModal= this.closeModal.bind(this);
  }
  showModal(){
    this.setState({show:true})
  }
  closeModal(){
    this.setState({show:false})
  }
  render() {
    return (
     
          <>
            <NavBar client={client} showModal={this.showModal} />
            <Switch>
              <Route exact path="/">
                {<Redirect to="/all" />}
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>             
              <Route
                exact
                path="/:id"
                render={(props) => <Products client={client} {...props} />}
              />
              <Route
                exact path="/:id/:productId"
                render={(props) => (
                  <PDP client={client} {...props} />
                )}
              />
            </Switch>
          </>
      
    );
  }
}
