import { Category } from "../models/Category.js"
import { Food } from "../models/Food.js"
import { User } from '../models/User.js';
import { Restaurant } from "../models/Restaurant.js"
import { foodSchema } from "../schemas/index.js";
import { ObjectId } from 'mongodb';


export const getFoodsByCategory = async(req, res) => {

    const category_id = new ObjectId(req.params.category_id);
    if(!category_id){
        return res.status(400).json({
            success: false, message: "Category ID required"
        });
    }
    let limit = 8;
    try 
    {
        const foods = await Food.find({category: category_id})
        .populate({
            path: "restaurant",
            model: Restaurant,
            select: '_id name address phone'
        }).populate({
            path: "category",
            model: Category,
            select: '_id name description'
        }).populate({
            path: "owner",
            model: User,
            select: '_id name email photo photo'
        })
        .sort({ createdAt: 'desc' })
        .limit(limit)
        .exec();

        if (!foods) {
            return res.status(400).json({
                success: false, message: "Food records not found"
            });
        }
        res.status(200).json({
            success: true, message: "Found food records", data: foods
        });
    } 
    catch (error) {
        return res.status(400).json({ 
            success: false, message: error.message
         });
    }
}


export const getFoods = async(req, res) => {
    let limit = 8;
    try 
    {
        const foods = await Food.find()
        .populate({
            path: "restaurant",
            model: Restaurant,
            select: '_id name address phone'
        }).populate({
            path: "category",
            model: Category,
            select: '_id name description'
        }).populate({
            path: "owner",
            model: User,
            select: '_id name email photo photo'
        })
        .sort({ createdAt: 'desc' })
        .limit(limit)
        .exec();

        if (!foods) {
            return res.status(400).json({
                success: false, message: "Food records not found"
            });
        }
        res.status(200).json({
            success: true, message: "Found food records", data: foods
        });
    } 
    catch (error) {
        return res.status(400).json({ 
            success: false, message: error.message
         });
    }
}


export const createFood = async (req, res) => {
    const { name, price, duration, ratings, description, restaurant, category, recipe, imgUrl, owner } = req.body;
    // return console.log("FOOD : ", req.body);

    const { error } = foodSchema.validate(req.body);
    if(error){
        console.error("Validation Error:", error.details[0].message); 
        return res.status(400).json({
            success: false, message: `Error : ${error.details[0].message}`
        });
    }

    try {
        const foodExist = await Food.findOne({ name });
        if(foodExist){
            return res.status(400).json({
                success: false, message: `${name} food already exist`
            });
        }

        const food = new Food(
            {name, price, duration, ratings, description, restaurant, category, recipe, imgUrl, owner}
        );
        await food.save();

        res.status(200).json({
            success: true, message: "Food created successfully", data: food
        });
    } catch (error) {
        return res.status(400).json({
            success: false, message: "Error occurred : " + error.message
        });
    }
}


export const getFood = async(req, res) => {
    const _id = new ObjectId(req.params.food_id);
    if(!_id){
        return res.status(400).json({
            success: false, message: "Food ID required"
        });
    }
    
    try 
    {
        const food = await Food.findById({_id})
        .populate({
            path: "restaurant",
            model: Restaurant,
            select: '_id name address phone'
        }).populate({
            path: "category",
            model: Category,
            select: '_id name description'
        }).populate({
            path: "owner",
            model: User,
            select: '_id name email photo photo'
        })
        .exec();

        if (!food) {
            return res.status(400).json({
                success: false, message: "Food record not found"
            });
        }
        res.status(200).json({
            success: true, message: `${food.name} food records found`, data: food
        });
    } 
    catch (error) {
        return res.status(400).json({ 
            success: false, message: error.message
         });
    }
}


export const getSingleFood = async(req, res) => {
    const _id = new ObjectId(req.params.food_id);
    if(!_id){
        return res.status(400).json({
            success: false, message: "Food ID required"
        });
    }
    
    try 
    {
        const food = await Food.findById({_id});
        if (!food) {
            return res.status(400).json({
                success: false, message: "Food record not found"
            });
        }
        res.status(200).json({
            success: true, message: `${food.name} food records found`, data: food
        });
    } 
    catch (error) {
        return res.status(400).json({ 
            success: false, message: error.message
         });
    }
}


