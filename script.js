let items = document.querySelectorAll('div');

items.forEach((e) => {
  e.addEventListener('mouseover', () => {
    e.style.backgroundColor = 'blue';
  });
  e.addEventListener('mouseout', () => {
    e.style.backgroundColor = 'gray';
  });
});
