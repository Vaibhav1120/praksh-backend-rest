import mongoose from "mongoose";
import Validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({

 user_name: {

    type: String,
    maxlength: [80 , "Name of user should not be more then 80 characters."] 
 },

 email: {

    type: String,
    required: [true , 'please provide your email'],
    validate: [validator.isEmail,'please emter you emial in correct format'],
    unique: true
 },

 phoneNumber: {
    type: Integer,
    required: [true, 'plaese provide your phone number'],
    unique: true
 },

 password:{
    type: String,
    minLength: [6, 'password should not be less then 6 words']
 },

 googleId :{
       type: String,
       unique: true
 }


})


const User = mongoose.model("User", userSchema)
export default User;