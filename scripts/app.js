/*const cats = [
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
*/


// const model = {
//   init() {
//     this.data = [];
//     this.data = this.data.concat([
//       { src: 'images/cat.jpg',
//         name: 'Moiz',
//         count: 0,
//         active: false },
//       { src: 'images/cat1.jpg',
//         name: 'Wes',
//         count: 0,
//         active: false }
//     ])
//   },
//   getCats() {
//     return this.data;
//   },
//   upCount(i) {
//     this.data[i].count++;
//   }
// }

// const octopus = {
//   init() {
//     model.init();
//     listView.init();
//     resultView.init();
//   },
//   getCats() {
//     return model.getCats();
//   },
//   getCat(i) {
//     return this.getCats()[i];
//   },
//   upCountByCat(cat) {
//     this.getCats().find((c) => c === cat).count += 1;
//   },
//   getActiveCat() {
//     return this.getCats().find(function(cat) {
//       return cat.active;
//     })
//   },
//   makeActive(index) {
//     this.getCats()  .forEach(function(cat, i) {
//       if (i === index) {
//         cat.active = true;
//       } else {
//         cat.active = false;
//       }
//     })
//   }
// }

// const listView = {
//   init() {
//     this.catList = document.querySelector('.cats__list');

//     // the data
//     const cats = octopus.getCats();

//     // the result pane view
//     const catImageView = document.querySelector('.cats__image');
//     const catTitleView = document.querySelector('.cats__name');
//     const catCountView = document.querySelector('.cats__count');

//     for (const [i, cat] of cats.entries()) {
//       const catItemView = document.createElement('li');
//       catItemView.classList.add('cats__item');
//       catItemView.setAttribute('id', `cat-${i}`)
//       catItemView.appendChild(document.createTextNode(cat.name));
//       this.catList.appendChild(catItemView);

//       catItemView.addEventListener('click', function(index) {
//         return (e) => {
//           catTitleView.textContent = cat.name;
//           catImageView.src = cat.src;
//           catCountView.textContent = `Count: ${cat.count}`;
//           octopus.makeActive(index);
//         }
//       }(i));
//     }

//   },
//   render() {
//   }
// }

// const resultView = {
//   init() {
//     const catImageView = document.querySelector('.cats__image');
//     const catCountView = document.querySelector('.cats__count');

//     catImageView.addEventListener('click', function(e) {
//       const currentCat = octopus.getActiveCat();
//       octopus.upCountByCat(currentCat)
//       catCountView.textContent = `Count: ${currentCat.count}`;
//     });
//     this.render();
//   },
//   render() {
//     const catFirst = document.querySelector('.cats__item').click();
//   }
// }


// octopus.init();

const model = {
  currentCat: null,
  cats: [
      {
          clickCount : 0,
          name : 'Tabby',
          imgSrc : 'images/434164568_fea0ad4013_z.jpg',
          imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
      },
      {
          clickCount : 0,
          name : 'Tiger',
          imgSrc : 'images/4154543904_6e2428c421_z.jpg',
          imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
      },
      {
          clickCount : 0,
          name : 'Scaredy',
          imgSrc : 'images/22252709_010df3379e_z.jpg',
          imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
      },
      {
          clickCount : 0,
          name : 'Shadow',
          imgSrc : 'images/1413379559_412a540d29_z.jpg',
          imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
      },
      {
          clickCount : 0,
          name : 'Sleepy',
          imgSrc : 'images/9648464288_2516b35537_z.jpg',
          imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
      }
  ]
}


const octopus = {
  init() {
    // set our current cat to first cat
    model.currentCat = model.cats[0];


    // set our views to initiliaze
    catView.init();
    listView.init();
  },
  getAllCats() {
    return model.cats;
  },
  getCurrentCat() {
    return model.currentCat;
  },

  // set the current-selected cat to the object passed in
  setCurrentCat(cat) {
    model.currentCat = cat;
  },

  // increment the counter for currently-selected cat
  incrementCounter() {
    model.currentCat.clickCount++;
    catView.render();
  }
}

const catView = {
  init() {
    // store pointers to our DOM elements for easy access later
    this.catNameElem = document.querySelector('.cats__name');
    this.catImageElem = document.querySelector('.cats__image');
    this.catCountElem = document.querySelector('.cats__count');

    // on click incremnet the current cat counter
    this.catImageElem.addEventListener('click', function() {
      octopus.incrementCounter();
    });

    // render the view
    this.render();
  },

  render() {
    const currentCat = octopus.getCurrentCat();
    this.catNameElem.textContent = currentCat.name;
    this.catCountElem.textContent = currentCat.clickCount;
    this.catImageElem.src = currentCat.imgSrc;
  }

}


const listView = {
  init() {
    // store pointers to our DOM elements for easy access later
    this.catListElem = document.querySelector('.cats__list');

    this.render();
  },
  render() {

    // empty our cat list elem
    this.catListElem.innerHTML = '';

    // get all cats
    const cats = octopus.getAllCats();

    // loop over the cats
    for (const [index, cat] of cats.entries()) {

      // make a new li elem
      const catItem = document.createElement('li');
      catItem.classList.add('cats__item');
      catItem.appendChild(document.createTextNode(cat.name));
      this.catListElem.appendChild(catItem);

      // set up a click listener
      catItem.addEventListener('click', function(i, cat) {
        return function(e) {
          octopus.setCurrentCat(cat);
          catView.render();
        }
      }(index, cat));

    }
  }
}


octopus.init();
