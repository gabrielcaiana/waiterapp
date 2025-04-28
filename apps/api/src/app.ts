import express from 'express';
import itemRoutes from '@/routes/itemRoutes';
import categoriesRoutes from '@/routes/categoriesRoutes';
import productsRoutes from '@/routes/productsRoutes';
import orderRoutes from '@/routes/ordersRoutes';
import { errorHandler } from '@/middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', orderRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export { app };
