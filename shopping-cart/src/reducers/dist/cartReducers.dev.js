"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartReducer = void 0;

var _type = require("../type");

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || "[]"
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type.ADD_TO_CART:
      return {
        cartItems: action.payload.cartItems
      };

    case _type.REMOVE_FROM_CART:
      return {
        cartItems: action.payload.cartItems
      };

    default:
      return state;
  }
};

exports.cartReducer = cartReducer;