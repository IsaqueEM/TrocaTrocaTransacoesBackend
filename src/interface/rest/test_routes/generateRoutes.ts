import { Router, Request, Response } from 'express';
import axios from 'axios';
import { logger } from '../../../infra/logger/logger';
import { generateClient } from '../../../../tests/faker/faker-services';

const testRoutes = Router();
const exchangeKey = process.env.EXCHANGE_KEY;

testRoutes.get('/generate/client', async (req: Request, res: Response) => {
  try {
    res.send('aeiou');
    generateClient();
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);
  }
});

export default testRoutes;