function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesEl = document.querySelector('#boxes');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }

  boxesEl.append(fragment);
}

function destroyBoxes() {
  const boxesEl = document.querySelector('#boxes');
  boxesEl.innerHTML = '';
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const value = Number.parseInt(inputEl.value, 10);

  if (Number.isNaN(value) || value < 1 || value > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(value);
  inputEl.value = '';
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
