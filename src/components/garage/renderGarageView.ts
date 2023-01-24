import { renderMenu } from './views/renderMenu';
import { renderPagination } from './views/renderPagination';

export const renderGarageView = async (page: number) => {
  document.body.innerHTML = `
    <header class="header container">
      <h1 class="header__title">Async Race</h1>
      <div class="header__btns-container">
      <button class="header__btn btn-garage active">Garage</button>
      <button class="header__btn btn-winners">Winners</button>
      </div>
    </header>
    <main class="main container">
      ${renderMenu(1)}
      <div class="cars">
      </div>
      ${renderPagination(page)}
      <div class="winners container" style="display: none;"></div>
    </main>
    <footer class="footer">
      <div class="container">
        <a href="https://github.com/vadim001230/" class="footer__link">vadim001230</a>
        <div class="footer__year">2023</div>
        <a href="https://rs.school/js/" class="footer__rs-logo footer__link"></a>
      </div>
    </footer>`;
};
