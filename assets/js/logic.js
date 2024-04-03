// Const and function for light and dark mode
const modeToggleBtn = document.querySelector('.mode-toggle');

modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});