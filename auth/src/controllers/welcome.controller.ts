import { Request, Response } from 'express';
import * as statusCodes from '../core/constants/statusCodes';

/**
 * Open Welcome Page
 *
 * @param _req
 * @param res
 */
export const index = async (_req: Request, res: Response) => {
  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data: {
      name: 'Welcome to the sense cart backend API',
      description:
        'This is a open-source platform for ecommerce.',
    },
  });
};
