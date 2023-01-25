import { IWinner } from '../../../types/IWinner';

export const getWinner = async (url: string, id: number) => {
  const response = await fetch(`${url}winners/${id}`);
  const data = (await response.json()) as IWinner;

  return data;
};