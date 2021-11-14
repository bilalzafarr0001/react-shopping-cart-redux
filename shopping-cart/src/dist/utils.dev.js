"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatCurrency;

function formatCurrency(num) {
  if (num) return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}