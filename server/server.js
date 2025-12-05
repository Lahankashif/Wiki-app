import { connectMongo } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import searchRoutes from "./routes/searchRoutes.js" 
import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';

const app = express()
dotenv.config()
connectMongo()
app.use(express.json())

app.use(cors({
    origin:true,
    credentials:true
}))
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Wiki API running'));
app.use("/auth", authRoutes);
app.use('/api/search', searchRoutes)
app.listen(PORT, () => {console.log(`running on ${PORT}`);}) 
