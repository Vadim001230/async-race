import { deleteCar } from '../API/deleteCar';
import { URL } from '../../../constants/URL';
import { renderCars } from '../views/renderCars';
import { checkSelector } from '../../../utils/checkSelector';

export const deleteCarBtn = async (id: string) => {
  await deleteCar(URL, +id);
  const page = +checkSelector(document, '.pagination__number').innerHTML;
  const menuUpdateBtn = checkSelector(document, '.menu__update-btn') as HTMLButtonElement;
  if (id === menuUpdateBtn.dataset.id) {
    (checkSelector(document, '.menu__update') as HTMLDivElement).style.display = 'none';
  }
  renderCars(page).catch((err: string) => {
    throw new Error(err);
  });
};