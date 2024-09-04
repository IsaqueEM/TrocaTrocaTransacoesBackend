import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

import { logger } from '../infra/logger/logger';

dotenv.config();
const app = express();
const port = process.env.PORT;
const exchangeKey = process.env.EXCHANGE_KEY;

 

app.get('/api/rates', async (req: Request, res: Response) => {
  try {
    logger.info('Acessando a rota /api/rates');
    const response = await axios.get(`https://api.hgbrasil.com/finance?key=${exchangeKey}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);

  }
}
);

app.get('/', async (req: Request, res: Response) => {
  try {
    logger.info('Acesando a rota /');
    res.send(req.ip);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);

  }
}
);


app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
