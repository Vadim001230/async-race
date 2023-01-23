import { ICarGarageRequest } from '../../../types/ICarGarageRequest';

export async function updateCar(url: string, data: ICarGarageRequest, id: number) {
  const response = await fetch(`${url}garage/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
}