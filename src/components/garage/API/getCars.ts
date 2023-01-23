import { ICar } from '../../../types/ICar';
import { CAR_PAGE_LIMIT } from '../../../constants/carOnPageLimit';

export async function getCars(url: string, page: number) {
  const response = await fetch(`${url}garage?_limit=${CAR_PAGE_LIMIT}&_page=${page}`);
  const carsAmount = response.headers.get('X-Total-Count');
  const data = (await response.json()) as ICar[];

  return {
    cars: data,
    amount: carsAmount,
  };
}