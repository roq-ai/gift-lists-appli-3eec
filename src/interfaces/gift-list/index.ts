import { GetQueryInterface } from 'interfaces';

export interface GiftListInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface GiftListGetQueryInterface extends GetQueryInterface {
  id?: string;
}
