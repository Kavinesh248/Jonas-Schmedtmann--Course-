import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHanlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPag = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Scenarios
    // Page 1 and there are other pages
    if (curPag === 1 && numPages > 1) {
      return `
      <button data-goto="${
        curPag + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${curPag + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
    }

    // Page last
    if (curPag === numPages) {
      return `
      <button data-goto="${
        curPag - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPag - 1}</span>
      </button>
      `;
    }

    // Some other pages
    if (curPag < numPages) {
      return `
      <button data-goto="${
        curPag - 1
      }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${icons}.svg#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPag - 1}</span>
      </button>
      <button data-goto="${
        curPag + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${curPag + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
    }

    // Page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
