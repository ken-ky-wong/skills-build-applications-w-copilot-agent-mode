import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
  const mongodbUrl = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

  try {
    await mongoose.connect(mongodbUrl);
    console.log('MongoDB connected to octofit_db');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default connectDatabase;
