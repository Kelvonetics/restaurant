import * as yup from 'yup';



export const registerSchema = yup.object().shape({
    name: yup.string().min(5, "Minimum character of 5 required!").required("Name is required!"),
    email: yup.string().email("Email not valid").required("Email required"),
    password: yup.string().min(6, "Password require minimum of 6 characters").required("Password required"),
    phone: yup.string().required("Phone is required!"),
});

export const foodSchema = yup.object().shape({
    name: yup.string().min(5, "Minimum character of 5 required!").required("Name is required!"),
    price: yup.number().positive().integer().required("Price is required!"),
    duration: yup.string().required("Duration is required!"),
    recipe: yup.string().min(5, "Minimum character of 5 required!").required("Recipe is required!"),
    ratings: yup.number().positive().integer().required("Ratings is required!"),
    restaurant: yup.string().required("Restaurant is required!"),
    category: yup.string().required("Category is required!"),
    description: yup.string().min(15, "Minimum character of 15 required!").required("Description is required!"),
});


export const loginSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("Email required"),
    password: yup.string().min(6, "Password require minimum of 6 characters")
    .required("Password required")
});


export const restaurantSchema = yup.object().shape({
    name: yup.string().min(5, "Minimum character of 5 required!").required("Name is required!"),
    address: yup.string().required("Address is required!"),
    phone: yup.string().required("Phone is required!"),
});


export const categorySchema = yup.object().shape({
    name: yup.string().min(5, "Minimum character of 5 required!").required("Name is required!"),
    description: yup.string().min(15, "Minimum character of 15 required!").required("Description is required!"),
});


export const userSchema = yup.object().shape({
    name: yup.string().min(5, "Minimum character of 5 required!").required("Name is required!"),
    role: yup.string().min(2, "Minimum character of 2 required!").required("Role is required!"),
});