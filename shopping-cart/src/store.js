import {createStore , applyMiddleware,compose ,  combineReducers} from 'redux';
import {productsReducers} from './reducers/productReducers';
import { cartReducer} from './reducers/cartReducers';
import { orderReducer} from './reducers/orderReducers';
import thunk from 'redux-thunk';

const initialState= { };
const composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION__COMPOSE__ || compose ;


const store = createStore( combineReducers({
    products : productsReducers,
    cart: cartReducer,
    order:orderReducer,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);



export default store;

