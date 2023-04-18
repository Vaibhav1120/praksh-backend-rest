import  express from 'express';

const router=express.Router();

// import {orderDetails} from "../controllers/orderController.js"
const con=require('../controllers/orderController')

router.route("/").post(con.orderDetails);
router.route("/").get(con.orders);

module.exports=router;
