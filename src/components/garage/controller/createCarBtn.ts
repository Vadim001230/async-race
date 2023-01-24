import { URL } from '../../../constants/URL';
import { checkSelector } from '../../../utils/checkSelector';
import { createCar } from '../API/createCar';
import { renderCars } from '../views/renderCars';

export const createCarBtn = async () => {
  const menuCreateInputName = checkSelector(document, '.menu__create-input_name') as HTMLInputElement;
  const menuCreateInputColor = checkSelector(document, '.menu__create-input_color') as HTMLInputElement;
  await createCar(URL, {
    name: menuCreateInputName.value,
    color: menuCreateInputColor.value,
  });
  menuCreateInputName.value = '';
  const page = +checkSelector(document, '.pagination__number').innerHTML;
  renderCars(page).catch((err: string) => {
    throw new Error(err);
  });
};
