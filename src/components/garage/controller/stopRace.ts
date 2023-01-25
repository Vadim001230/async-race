import { checkSelector } from '../../../utils/checkSelector';

export const stopRace = (): void => {
  const cars: NodeListOf<HTMLDivElement> = document.querySelectorAll('.car');
  cars.forEach((item: HTMLDivElement) => {
    const btnStop = checkSelector(item, '.cars__info-btn_stop') as HTMLButtonElement;
    btnStop.click();
  });
  const btnRace = checkSelector(document, '.menu__btn-race') as HTMLButtonElement;
  const btnReset = checkSelector(document, '.menu__btn-reset') as HTMLButtonElement;
  const btnCreate = checkSelector(document, '.menu__create-btn') as HTMLButtonElement;
  const btnGenerate = checkSelector(document, '.menu__btn-generate') as HTMLButtonElement;
  function addDisabled(btns: HTMLButtonElement[]) {
    btns.forEach((btn: HTMLButtonElement) => {
      btn.classList.remove('disabled');
    });
  }
  setTimeout(() => {
    addDisabled([btnRace, btnCreate, btnGenerate]);
  }, 2000);
  btnReset.classList.add('disabled');
};