import { Request, Response } from 'express';

import * as userService from '../services/user.service';
import * as statusCodes from '../core/constants/statusCodes';
import { getPageParams } from '../core/utils/paginate';

/**
 * Create log
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export const register = async (_req: Request, res: Response) => {
  const data = await userService.create();

  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data,
  });
};

/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export const login = async (req: Request, res: Response) => {
  const pageParams = getPageParams(req.query);

  const data = await userService.getUsersWithPage(pageParams);

  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data,
  });
};

/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export const logout = async (req: Request, res: Response) => {
  const pageParams = getPageParams(req.query);

  const data = await userService.getUsersWithPage(pageParams);

  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data,
  });
};