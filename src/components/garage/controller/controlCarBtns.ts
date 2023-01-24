import { checkSelector } from '../../../utils/checkSelector';
import { deleteCarBtn } from './deleteCarBtn';
import { updateCarBtn } from './updateCarBtn';
import { URL } from '../../../constants/URL';
import { startStopEngine } from '../API/startStopEngine';
import { switchToDriveMode } from '../API/switchToDriveMode';
import { createCarBtn } from './createCarBtn';

export const controlCarBtns = () => {
  const car: NodeListOf<HTMLDivElement> = document.querySelectorAll('.car');
  const menuUpdateBtn = checkSelector(document, '.menu__update-btn') as HTMLButtonElement;
  const createBtn = checkSelector(document, '.menu__create-btn') as HTMLButtonElement;
  car.forEach((item: HTMLDivElement) => {
    const { id } = item;
    const carImg = checkSelector(item, '.car__img') as HTMLDivElement;
    const btnStart = checkSelector(item, '.cars__info-btn_start');
    const btnStop = checkSelector(item, '.cars__info-btn_stop');
    const btnEdit = checkSelector(item, '.cars__info-btn_edit');
    const btnDelete = checkSelector(item, '.cars__info-btn_delete');

    btnStart.addEventListener('click', async () => {
      btnEdit.classList.add('disabled');
      btnDelete.classList.add('disabled');
      createBtn.style.pointerEvents = 'none';
      btnStart.classList.add('active');
      const info = await startStopEngine(URL, +id, 'started');
      const response = await switchToDriveMode(URL, +id, 'drive');
      const time = Math.round(info.distance / info.velocity);
      carImg.style.left = 'calc(100% - 140px)';
      carImg.style.transition = `left ${time / 1.4}ms ease-in-out`;
      btnStart.classList.remove('active');
      btnStart.classList.add('disabled');
      btnStop.classList.remove('disabled');
      setTimeout(() => {
        createBtn.style.pointerEvents = 'auto';
      }, 5000);
      if (response.status === 500) {
        carImg.style.left = `${carImg.offsetLeft}px`;
        carImg.style.transform = 'rotate(-170deg)';
      }
    });

    btnStop.addEventListener('click', async () => {
      await startStopEngine(URL, +id, 'stopped');
      btnEdit.classList.remove('disabled');
      btnDelete.classList.remove('disabled');
      createBtn.style.pointerEvents = 'auto';
      carImg.style.left = '0';
      carImg.style.transition = 'none';
      carImg.style.transform = 'none';
      btnStart.classList.remove('active');
      btnStart.classList.remove('disabled');
      btnStop.classList.add('disabled');
    });

    btnDelete.addEventListener('click', deleteCarBtn.bind(null, id));

    btnEdit.addEventListener('click', () => {
      menuUpdateBtn.dataset.id = id.toString();
      menuUpdateBtn.dataset.name = checkSelector(item, '.car__info-name').innerHTML;
      menuUpdateBtn.dataset.color = carImg.dataset.color;
      const menuUpdateInputName = checkSelector(document, '.menu__update-input_name') as HTMLInputElement;
      const menuUpdateInputColor = checkSelector(document, '.menu__update-input_color') as HTMLInputElement;
      menuUpdateInputName.value = checkSelector(item, '.car__info-name').innerHTML;
      menuUpdateInputColor.value = carImg.dataset.color || '#fff';
      (checkSelector(document, '.menu__update') as HTMLDivElement).style.display = 'flex';
      menuUpdateInputName.focus();
    });
  });

  checkSelector(document, '.menu__create-btn').addEventListener('click', createCarBtn);
  menuUpdateBtn.addEventListener('click', updateCarBtn);
};