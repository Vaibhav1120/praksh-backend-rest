import User from "../models/User.js";
import {cookieToken} from "../utils/cookieToken.js";
import {mailHelper} from "../utils/mailHelper"
import bigPromise from "../middlewares/bigPromise";
import crypto from "crypto";
//const crypto = require("crypto");




export const createUser = bigPromise(async(req,res,next)=>
{
    const {user_name , email , phoneNumber ,password} = req.body;

    console.log(req.body);

    if((!user_name) || (email) || (phoneNumber) || (password))
    {
       return res.status(400).json({

      success: false,
      message: "All fields are required!"

       })
    }

     const user = await User.create({

        user_name,
        email,
        phoneNumber,
        password
     })

     return res.status(201).json({

         success: true,
         message: "User created successfully",
         data: user
     })

})


export default login = bigPromise(async(req,res,next) =>{

    const {email,password} = req.body;

    if((!email) || (!password))
    {
        return res.status(400).json({
        message: "You have not entered email or password"

        })
    }

    const existingUser = await User.findOne({

        email:email
    }).catch(err => {
        console.log(err);
    })

    if(!existingUser)
    {
        return res.status(501).json({
            success: true,
             message: "You have to register in our application",
        })
    }

    const ispasswordCorrect = await existingUser.isValidatedPassword(password , existingUser.password)

    if(!ispasswordCorrect)
    {
        return res.status(401).json({

             success: false,
             message: "Incorrect Password",
        })
    }

    return res.status(200).json({

        success: true,
        message: "Login Successfully",
    });


})


export const logout = bigPromise(async(req,res,next) =>{

      res.cookie('token' , null , {

        expires: new Data(Data.now()),
        httpOnly: true       

      })

      res.status(200).json({
       success: true,
       message: "loggedOut Successfully"

      })
});

export const updateUserDetails = bigPromise(async(req,res,next) =>{

       const newData = {

         user_name : req.body.name,
         email : req.body.email
       }

       const updated = await User.findByIdAndUpdate(req.user.id , newData , {

        new: True,
        runValidator: True,
        useModifyandUpdate: false

       });

       res.status(200).json({

         success: true,
         updated

       })
});