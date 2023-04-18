import Order from "../models/Order.js"
 import bigPromise from "../middlewares/bigPromise";


exports.orders=async(req,res)=>{
    const orders=await Order.find();
    

    if(orders){
        return res.status(201).json({
            "order":orders
        })
    }
}

exports.orderDetails=async(req,res)=>{
    const menuId=req.body.id
    console.log(menuId)
    totalPrice=0;
 
 
    const orders = await Order.create({
          menuId,
          totalPrice
     })

     console.log(orders)

       return res.status(201).json({
            data:orders
        }) 
    

}