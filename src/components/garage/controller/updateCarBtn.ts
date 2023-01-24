import { updateCar } from '../API/updateCar';
import { URL } from '../../../constants/URL';
import { renderCars } from '../views/renderCars';
import { checkSelector } from '../../../utils/checkSelector';

export const updateCarBtn = async () => {
  const menuUpdateInputName = checkSelector(document, '.menu__update-input_name') as HTMLInputElement;
  const menuUpdateInputColor = checkSelector(document, '.menu__update-input_color') as HTMLInputElement;
  const menuUpdate = checkSelector(document, '.menu__update') as HTMLDivElement;
  const menuUpdateBtn = checkSelector(document, '.menu__update-btn') as HTMLButtonElement;
  const id = Number(menuUpdateBtn.dataset.id);

  await updateCar(URL, {
    name: menuUpdateInputName.value,
    color: menuUpdateInputColor.value,
  }, id);
  menuUpdate.style.display = 'none';
  renderCars(1).catch((err: string) => {
    throw new Error(err);
  });
};