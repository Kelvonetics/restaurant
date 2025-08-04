import { Category } from "../models/Category.js";
import { categorySchema } from "../schemas/index.js";
import { ObjectId } from 'mongodb';

export const getCategories = async(req, res) => {
    try {
        const categories = await Category.find().sort({createdAt : 'desc'});
        if(!categories){
            return res.status(400).json({
                success: false, message: "No category record found!"
            });
        }

        res.status(200).json({
            success: true, message: "Categories record(s) found", data: categories
        });
    } catch (error) {
        return res.status(400).json({
            success: false, message: error.message
        });
    }
}


export const createCategory = async(req, res) => {
    const { name, description, photo } = req.body;
    const { error } = categorySchema.validate();
    if(error){
        return res.status(400).json({
            success: false, message: error.details[0].message
        });
    }

    try {
        const categoryExist = await Category.findOne({ name });
        if(categoryExist){
            return res.status(400).json({
                success: false, message: `${name} category already exist`
            });
        }
        const category = new Category({ name, description, photo });
        await category.save();

        res.status(200).json({
            success: true, message: `${name} category added`, data: category
        });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}


export const getCategory = async(req, res) => {
    const _id = new ObjectId(req.params.category_id);
    if(!_id){
        return res.status(400).json({
            success: false, message: "Category ID required"
        });
    }
  
    try {
        const category = await Category.findById({ _id });
        if(!category){
            return res.status(400).json({
                success: false, message: `No category record found!`
            });
        }

        res.status(200).json({
            success: true, message: `${category?.name} category record found`, data: category
        });
    } catch (error) {
        return res.status(400).json({
            success: false, message: error.message
        });
    }
}


export const updateCategory = async(req, res) => {
    const category_id = new ObjectId(req?.params?.category_id);
    if(!category_id){
        return res.status(400).json({
            success: false, message: "Category ID required"
        });
    }
    const { name, description, photo } = req.body;
    const {error} = categorySchema.validate();
    if(error){
        return res.status(400).json({
            success: false, message: error.details[0].message
        });
    }

    try {
        const category = await Category.findOneAndUpdate({_id: category_id},
        { name, description, photo}, { new: true }
        );
        if(!category){
            return res.status(400).json({
                success: false, message: "Category not found"
            });
        }

        res.status(200).json({
            success: true, message: `${category?.name} category updated successfully !`, data: category
        });
    } catch (error) {
        return res.status(400).json({
            success: false, message: error.message
        });
    }
}


export const deleteCategory = async(req, res) => {
    const _id = new ObjectId(req.params.category_id);
    if(!_id){
        throw new Error('Category ID required');
    }

    try {
        const category = await Category.findOneAndDelete({ _id });
        if(!category){ 
            return res.status(400).json({
                success: false, message: `fail to delete category record`
            });
        }
        
        res.status(200).json({
            success: true, message: `Category delete successfully`,
            data: category
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}