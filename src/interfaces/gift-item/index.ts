import { GetQueryInterface } from 'interfaces';

export interface GiftItemInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface GiftItemGetQueryInterface extends GetQueryInterface {
  id?: string;
}
