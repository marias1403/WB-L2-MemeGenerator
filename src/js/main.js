import '../assets/styles/index.css';

const selectBox = document.querySelector('.custom-select .select-box');
const options = document.querySelectorAll('.custom-select .options .option');
const hiddenSelect = document.querySelector('.custom-select .hidden-select');

selectBox.addEventListener('click', () => {
  selectBox.classList.toggle('active');
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    selectBox.querySelector('.selected-option').textContent = option.textContent;
    hiddenSelect.value = option.getAttribute('data-value');
    selectBox.classList.remove('active');
  });
});
