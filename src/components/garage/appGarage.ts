import { renderGarageView } from './renderGarageView';
import { renderCars } from './views/renderCars';
import { checkSelector } from '../../utils/checkSelector';
import { createCarBtn } from './controller/createCarBtn';
import { controlCarBtns } from './controller/controlCarBtns';
import { switchToPages } from './views/switchToPages';

export const appGarage = async () => {
  await renderGarageView(1);
  await renderCars(1);

  checkSelector(document, '.menu__create-btn').addEventListener('click', createCarBtn);
  controlCarBtns();
  switchToPages();
};