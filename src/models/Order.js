import mongoose from "mongoose"
 import crypto from "crypto";
 import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";


const orderSchema = new mongoose.Schema({
  menuId: {
    type: mongoose.Types.ObjectId,
    ref: "Menu",
  },

  totalPrice: {
    type: Number,
    //unique: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;