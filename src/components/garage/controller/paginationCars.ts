import { CAR_PAGE_LIMIT } from '../../../constants/carOnPageLimit';
import { checkSelector } from '../../../utils/checkSelector';
import { renderCars } from '../views/renderCars';

export const paginationListner = () => {
  const paginationNumber = checkSelector(document, '.pagination__number');
  const paginationLeft = checkSelector(document, '.pagination__left');
  const paginationRight = checkSelector(document, '.pagination__right');

  paginationLeft.addEventListener('click', async () => {
    let page = +paginationNumber.innerHTML;
    page -= 1;
    if (page <= 1) {
      paginationLeft.classList.add('disabled');
      page = 1;
    } else {
      paginationLeft.classList.remove('disabled');
      paginationRight.classList.remove('disabled');
    }
    paginationNumber.innerHTML = page.toString();
    await renderCars(page);
  });

  paginationRight.addEventListener('click', async () => {
    let page = +paginationNumber.innerHTML;
    page += 1;
    const maxPageNumber = Math.ceil((+checkSelector(document, '.menu__amount span').innerHTML) / CAR_PAGE_LIMIT);
    if (page >= maxPageNumber) {
      paginationRight.classList.add('disabled');
      page = maxPageNumber;
    } else {
      paginationRight.classList.remove('disabled');
    }
    paginationNumber.innerHTML = page.toString();
    paginationLeft.classList.remove('disabled');
    await renderCars(page);
  });
};