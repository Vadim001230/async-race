import { updateCar } from '../API/updateCar';
import { URL } from '../../../constants/URL';
import { renderCars } from '../views/renderCars';
import { checkSelector } from '../../../utils/checkSelector';

export const editCarBtn = async (id: number) => {
  const menuUpdateInputName = checkSelector(document, '.menu__update-input_name') as HTMLInputElement;
  const menuUpdateInputColor = checkSelector(document, '.menu__update-input_color') as HTMLInputElement;
  await updateCar(URL, {
    name: menuUpdateInputName.value,
    color: menuUpdateInputColor.value,
  }, id);
  renderCars(1).catch((err: string) => {
    throw new Error(err);
  });
};