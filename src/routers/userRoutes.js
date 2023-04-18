//import express from 'express';
import express from "express";

import router from express.Router()

const app = express();

//import controllers

import {createUser} from "../controllers/userController.js";
import {login} from "../controllers/userController.js";
import {forgetPassword} from "../controllers/userController";

router.route("/login").post(login);
router.route("/signup").post(createUser);
router.route("/forgetpassword").post(forgetPassword);



app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] }));

  app.get("/auth/google/home", 
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

export default router;