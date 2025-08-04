import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    address : { type: String, required: true },
    phone: { type: String, unique: true, required: true },
}, {timestamps: true});

export const Restaurant = mongoose.model('restaurant', restaurantSchema);