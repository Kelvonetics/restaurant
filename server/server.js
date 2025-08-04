import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import categoryRoute from './routes/category.route.js';
import restaurantRoute from './routes/restaurant.route.js';
import foodRoute from './routes/food.route.js';
import connectToDb from './db/connectDB.js';
import cors from 'cors';



dotenv.config();
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();
app.use(express.json());
app.use(cors({ origin: CLIENT_URL, credentials: false }));


//ROUTES
app.use('/api/auth', authRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/restaurants', restaurantRoute);
app.use('/api/foods', foodRoute);



const port = process.env.PORT || 8000
app.listen(port, () => {
    connectToDb();
    console.log(`Server is running on port http://localhost:${port}`)
})

