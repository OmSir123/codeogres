const mongoose = require("mongoose");

const Orderscema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 },
    },
  ],
});
