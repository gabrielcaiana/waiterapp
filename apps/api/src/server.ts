import { app } from './app';
import config from './config/config';
import { connectToDatabase } from '@/database/mongo';
import { logger } from '@/logger/index';

async function startServer() {
  try {
    logger.info('⏳ connecting to database...');
    
    await connectToDatabase();

    app.listen(config.port, () => {
      logger.info(`🚀 Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
