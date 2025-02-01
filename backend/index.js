import express from 'express';
import cors from 'cors';


const app = express();

import testRouter from './routers/testRoute.js'
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import cartRouter from "./routes/cartRoute.js"

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/test',testRouter);
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/food", foodRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})