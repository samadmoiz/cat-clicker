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

const catsDiv = document.querySelector('.cats');

function attachListener(catDom) {
  let count = 0;
  const imgBtn = catDom.querySelector('.cat__image');
  imgBtn.addEventListener('click', function() {
    count += 1;
    const countDiv = catDom.querySelector('.cat__count')
    countDiv.textContent = `Count: ${count}`;
  })
}

cats.forEach(function (cat, i) {
  const catDiv = document.createElement('div');
  catDiv.classList.add('cat');

  const markup = `
    <h3>${cat.name}</h3>
    <img class="cat__image" src="${cat.src}" />
    <div class="cat__count">Count: 0</div>
  `;
  catDiv.innerHTML = markup;
  catsDiv.appendChild(catDiv);

  attachListener(catDiv);
})
