import express from 'express';
import dotenv from 'dotenv';
import { logger } from '../../infra/logger/logger';
import homeRoutes from './routes/homeRoutes';


import tradeApiRoutes from './routes/tradingRoutes';
import generateRoutes from './test_routes/generateRoutes';

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

app.use('/', homeRoutes);
app.use('/trade', tradeApiRoutes)
app.use('/test', generateRoutes);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
