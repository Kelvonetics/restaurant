import express from "express";
import { getFoods, getFoodsByCategory, createFood, getFood, getSingleFood, updateFood, deleteFood, addFoodToFavorites, getFavoriteFoods } from "../controllers/food.controller.js";

const router = express.Router();

router.get(`/`, getFoods);
router.get(`/:category_id`, getFoodsByCategory);
router.post(`/`, createFood);
router.get(`/food-details/:food_id`, getFood);
router.get(`/single-food/:food_id`, getSingleFood);
router.put(`/:food_id`, updateFood);
router.delete(`/:food_id`, deleteFood);
router.get(`/favorites/:user_id`, getFavoriteFoods);
router.post(`/favorites`, addFoodToFavorites);



export default router;