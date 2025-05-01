import mongoose from 'mongoose';
import { logger } from '@/logger/index';

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    logger.error('❌ MONGO_URI not found');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    logger.info('✅ Connected to MongoDB');
  } catch (error) {
    logger.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}
