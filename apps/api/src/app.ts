import express from 'express';
import categoriesRoutes from '@/routes/categoriesRoutes';
import productsRoutes from '@/routes/productsRoutes';
import orderRoutes from '@/routes/ordersRoutes';
import { errorHandler } from '@/middlewares/errorHandler';
import { requestLogger } from '@/middlewares/requestLogger';

const app = express();

app.use(express.json());

// Global middleware
app.use(requestLogger);

// Routes
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', orderRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export { app };
