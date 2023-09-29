import queryString from 'query-string';
import { GiftItemInterface, GiftItemGetQueryInterface } from 'interfaces/gift-item';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGiftItems = async (
  query?: GiftItemGetQueryInterface,
): Promise<PaginatedInterface<GiftItemInterface>> => {
  return fetcher('/api/gift-items', {}, query);
};

export const createGiftItem = async (giftItem: GiftItemInterface) => {
  return fetcher('/api/gift-items', { method: 'POST', body: JSON.stringify(giftItem) });
};

export const updateGiftItemById = async (id: string, giftItem: GiftItemInterface) => {
  return fetcher(`/api/gift-items/${id}`, { method: 'PUT', body: JSON.stringify(giftItem) });
};

export const getGiftItemById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/gift-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteGiftItemById = async (id: string) => {
  return fetcher(`/api/gift-items/${id}`, { method: 'DELETE' });
};
