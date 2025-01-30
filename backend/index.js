import express from 'express';
import cors from 'cors';

const app = express();

import testRouter from './routers/test.route.js'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/test',testRouter);

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})