export const updateFood = async (req, res) => {
    const _id = new ObjectId(req.params.food_id);
    if(!_id){
        return res.status(400).json({
            success: false, message: "Food ID required"
        });
    }

    const { name, price, duration, ratings, description, restaurant, category, recipe, imgUrl, owner } = req.body;
    //return console.log("FOOD : ", req.body);

    const { error } = foodSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            success: false, message: `Error : ${error.details[0].message}`
        });
    }

    try {

        let food;
        if(imgUrl?.length > 1){
            food = await Food.findOneAndUpdate({ _id}, { 
                name, price, duration, ratings, description, restaurant, category, recipe, imgUrl, owner
             }, { new: true });
        }
        else{
            food = await Food.findOneAndUpdate({ _id}, { 
                name, price, duration, ratings, description, restaurant, category, recipe, owner
             }, { new: true });
        }

        if(!food){
            return res.status(400).json({
                success: false, message: `Failed to update ${food?.name} food`
            });
        }     

        res.status(200).json({
            success: true, message: `${food?.name} Food updated successfully`, data: food
        });
    } catch (error) {
        return res.status(400).json({
            success: false, message: "Error occurred : " + error.message
        });
    }
}


export const deleteFood = async(req, res) => {
    const _id = req.params.food_id;
    if(!_id){
        throw new Error('Food id required');
    }

    try {
        const food = await Food.findOneAndDelete({ _id });
        if(!food){
            return res.status(400).json({
                success: false, message: `fail to delete food`
            });
        }
        
        res.status(200).json({
            success: true, message: `Food delete successfully`,
            data: food
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}


export const getFavoriteFoods = async(req, res) => {
    const user_id = req.params.user_id;     //return console.log("Foods : ", user_id);
    try {  
        if (!user_id) {
            res.status(400).json({
                success: false,
                message: 'User id is required !'
            });
        }

        const user = await User.findOne({ _id: user_id }).select('-password')  //return console.log("User : ", user);
            .populate({
                path: "favorites",
                model: Food,
                select: "_id name price duration ratings description recipe imgUrl createdAt",
                populate: [
                    {
                        path: "restaurant", // Populate the restaurant field within children
                        model: Restaurant,
                        select: "_id name phone address", // Select only _id and username fields of the author
                    },
                    {
                        path: "category", // Populate the category field within children
                        model: Category,
                        select: "_id name description", // Select only _id and username fields of the author
                    },
                    {
                        path: "owner", // Populate the author field within children
                        model: User,
                        select: "_id name email phone photo", // Select only _id and username fields of the author
                    },
                ],
            })
        .sort({ createdAt: 'desc' })
        .exec(); 

        if (user) {
            res.status(200).json({
                success: true,
                message: 'User favorite foods found !',
                data: user
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: 'Fail to fetch user favorite foods !'
            });
        }
        //return console.log("User : ", user);
        

    } catch (error) {
        return res.status(400).json({success: false, message: error.message});
    }
}


export const addFoodToFavorites = async(req, res) => {
    const { user_id, food_id } = req.body;
    const userId = new ObjectId(user_id); 
    const foodId = new ObjectId(food_id);   //return console.log("Details ===> ", req.body);

    try {
        //ADD USER TO FAVORITE FOOD
        let addUserToFoodFavorites = false; let removeUserFromFoodFavorites = false; 
        let addFoodToUserFavorites = false; let removeFoodFromUserFavorites = false;

        const food = await Food.findById({ _id: foodId });  
        if (!food.favorites.includes(user_id)) {
            await food.updateOne({ $push: { favorites: { $each: [userId], $position: 0 } } });
            addUserToFoodFavorites = true;
        }
        else {
            await food.updateOne({ $pull: { favorites: userId } });
            removeUserFromFoodFavorites = true;
        }


        //ADD REMOVE FOOD TO USER
        const user = await User.findById({ _id: userId });
        if (!user.favorites.includes(food_id)) {
            await user.updateOne({ $push: { favorites: { $each: [foodId], $position: 0 } } });
            addFoodToUserFavorites = true;
        }
        else {
            await user.updateOne({ $pull: { favorites: foodId } });
            removeFoodFromUserFavorites = true;
        }

        
        if (addUserToFoodFavorites && addFoodToUserFavorites) {
            res.status(200).json({ success: true, message: "Food was added to favorite!" });
        }
        else if (removeUserFromFoodFavorites && removeFoodFromUserFavorites) {
            res.status(200).json({
                success: true, message: 'Food was removed from favorite !'
            });
        }

    } catch (error) {
        return res.status(400).json({success: false, message: error.message});
    }
}