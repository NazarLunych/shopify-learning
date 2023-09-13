const onClick = (event) => {
  const buttonId = event.target.id;
  const elements = document.querySelectorAll('div.products-wrapper')
  const buttons = document.querySelectorAll(`#collection-tabs-id button`);

  buttons.forEach((button) => {
    const isActive = button.id === buttonId;

    button.style.color = isActive ? '#EB8426' : '';
    button.style.borderBottomColor = isActive ? '#EB8426' : '';
    button.style.paddingBottom = isActive ? '22px' : '';
  })

  elements.forEach((element) => {
    if (element.id === buttonId) {
      return element.style.display = 'flex';
    }

    return element.style.display = 'none';
  });
}