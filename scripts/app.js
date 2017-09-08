const cats = [
  {
    src: 'images/cat.jpg',
    name: 'Moiz'
  },
  {
    src: 'images/cat1.jpg',
    name: 'Wes'
  }
];

const catList = document.querySelector('.cats__list');
const catImage = document.querySelector('.cats__image');
const catTitle = document.querySelector('.cats__name');
const catCount = document.querySelector('.cats__count');

cats.forEach(function(cat, i) {
  let count = 0;
  const catItem = document.createElement('li');
  catItem.classList.add('cats__item');
  catItem.appendChild(document.createTextNode(cat.name));
  catList.appendChild(catItem);

  catItem.addEventListener('click', function(e) {
    catList
    .querySelectorAll('.cats__item')
    .forEach(function(catItem) {
      catItem.classList.remove('cats__item--active')
    })
    catItem.classList.add('cats__item--active');
    count += 1;
    catImage.src = cat.src;
    catCount.textContent = `Count: ${count}`;
  })
});
