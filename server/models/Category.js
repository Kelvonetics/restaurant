import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    photo: { type: String, default: null },
}, {timestamps: true});

export const Category = mongoose.model('categories', categorySchema);