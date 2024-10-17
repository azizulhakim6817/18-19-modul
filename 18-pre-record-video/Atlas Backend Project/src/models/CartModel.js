const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Types.ObjectId, required: true },
    userID: { type: mongoose.Types.ObjectId, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamp: true, versionKey: false }
);

const CartModel = mongoose.model("carts", dataSchema);

module.exports = CartModel;
