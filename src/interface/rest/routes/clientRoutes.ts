import { Router, Request, Response } from 'express';
import { logger } from '../../../infra/logger/logger';

const clientRoutes = Router();

clientRoutes.get('/get/:id', async (req: Request, res: Response) => {
  try {
    logger.info('Acessando a rota client/');
    const { id } = req.params;
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    logger.error(error);
  }
});

export default clientRoutes;
