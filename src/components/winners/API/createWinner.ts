import { IWinner } from '../../../types/IWinner';

export const createWinner = async (url: string, data: IWinner) => {
  const response = await fetch(`${url}winners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
};