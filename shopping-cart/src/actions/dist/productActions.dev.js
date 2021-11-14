"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortProducts = exports.filterProducts = exports.fetchProducts = void 0;

var _type = require("../type");

var fetchProducts = function fetchProducts() {
  return function _callee(dispatch) {
    var res, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("/api/products"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(res.json());

          case 5:
            data = _context.sent;
            dispatch({
              type: _type.FETCH_PRODUCTS,
              payload: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.fetchProducts = fetchProducts;

var filterProducts = function filterProducts(products, size) {
  return function (dispatch) {
    dispatch({
      type: _type.FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items: size === "" ? products : products.filter(function (x) {
          return x.availableSizes.indexOf(size) >= 0;
        })
      }
    });
  };
};

exports.filterProducts = filterProducts;

var sortProducts = function sortProducts(filterProducts, sort) {
  return function (dispatch) {
    var sortedProducts = filterProducts.slice();

    if (sort == "latest") {
      sortedProducts.sort(function (a, b) {
        return a._id > b._id ? 1 : -1;
      });
    } else {
      sortedProducts.sort(function (a, b) {
        return sort === "lowest" ? a.price > b.price ? 1 : -1 : a.price < b.price ? 1 : -1;
      });
    }

    dispatch({
      type: _type.ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: sortedProducts
      }
    });
  };
};

exports.sortProducts = sortProducts;