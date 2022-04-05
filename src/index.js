import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {ApolloProvider} from "@apollo/client";
import { client } from "./Garphql/client";
import { BrowserRouter } from "react-router-dom";
import {store ,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';




ReactDOM.render(
  
  <ApolloProvider client={client}>
   <Provider store={store}> 
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
     </BrowserRouter>
    </Provider> 
  </ApolloProvider>
  ,
  document.getElementById("root")
);

