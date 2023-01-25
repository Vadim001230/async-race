import { checkSelector } from '../../utils/checkSelector';
import { renderWinnersView } from './renderWinnersView';
import { renderRowsWinners } from './views/renderRowsWinners';

export const appWinners = async () => {
  await renderWinnersView();
  const page = +checkSelector(document, '.winners-pagination__number').innerHTML;
  await renderRowsWinners(page);
};