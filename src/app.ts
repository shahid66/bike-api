import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import errorHandler from './app/middleware/errorHandler';
import { OrderRoutes } from './app/modules/order/order.route';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running');
});

app.use(errorHandler);

export default app;
