import { getRandomItem } from '../../../utils/getRandomItem';
import { BRANDS, MODELS } from '../../../constants/carNames';
import { URL } from '../../../constants/URL';
import { checkSelector } from '../../../utils/checkSelector';
import { createCar } from '../API/createCar';
import { renderCars } from '../views/renderCars';
import { getRandomColor } from '../../../utils/getRandomColor';

export const generateRandomCars = async () => {
  const carsArr = new Array(100).fill(0).map(() => ({
    name: `${getRandomItem(BRANDS)} ${getRandomItem(MODELS)}`,
    color: `${getRandomColor()}`,
  }));
  await Promise.all(carsArr.map((car) => createCar(URL, car)));
  const page = +checkSelector(document, '.pagination__number').innerHTML;
  renderCars(page).catch((err: string) => {
    throw new Error(err);
  });
};