"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderReducer = void 0;

var _type = require("../type");

var orderReducer = function orderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type.CREATE_ORDER:
      return {
        order: action.payload
      };

    case _type.CLEAR_ORDER:
      return {
        order: null
      };

    default:
      return state;
  }
};

exports.orderReducer = orderReducer;