import mongoose from 'mongoose'
export const connectMongo = async()=> {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MONGODB CONNECTED');
  } catch (error) {
   console.log('Failed to Connected to MongoDB'); 
  }
}