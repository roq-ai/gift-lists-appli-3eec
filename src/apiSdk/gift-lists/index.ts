import queryString from 'query-string';
import { GiftListInterface, GiftListGetQueryInterface } from 'interfaces/gift-list';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGiftLists = async (
  query?: GiftListGetQueryInterface,
): Promise<PaginatedInterface<GiftListInterface>> => {
  return fetcher('/api/gift-lists', {}, query);
};

export const createGiftList = async (giftList: GiftListInterface) => {
  return fetcher('/api/gift-lists', { method: 'POST', body: JSON.stringify(giftList) });
};

export const updateGiftListById = async (id: string, giftList: GiftListInterface) => {
  return fetcher(`/api/gift-lists/${id}`, { method: 'PUT', body: JSON.stringify(giftList) });
};

export const getGiftListById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/gift-lists/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteGiftListById = async (id: string) => {
  return fetcher(`/api/gift-lists/${id}`, { method: 'DELETE' });
};
