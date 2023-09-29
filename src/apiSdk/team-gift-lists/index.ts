import queryString from 'query-string';
import { TeamGiftListInterface, TeamGiftListGetQueryInterface } from 'interfaces/team-gift-list';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTeamGiftLists = async (
  query?: TeamGiftListGetQueryInterface,
): Promise<PaginatedInterface<TeamGiftListInterface>> => {
  return fetcher('/api/team-gift-lists', {}, query);
};

export const createTeamGiftList = async (teamGiftList: TeamGiftListInterface) => {
  return fetcher('/api/team-gift-lists', { method: 'POST', body: JSON.stringify(teamGiftList) });
};

export const updateTeamGiftListById = async (id: string, teamGiftList: TeamGiftListInterface) => {
  return fetcher(`/api/team-gift-lists/${id}`, { method: 'PUT', body: JSON.stringify(teamGiftList) });
};

export const getTeamGiftListById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/team-gift-lists/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTeamGiftListById = async (id: string) => {
  return fetcher(`/api/team-gift-lists/${id}`, { method: 'DELETE' });
};
