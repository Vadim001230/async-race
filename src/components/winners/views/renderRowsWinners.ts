import { URL } from '../../../constants/URL';
import { checkSelector } from '../../../utils/checkSelector';
import { renderRowWinner } from './renderRowWinner';
import { getWinners } from '../API/getWinners';
import { WINNERS_ON_PAGE_LIMIT } from '../../../constants/winnersOnPageLimmit';

export const renderRowsWinners = async (page: number) => {
  let htmlWinners = '';
  const { winners, amount } = await getWinners(URL, page, WINNERS_ON_PAGE_LIMIT, 'id', 'ASC');
  winners.forEach(({ id, wins, time }) => {
    const car = document.getElementById(id.toString()) as HTMLDivElement;
    const { color } = car.dataset;
    const { name } = car.dataset;
    htmlWinners += `
      ${renderRowWinner(id, wins, time, color || '#fff', name || 'Car')}
    `;
  });
  checkSelector(document, '.winners__amount span').innerHTML = amount || '0';
  if (amount) {
    if (+amount > 10) {
      checkSelector(document, '.winners-pagination__right').classList.remove('disabled');
    } else {
      checkSelector(document, '.winners-pagination__right').classList.add('disabled');
    }
  }
  checkSelector(document, '.winners-table__rows').innerHTML = htmlWinners;
};
