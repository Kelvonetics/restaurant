import express from 'express';
import { createRestaurant, getRestaurants,  getRestaurant, updateRestaurant, deleteRestaurant} from '../controllers/restaurant.controller.js';

const router = express.Router();

router.get(`/`, getRestaurants);
router.post(`/`, createRestaurant);
router.get(`/:restaurant_id`, getRestaurant);
router.put(`/:restaurant_id`, updateRestaurant);
router.delete(`/:restaurant_id`, deleteRestaurant);




export default router;