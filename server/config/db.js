import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
    console.log('MONGODB CONNECTED (Atlas)');
  } catch (error) {
    console.log('Atlas unreachable, starting in-memory MongoDB...');
    const server = await MongoMemoryServer.create({
      binary: { version: '4.4.6' }
    });
    const uri = server.getUri();
    await mongoose.connect(uri);
    console.log('MONGODB CONNECTED (in-memory)');
  }
}