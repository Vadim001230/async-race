import { URL } from '../../../constants/URL';
import { checkSelector } from '../../../utils/checkSelector';
import { getCars } from '../API/getCars';
import { renderCar } from './renderCar';
import { controlCarBtns } from '../controller/controlCarBtns';

export const renderCars = async (page: number) => {
  let htmlCars = '';
  const { cars } = await getCars(URL, page);
  cars.forEach(({ name, color, id }) => {
    htmlCars += `
      ${renderCar(id, name, color)}
    `;
  });
  checkSelector(document, '.cars').innerHTML = htmlCars;
  controlCarBtns();
};