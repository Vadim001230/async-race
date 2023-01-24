import { deleteCar } from '../API/deleteCar';
import { URL } from '../../../constants/URL';
import { renderCars } from '../views/renderCars';

export const deleteCarBtn = async (id: string) => {
  await deleteCar(URL, +id);
  renderCars(1).catch((err: string) => {
    throw new Error(err);
  });
};