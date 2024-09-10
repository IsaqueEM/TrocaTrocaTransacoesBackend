import express from 'express';
import dotenv from 'dotenv';
import homeRoutes from './routes/home-routes';

import { logger } from '../../infra/logger/logger';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use('/', homeRoutes);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
