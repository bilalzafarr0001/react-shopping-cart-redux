"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsReducers = void 0;

var _type = require("../type");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productsReducers = function productsReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type.FETCH_PRODUCTS:
      return {
        items: action.payload,
        filteredItems: action.payload
      };

    case _type.FILTER_PRODUCTS_BY_SIZE:
      return _objectSpread({}, state, {
        size: action.payload.size,
        filteredItems: action.payload.items
      });

    case _type.ORDER_PRODUCTS_BY_PRICE:
      return _objectSpread({}, state, {
        sort: action.payload.sort,
        filteredItems: action.payload.items
      });

    default:
      return state;
  }
};

exports.productsReducers = productsReducers;