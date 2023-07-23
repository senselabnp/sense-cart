import { UserInterface } from '../core/interfaces/userInterface';
import {
  PageParams,
  paginateData,
  PaginateInterface,
} from '../core/utils/paginate';

import User from '../models/user.model';

export const getUsersWithPage = async (
  pageParams: PageParams
): Promise<PaginateInterface<UserInterface>> => {
  // const data = await Log.getLogsWithPage(pageParams);
  // const totalLogs = await Log.getTotalLogsCount();

  return paginateData<UserInterface>([{ id: '' }], 10, pageParams);
};

export const create = async () => {
  //
}
