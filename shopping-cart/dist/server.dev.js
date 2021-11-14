"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var shortid = require("shortid");

var app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/react-shopping-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
var Product = mongoose.model("products", new mongoose.Schema({
  _id: {
    type: String,
    "default": shortid.generate
  },
  title: String,
  description: String,
  image: String,
  availableSizes: [String],
  price: Number
}));
var Order = mongoose.model("order", new mongoose.Schema({
  _id: {
    type: String,
    "default": shortid.generate
  },
  email: String,
  name: String,
  address: String,
  total: Number,
  cartItems: [{
    _id: String,
    title: String,
    price: Number,
    count: Number
  }]
}, {
  timestamps: true
}));
app.get("/api/products", function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.find({}));

        case 2:
          products = _context.sent;
          res.send(products);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post("/api/products", function _callee2(req, res) {
  var newProduct, saveProducts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          newProduct = new Product(req.body);
          _context2.next = 3;
          return regeneratorRuntime.awrap(newProduct.save());

        case 3:
          saveProducts = _context2.sent;
          res.send(saveProducts);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app["delete"]("/api/products/:id", function _callee3(req, res) {
  var deleteProduct;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Product.findByIdAndDelete(req.params.id));

        case 2:
          deleteProduct = _context3.sent;
          res.send(deleteProduct);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.post("/api/orders", function _callee4(req, res) {
  var newOrder, order;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!(!req.body.name || !req.body.email || !req.body.address || !req.body.total || !req.body.cartItems)) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt("return", res.send({
            message: " Data is Required !"
          }));

        case 2:
          newOrder = new Order(req.body);
          _context4.next = 5;
          return regeneratorRuntime.awrap(newOrder.save());

        case 5:
          order = _context4.sent;
          res.send(order);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.get("/api/orders", function _callee5(req, res) {
  var orders;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Order.find({}));

        case 2:
          orders = _context5.sent;
          res.send(orders);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("server is running on port 5000");
});