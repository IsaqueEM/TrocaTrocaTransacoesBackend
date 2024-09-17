import { Router, Request, Response } from 'express';
import axios from 'axios';
import { logger } from '../../../infra/logger/logger';

const homeRoutes = Router();
const exchangeKey = process.env.EXCHANGE_KEY;

homeRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.hgbrasil.com/finance?key=${exchangeKey}`);
    logger.info('Acessando a rota home/')
    res.send('Troca Troca Transaçòes Divitiae et voluptates: duo in uno');
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);
  }
});

export default homeRoutes;
