import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import db from './config/db.js';

const app = express();

import testRouter from './routes/testRoute.js'
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import cartRouter from "./routes/cartRoute.js"
import adminRouter from './routes/adminRoute.js';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/test',testRouter);
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/food", foodRouter)
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 8000;

db();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
