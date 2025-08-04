import Joi from 'joi';

//AUTH
export const registerSchema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().min(11).max(12).required()
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required()
});

//CATEGORY VALIDATION
export const categorySchema = Joi.object({
    name: Joi.string().min(5).required(),
    description: Joi.string().min(15).required()
});

//RESTAURANT VALIDATION
export const restaurantSchema = Joi.object({
    name: Joi.string().min(5).required(),
    address: Joi.string().min(10).required(),
    phone: Joi.string().min(7).required(),
});

//FOOD VALIDATION
export const foodSchema = Joi.object({
    name: Joi.string().min(5).required(),
    price: Joi.string().required(), // Consider Joi.number() for price if you do calculations
    duration: Joi.string().required(),
    ratings: Joi.number().required(),
    description: Joi.string().min(15).required(),
    restaurant: Joi.string().required(),
    category: Joi.string().required(),
    recipe: Joi.string().required(),
    imgUrl: Joi.string().optional(), // Add imgUrl to schema if it's part of the payload
    owner: Joi.string().required(),
});
