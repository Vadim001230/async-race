import { checkSelector } from '../../../utils/checkSelector';
import { deleteCarBtn } from './deleteCarBtn';
import { editCarBtn } from './editCarBtn';

export const controlCarBtns = () => {
  const car: NodeListOf<HTMLDivElement> = document.querySelectorAll('.car');
  const menuUpdateBtn = checkSelector(document, '.menu__update-btn') as HTMLButtonElement;
  car.forEach((item: HTMLDivElement) => {
    const { id } = item;
    checkSelector(item, '.cars__info-btn_delete').addEventListener('click', deleteCarBtn.bind(null, id));
    checkSelector(item, '.cars__info-btn_edit').addEventListener('click', () => {
      menuUpdateBtn.dataset.id = id.toString();
      menuUpdateBtn.dataset.name = checkSelector(document, '.car__info-name').innerHTML;
      menuUpdateBtn.dataset.color = (checkSelector(document, '.car__img') as HTMLDivElement).dataset.color;
      const menuUpdateInputName = checkSelector(document, '.menu__update-input_name') as HTMLInputElement;
      const menuUpdateInputColor = checkSelector(document, '.menu__update-input_color') as HTMLInputElement;
      menuUpdateInputName.value = checkSelector(item, '.car__info-name').innerHTML;
      menuUpdateInputColor.value = (checkSelector(item, '.car__img') as HTMLDivElement).dataset.color || '#fff';
      (checkSelector(document, '.menu__update') as HTMLDivElement).style.display = 'flex';
      menuUpdateInputName.focus();
    });
  });

  const id = Number(menuUpdateBtn.dataset.id);
  menuUpdateBtn.addEventListener('click', editCarBtn.bind(null, id));
};