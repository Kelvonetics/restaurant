import { Restaurant } from "../models/Restaurant.js";
import { restaurantSchema } from "../schemas/index.js";
import { ObjectId } from 'mongodb';

export const getRestaurants = async(req, res) => {
    try {
        const restaurants = await Restaurant.find()
        .sort({ createdAt: 'desc' });

        if(!restaurants){
            return res.status(404).json({
                success: false, message: "No Restaurant found!"
            })
        }

        res.status(200).json({
            success: true, message: "Restaurant(s) found", data: restaurants
        });       
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}


export const createRestaurant = async(req, res) => {
    const { name, address, phone } = req.body;

    const { error } = restaurantSchema.validate();
    if(error){
        return res.status(400).json({
            success: false, message: error.details[0].message
        });
    }
    try {
        const restaurantExist = await Restaurant.findOne({name});
        if(restaurantExist){
            return res.status(400).json({
                success: false, message: `${name} restaurant already exist`
            });
        }
        const restaurant = new Restaurant({ name, address, phone });
        await restaurant.save();

        res.status(200).json({
            success: true, message: `${name} restaurant created successfully`, data: restaurant
        })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}


export const getRestaurant = async(req, res) => {
    const _id = new ObjectId(req.params?.restaurant_id);  //return console.log("Rest ", _id)
    if(!_id){
        return res.status(400).json({
            success: false, message: "Restaurant ID required"
        });
    }
    
    try 
    {
        const restaurant = await Restaurant.findById({_id});

        if (!restaurant) {
            return res.status(400).json({
                success: false, message: "Restaurant record not found"
            });
        }
        res.status(200).json({
            success: true, message: `${restaurant?.name} restaurant records found`, data: restaurant
        });
    } 
    catch (error) {
        return res.status(400).json({ 
            success: false, message: error.message
         });
    }
}


export const updateRestaurant = async (req, res) => {
    const _id = new ObjectId(req.params.restaurant_id);
    if(!_id){
        return res.status(400).json({
            success: false, message: "Restaurant ID required"
        });
    }

    const { name, address, phone } = req.body;
    //return console.log("RESTAURANT : ", req.body);

    // const { error } = foodSchema.validate(name, address, phone);
    // if(error){
    //     return res.status(400).json({
    //         success: false, message: `Error : ${error.details[0].message}`
    //     });
    // }

    try {

        const restaurant = await Restaurant.findOneAndUpdate({ _id}, { 
                name, address, phone
             }, { new: true });

        if(!restaurant){
            return res.status(400).json({
                success: false, message: `Failed to update ${restaurant?.name} restaurant`
            });
        }     

        res.status(200).json({
            success: true, message: `${restaurant?.name} Restaurant updated successfully`, data: restaurant
        });
    } catch (error) {
        return res.status(400).json({
            success: false, message: "Error occurred : " + error.message
        });
    }
}


export const deleteRestaurant = async(req, res) => {
    const _id = new ObjectId(req.params.restaurant_id);  //return console.log("FORM ", req.params)
    if(!_id){
        throw new Error('Restaurant ID required');
    }

    try {
        const restaurant = await Restaurant.findOneAndDelete({ _id });
        if(!restaurant){
            return res.status(400).json({
                success: false, message: `fail to delete restaurant record`
            });
        }
        
        res.status(200).json({
            success: true, message: `Restaurant delete successfully`,
            data: restaurant
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}