import './assets/style/layout.css';
import './style.css';
import './assets/img/favicon.jpg';
import { renderGarageView } from './components/garage/renderGarageView';
import { renderCars } from './components/garage/views/renderCars';
import { checkSelector } from './utils/checkSelector';
import { createCarBtn } from './components/garage/controller/createCarBtn';
import { controlCarBtns } from './components/garage/controller/controlCarBtns';

async function app() {
  await renderGarageView(1);
  await renderCars(1);

  checkSelector(document, '.menu__create-btn').addEventListener('click', createCarBtn);
  controlCarBtns();
}

app().catch((err: string) => {
  throw new Error(err);
});