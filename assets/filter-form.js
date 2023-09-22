const sectionRenderingHandler = () => {
  const urlParams = window.location.search;
  const ajaxUrlParams = urlParams
    .split('')
    .filter((el, index) => el !== '?' && index !== 0)
    .join('');

  fetch(`${window.location.pathname}?section_id=collection&${ajaxUrlParams}`)
    .then((response) => response.text())
    .then((responseText) => {
      const html = new DOMParser().parseFromString(responseText, 'text/html');
      const elementsToUpdate = ['#product-grid-custom', '.collection-section__paginate', '.js-urls-to-remove'];

      const filterInputs = document.querySelectorAll('.filter-form__details');
      filterInputs.forEach((el, index) => {
        el.innerHTML = html.querySelectorAll('.filter-form__details')[index].innerHTML;
      });

      elementsToUpdate.forEach((selector) => {
        const sourceElement = html.querySelector(selector);
        const targetElement = document.querySelector(selector);

        if (sourceElement && targetElement) {
          targetElement.innerHTML = sourceElement.innerHTML;
        }
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

const onUrlUpdated = (value) => {
  window.history.pushState({}, '', value);
  sectionRenderingHandler();
};

const filterForm = document.querySelector('#filter-form-id');
filterForm.addEventListener('change', () => {
  const formData = new FormData(filterForm);
  const searchParams = new URLSearchParams(formData);

  onUrlUpdated(`all?${searchParams.toString()}`);
});

const urlsToRemove = document.querySelector('.js-urls-to-remove');
urlsToRemove.addEventListener('click', (e) => {
  if (e.target.classList.contains('urls-to-remove-container__button')) {
    e.preventDefault();
    onUrlUpdated(e.target.href);
  }
});

const collectionPaginate = document.querySelector('.collection-section__paginate');
collectionPaginate.addEventListener('click', (e) => {
  if (e.target.classList.contains('collection-section__page')) {
    e.preventDefault();
    onUrlUpdated(e.target.href);
  }
});

const drawerBtn = document.querySelector('.js-drawer-button');
drawerBtn.addEventListener('click', () => {
  document.querySelector('.js-form-drawer').classList.add('collection-section__drawer_active');
});

const drawerCloseBtn = document.querySelector('.filter-form__drawer-close');
drawerCloseBtn.addEventListener('click', () => {
  document.querySelector('.js-form-drawer').classList.remove('collection-section__drawer_active');
});

const select = document.querySelector('.js-sorting-form select');
select.addEventListener('change', (event) => {
  const url = new URL(window.location.href);
  url.searchParams.set('sort_by', event.target.value);
  onUrlUpdated(url);
});
