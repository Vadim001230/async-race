import {
  renderBtnStop, renderBtnStart, renderBtnEdit, renderBtnDelete,
} from './renderBtns';
import { renderCarImg } from './renderCarImg';

export const renderCar = (id: number, name:string, color: string) => `
  <div class="car" id="${id.toString()}">
    <div class="car__info">
      <div class="cars__info-btns">
      ${renderBtnStop()}
      ${renderBtnStart()}
      ${renderBtnEdit()}
      ${renderBtnDelete()}
      </div>
      <div class="car__info-name">${name}</div>
    </div>
    <div class="car__track">
    ${renderCarImg(color)}
      <div class="car__finish"></div>
    </div>
  </div>
`;