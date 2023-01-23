import { ICarGarageRequest } from '../../../types/ICarGarageRequest';

export async function createCar(url: string, data: ICarGarageRequest) {
  const response = await fetch(`${url}garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response;
}