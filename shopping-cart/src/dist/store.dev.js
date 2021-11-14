"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _productReducers = require("./reducers/productReducers");

var _cartReducers = require("./reducers/cartReducers");

var _orderReducers = require("./reducers/orderReducers");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};
var composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION__COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  products: _productReducers.productsReducers,
  cart: _cartReducers.cartReducer,
  order: _orderReducers.orderReducer
}), initialState, composeEnhancer((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;