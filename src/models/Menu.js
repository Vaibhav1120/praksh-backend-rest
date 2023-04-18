
import mongoose from 'mongoose'
 import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
 import crypto from "crypto";
const menuSchema = new mongoose.Schema({
  dish_name: {
    type: String,
    maxlength: [100, "Dish name should not be more then 100 letters"],
  },

  discription: {
    type: String,
    maxlength: [400, "Dish discription should not be more then 400 words"],
  },

  category: {
    type: String,
    maxlength: [50, "Category should not be more then 50 words"],
  },

  price: {
    type: Number,
  },

  popularity: {
    type: Number,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;