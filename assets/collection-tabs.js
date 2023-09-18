const elements = document.querySelectorAll('div.js-collection-tabs__products-container');
const buttons = document.querySelectorAll('.js-collection-tabs__container-buttons button');
const activeTab = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const elemId = event.target.id;
    buttons.forEach((button) => {
      if (button.id === elemId) {
        return button.classList.add('collection-tabs__button_active');
      }

      return button.classList.remove('collection-tabs__button_active');
    });

    elements.forEach((element) => {
      if (element.id === elemId) {
        return (element.style.display = 'flex');
      }

      return (element.style.display = 'none');
    });
  });
});

const setActiveTab = (activeElement) => {
  elements.forEach((elem, index) => {
    elem.style.display = index === activeElement ? 'flex' : 'none';
  });

  buttons.forEach((elem, index) => {
    if (index === activeElement) {
      return elem.classList.add('collection-tabs__button_active');
    }

    return elem.classList.remove('collection-tabs__button_active');
  });
};

setActiveTab(activeTab);
