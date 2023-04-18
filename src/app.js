import express from "express";
import bodyParser from "body-parser";
import https from "https";
import mongoose from 'mongoose';
import mongo_url from 'mongodb://localhost:27017/restaurantDB';
import menuRouters from "./routers/menuRoutes.js";
import orderRouters from "./routers/orderRoutes.js";
import userRouters from "./routers/userRoutes.js";
const app = express();

// mongoose.connect(mongo_url);
const url = "mongodb+srv://prkskrs:1JRRLP0TScJtklaB@cluster0.fncdhdb.mongodb.net/testPropssDB?retryWrites=true&w=majority"
const db = mongoose.connect(url,{
   useNewUrlParser:true,
   useUnifiedTopology:true
}).then(console.log("Connected to db"))


 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json());

 // const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb4e5d8472824ab818f13ff590a28bae&units=metric";
//
 //app.get("/", function(req, res)
 //{
 //   //response.send("Hello How are you ?? ");
 //   //console.log(__dirname);
//
 //   https.get(url, function(response)
 //   {
 //     console.log(response.statusCode);
//
 //     response.on("data" , function(data)
 //     {
 //        const weatherData = JSON.parse(data)
 //        const temp = weatherData.main.temp
 //        const weatherDescription = weatherData.weather[0].description
 //        const icon = weatherData.weather[0].icon
//
 //        const iconUrl = "http://api.openweathermap.org/img/wn/" +icon+ "@2x.png"
//
 //        res.write("<p> The weather is currently " + weatherDescription + "<p>")
 //        res.write("<h1> The temperature in London is " + temp + " degree Celcius. </h1>")
 //        res.write("<img src=" + iconUrl + ">");
//
 //        res.send()
//
 //     })
 //   })
 //})

 app.use("/addmenu",menuRouters)
 app.use("/order",orderRouters)

 app.post("/register", function(req,res)
 {
   const newUser = new User({
     
       fname : req.body.fname,
       email : req.body.email,
       phone : req.body.phone
   });
   
    newUser.save(function(err){
  
       if(err){
         console.log(err);
       }else{
              res.render("home");
       }


    })
     

    //console.log(fname);
    //console.log(email);
    //console.log(phone);

 });

 app.listen(3000 , function(){

    console.log("Server started at port 3000");
 });