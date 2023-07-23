import {Request, Response} from 'express';
import * as statusCodes from '../constants/statusCodes';
/**
 * Error response middleware for 404 not found.
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns <void>
 */
export default function notFoundHandler(_: Request, res: Response) {
  res.status(statusCodes.NOT_FOUND).json({
    error: {
      code: statusCodes.NOT_FOUND,
      message: 'Not found',
    },
  });
}
