import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    name : { type: String, unique: true, required: true },
    price : { type: String, required: true },
    duration : { type: String, required: true },
    ratings : { type: Number, required: true },
    description : { type: String, required: true },
    restaurant : [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", default: null }],
    category : [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null }],
    recipe : { type: String, required: true },
    imgUrl : { type: String },
}, {timestamps: true});

export const Favorite = mongoose.model('favorites', favoriteSchema);