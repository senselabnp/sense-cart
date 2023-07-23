// import { Knex } from 'knex';

import BaseModel from './baseModel';
import { PageParams } from '../core/utils/paginate';

class Log extends BaseModel {
  // public static table: string = 'logs';

  // static getLogsWithPage(pageParams: PageParams): Knex.QueryBuilder {
  //   return this.query()
  //     .select()
  //     .orderBy('id', 'DESC')
  //     .offset(pageParams.offset)
  //     .limit(pageParams.pageSize);
  // }

  // static getTotalLogsCount(): Knex.QueryBuilder {
  //   return this.query().select().count().first();
  // }
}

export default Log;
