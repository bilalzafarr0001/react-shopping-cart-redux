"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removefromCart = exports.addToCart = void 0;

var _type = require("../type");

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addToCart = function addToCart(product) {
  return function (dispatch) {
    var alreadyExist = false;

    var cartItems = _store["default"].getState().cart.cartItems.slice(); // if(cartItems.length===0){
    //     cartItems.push({ ...product, count:1  }) 
    // }


    cartItems.forEach(function (x) {
      if (x._id === product._id) {
        alreadyExist = true;
        x.count++;
      }
    });

    if (!alreadyExist) {
      cartItems.push(_objectSpread({}, product, {
        count: 1
      }));
    }

    dispatch({
      type: _type.ADD_TO_CART,
      payload: {
        cartItems: cartItems
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

exports.addToCart = addToCart;

var removefromCart = function removefromCart(product) {
  return function (dispatch) {
    var cartItems = _store["default"].getState().cart.cartItems.slice().filter(function (x) {
      return x._id != product._id;
    });

    dispatch({
      type: _type.REMOVE_FROM_CART,
      payload: {
        cartItems: cartItems
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

exports.removefromCart = removefromCart;