import { IWinner } from '../../../types/IWinner';

export const getWinners = async (
  url: string,
  page: number,
  limit: number,
  sort: 'id' | 'wins' | 'time',
  order: 'ASC' | 'DESC',
) => {
  const response = await fetch(`${url}winners?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`);
  const winsAmount = response.headers.get('X-Total-Count');
  const data = (await response.json()) as IWinner[];

  return {
    winners: data,
    amount: winsAmount,
  };
};