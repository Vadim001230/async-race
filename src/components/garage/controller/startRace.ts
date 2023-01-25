import { checkSelector } from '../../../utils/checkSelector';
import { startStopEngine } from '../API/startStopEngine';
import { URL } from '../../../constants/URL';
import { switchToDriveMode } from '../API/switchToDriveMode';
import { IEngineResponse } from '../../../types/IEngineResponse';
import { CAR_PAGE_LIMIT } from '../../../constants/carOnPageLimit';
import { DISTANCE } from '../../../constants/distance';
import { TIME_COEFFICIENT } from '../../../constants/timeCoeff';
import { showWinMsg } from '../views/showWinMsg';

export const startRace = async () => {
  const cars: NodeListOf<HTMLDivElement> = document.querySelectorAll('.car');
  const arrStartEnginePromises: Promise<IEngineResponse>[] = [];
  const arrSwitchToDriveModePromises: unknown[] = [];
  const btnRace = checkSelector(document, '.menu__btn-race') as HTMLButtonElement;
  const btnReset = checkSelector(document, '.menu__btn-reset') as HTMLButtonElement;
  const btnCreate = checkSelector(document, '.menu__create-btn') as HTMLButtonElement;
  const btnGenerate = checkSelector(document, '.menu__btn-generate') as HTMLButtonElement;
  function addDisabled(btns: HTMLButtonElement[]) {
    btns.forEach((btn: HTMLButtonElement) => {
      btn.classList.add('disabled');
    });
  }
  addDisabled([btnRace, btnCreate, btnGenerate]);
  btnReset.classList.remove('disabled');
  cars.forEach((item: HTMLDivElement) => {
    const btnStart = checkSelector(item, '.cars__info-btn_start') as HTMLButtonElement;
    arrStartEnginePromises.push(startStopEngine(URL, +item.id, 'started'));
    arrSwitchToDriveModePromises.push(switchToDriveMode(URL, +item.id, 'drive'));
    btnStart.classList.add('disabled');
  });

  const arrInfo = await Promise.all(arrStartEnginePromises);
  const page = checkSelector(document, '.pagination__number').innerHTML;
  arrInfo.forEach(async (item, index) => {
    const ID = `${index + ((+page - 1) * CAR_PAGE_LIMIT) + 1}`;
    const el = document.getElementById(ID) as HTMLElement;
    const carImg = checkSelector(el, '.car__img') as HTMLDivElement;
    const btnStart = checkSelector(el, '.cars__info-btn_start');
    const btnStop = checkSelector(el, '.cars__info-btn_stop');
    const btnEdit = checkSelector(el, '.cars__info-btn_edit');
    const btnDelete = checkSelector(el, '.cars__info-btn_delete');
    const time = +(item.distance / item.velocity).toFixed(1);
    btnEdit.classList.add('disabled');
    btnDelete.classList.add('disabled');
    btnStart.classList.add('active');
    const response = await switchToDriveMode(URL, +ID, 'drive');
    carImg.style.left = 'calc(100% - 140px)';
    carImg.style.transition = `left ${time / TIME_COEFFICIENT}ms ease-in-out`;
    btnStart.classList.remove('active');
    btnStart.classList.add('disabled');
    btnStop.classList.remove('disabled');
    if (response.status === 500) {
      carImg.style.left = `${carImg.offsetLeft}px`;
      carImg.style.transform = 'rotate(-170deg)';
    }
  });
  const arrVelocity = arrInfo.map((el) => el.velocity);
  const winnerId: number = arrVelocity.indexOf(Math.max(...arrVelocity)) + 1;
  const winnerSpeed = Math.max(...arrVelocity);
  const winnerTime = (((DISTANCE / winnerSpeed) / TIME_COEFFICIENT) / 1000).toFixed(2);
  const winnerCar = document.getElementById(winnerId.toString()) as HTMLElement;
  const winnerName = winnerCar.dataset.name;
  setTimeout(() => {
    showWinMsg(`${winnerName || 'Car'} wins! [${winnerTime}s]`);
  }, 2600);
};