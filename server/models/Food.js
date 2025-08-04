import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : { type: String, unique: true, required: true },
    price : { type: String, required: true },
    duration : { type: String, required: true },
    ratings : { type: Number, required: true },
    description : { type: String, required: true },
    restaurant : [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", default: null }],
    category : [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null }],
    recipe : { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    imgUrl : { type: String, default: null },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {timestamps: true});

export const Food = mongoose.model('foods', foodSchema);