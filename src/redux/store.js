import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import curruncyReducer from './reducers/Reducer';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";



const presistConfig = {
    key :'root' ,
    storage ,
    whitelist : ['cart']
 }
 
 export const persistReducers = persistReducer(presistConfig , curruncyReducer);

const middlewares =[logger];
 export const store = createStore(persistReducers , applyMiddleware(...middlewares));
 export const persistor = persistStore (store)

export default (store , persistor) ;