const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const trimmed = inputEl.value.trim();
  outputEl.textContent = trimmed === '' ? 'Anonymous' : trimmed;
});
