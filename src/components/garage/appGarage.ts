import { renderGarageView } from './renderGarageView';
import { renderCars } from './views/renderCars';
import { checkSelector } from '../../utils/checkSelector';
import { controlCarBtns } from './controller/controlCarBtns';
import { switchToPages } from './views/switchToPages';
import { paginationListner } from './controller/paginationCars';

export const appGarage = async () => {
  await renderGarageView();
  const page = +checkSelector(document, '.pagination__number').innerHTML;
  await renderCars(page);

  controlCarBtns();
  switchToPages();
  paginationListner();
};