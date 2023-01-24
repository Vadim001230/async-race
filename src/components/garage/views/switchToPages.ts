import { checkSelector } from '../../../utils/checkSelector';

export const switchToPages = () => {
  const headerBtnsContainer = checkSelector(document, '.header__btns-container') as HTMLDivElement;
  const headerBtns = document.querySelectorAll('.header__btn');
  const garage = checkSelector(document, '.garage') as HTMLDivElement;
  const winners = checkSelector(document, '.winners') as HTMLDivElement;
  headerBtnsContainer.addEventListener('click', (e) => {
    if (e !== null) {
      if ((e.target as HTMLButtonElement).classList.contains('header__btn')) {
        const target = e.target as HTMLButtonElement;
        for (let i = 0; i < headerBtns.length; i += 1) {
          headerBtns[i].classList.remove('active');
        }
        if (target.classList.contains('btn-winners')) {
          garage.style.display = 'none';
          winners.style.display = 'block';
        }
        if (target.classList.contains('btn-garage')) {
          garage.style.display = 'block';
          winners.style.display = 'none';
        }
        target.classList.add('active');
      }
    }
  });
};