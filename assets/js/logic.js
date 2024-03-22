const modeToggleBtn = document.querySelector('.mode-toggle');

modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});