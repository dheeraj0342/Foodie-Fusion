import orderModel from '../models/orderModel.js';

const listOrders = async (req ,res) =>{
    try {
        const orders = await orderModel.find({});
        res.status(200).json({success:true,data:orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const userOrders = async (req ,res) =>{
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.status(200).json({success:true,data:orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {listOrders,userOrders}