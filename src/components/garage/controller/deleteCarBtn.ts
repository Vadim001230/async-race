import { deleteCar } from '../API/deleteCar';
import { URL } from '../../../constants/URL';
import { renderCars } from '../views/renderCars';
import { checkSelector } from '../../../utils/checkSelector';

export const deleteCarBtn = async (id: string) => {
  await deleteCar(URL, +id);
  const page = +checkSelector(document, '.pagination__number').innerHTML;
  renderCars(page).catch((err: string) => {
    throw new Error(err);
  });
};