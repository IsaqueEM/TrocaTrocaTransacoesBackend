import express from 'express';
import dotenv from 'dotenv';
import { logger } from '../../infra/logger/logger';
import homeRoutes from './routes/homeRoutes';

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

app.use('/api/', homeRoutes);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
