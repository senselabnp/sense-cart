import { UserInterface } from '../core/interfaces/userInterface';
import { PageParams, PaginateInterface } from '../core/utils/paginate';
export declare const getUsersWithPage: (pageParams: PageParams) => Promise<PaginateInterface<UserInterface>>;
export declare const create: () => Promise<void>;
