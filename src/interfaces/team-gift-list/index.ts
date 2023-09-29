import { GetQueryInterface } from 'interfaces';

export interface TeamGiftListInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TeamGiftListGetQueryInterface extends GetQueryInterface {
  id?: string;
}
