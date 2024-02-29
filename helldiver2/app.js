import Game from './Game.js';

const KEYBOARDS = {
  AZERTY: 0,
  QWERTY: 1,
};

const KEYBOARD = KEYBOARDS.AZERTY;

/**
 * @typedef {Object} Stratagem
 * @property {string} name
 * @property {string} icon
 * @property {string} sequence
 */

/**
 * @typedef {Object} Data
 * @property {Object.<string, {name: string, icon: string, stratagems: Stratagem[]}>} sequences
 * @property {Array.Stratagem} missions
 * @property {Stratagem[]} defensives
 * @property {Stratagem[]} supply_backpacks
 * @property {Stratagem[]} supply_weapons
 * @property {Stratagem[]} offensive_orbitals
 * @property {Stratagem[]} offensive_eagle
 */

document.addEventListener('DOMContentLoaded', async () => {
  /**
   * @type {Data}
   */
  const data = await fetch('./data.json').then((res) => res.json());
  console.log(data);

  populateList(data.missions, 'missions');
  populateList(data.defensives, 'defensives');
  populateList(data.supply_backpacks, 'supply_backpacks');
  populateList(data.supply_weapons, 'supply_weapons');
  populateList(data.offensive_orbitals, 'offensive_orbitals');
  populateList(data.offensive_eagle, 'offensive_eagle');

  const game = new Game();

  game.addStr('u');
});

/**
 * @param {string} sequence
 */
async function setCurrentSequence(sequence) {
  // sequence is udrl
  // should be split into individual characters
  // and then each character should be replaced with an image
  // then the images should be appended to the sequence container
  const sequenceContainer = document.getElementById('sequence-container');
  sequenceContainer.innerHTML = '';
  for (const direction of sequence.split('')) {
    const img = document.createElement('img');
    img.src = `./assets/arrow_${direction}.webp`;
    sequenceContainer.appendChild(img);
  }
}

/**
 * @param {Stratagem[]} array
 * @param {string} category
 */
function populateList(array, category) {
  const list = document.getElementById('strgm-list');
  const ul = document.createElement('ul');
  ul.setAttribute('id', `category-${category}`);
  const li = document.createElement('li');
  li.setAttribute('id', `category-${category}-item`);
  li.className = 'strgm-category';
  const _img = document.createElement('img');
  _img.src = `./assets/icons/category_${category}.webp`;
  _img.addEventListener('error', replaceMissingImageWithPlaceholder);
  li.appendChild(_img);
  li.appendChild(document.createElement('p')).innerText = category;
  ul.appendChild(li);
  list.appendChild(ul);

  console.log(array);

  for (const item of array) {
    const list = document.querySelector(`ul#category-${category}`);
    const li = document.createElement('li');
    li.setAttribute('id', item.id);
    const _img = document.createElement('img');
    _img.src = item.icon;
    _img.addEventListener('error', replaceMissingImageWithPlaceholder);
    li.appendChild(_img);
    li.appendChild(document.createElement('p')).innerText = item.name;

    list.appendChild(li);
  }
}

function replaceMissingImageWithPlaceholder(event) {
  event.target.src = './assets/icons/placeholder.webp';
}

document.addEventListener('keypress', (event) => {
  console.log(event);
  switch (event.key.toLowerCase()) {
    case KEYBOARD === 0 ? 'z' : 'w':
      console.log('up');
      break;
    case 's':
      console.log('down');
      break;
    case 'a':
      console.log('left');
      break;
    case 'd':
      console.log('right');
      break;
  }
});
