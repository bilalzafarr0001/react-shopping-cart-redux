"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearorder = exports.createorder = void 0;

var _type = require("../type");

var createorder = function createorder(order) {
  return function (dispatch) {
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      dispatch({
        type: _type.CREATE_ORDER,
        payload: {
          data: data
        }
      });
      localStorage.clear("cartItems");
      dispatch({
        type: _type.CLEAR_CART
      });
    });
  };
};

exports.createorder = createorder;

var clearorder = function clearorder() {
  return function (dispatch) {
    dispatch({
      type: _type.CLEAR_ORDER
    });
  };
};

exports.clearorder = clearorder;