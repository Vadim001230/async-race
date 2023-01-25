import { checkSelector } from '../../utils/checkSelector';

export const renderWinnersView = async () => {
  checkSelector(document, '.winners').innerHTML = `
    <div class="winners__amount">Winners amount <span>0</span></div>

    <div class="winners-table">
      <div class="winners-table__header winners-table__row">
        <div class="winners-table__header-cell cell-hover">Number</div>
        <div class="winners-table__header-cell">Car</div>
        <div class="winners-table__header-cell">Name</div>
        <div class="winners-table__header-cell cell-hover" >Wins</div>
        <div class="winners-table__header-cell cell-hover">Best time (sec)</div>
      </div>
      <div class="winners-table__rows"></div>
      </div>
    </div>

    <div class="winners-pagination">
      <button class="winners-pagination__left"> < </button>
      <span class="winners-pagination__number"> 1 </span>
      <button class="winners-pagination__right"> > </button>
    </div>
  `;
};