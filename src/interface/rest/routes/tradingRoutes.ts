import { Router, Request, Response } from 'express';
import axios from 'axios';
import { logger } from '../../../infra/logger/logger';

const tradeApiRoutes = Router();
const exchangeKey = process.env.EXCHANGE_KEY;

tradeApiRoutes.get('/io', async (req: Request, res: Response) => {
  try {
    logger.info('Acessando a rota /api/io');
    const response = await axios.get(`https://sandbox.api.iopay.com.br/api/v1/`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);
  }
});

export default tradeApiRoutes;
