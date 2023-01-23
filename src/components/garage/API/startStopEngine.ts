import { IEngineResponse } from '../../../types/IEngineResponse';

export async function manipulateEngine(url: string, id: number, status: 'started' | 'stopped') {
  const response = await fetch(`${url}engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const data = (await response.json()) as IEngineResponse;

  return data;
}