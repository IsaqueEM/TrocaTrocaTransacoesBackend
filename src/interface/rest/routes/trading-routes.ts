import { Router, Request, Response } from 'express';
import axios from 'axios';
import { logger } from '../../../infra/logger/logger';

const tradeApiRoutes = Router();
const exchangeKey = process.env.EXCHANGE_KEY;

tradeApiRoutes.get('/api/rates', async (req: Request, res: Response) => {
  try {
    logger.info('Acessando a rota /api/rates');
    const response = await axios.get(`https://api.hgbrasil.com/finance?key=${exchangeKey}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);
  }
});

tradeApiRoutes.get('/', async (req: Request, res: Response) => {
  try {
    logger.info('Acessando a rota /');
    res.send(req.ip);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);
  }
});

export default tradeApiRoutes;
