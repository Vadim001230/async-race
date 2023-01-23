export const renderPagination = (page: number) => `
<div class="pagination">
  <button class="pagination__left"> < </button>
  <span class="pagination__number"> ${page.toString()} </span>
  <button class="pagination__right"> > </button>
</div>
</div>
`;