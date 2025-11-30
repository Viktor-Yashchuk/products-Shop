export const activeFirstBtn = () => {
  const firstBtn = document.querySelector('.categories__btn');
  if (firstBtn) {
    firstBtn.classList.add('categories__btn--active');
  }
};

export const changeActiveBtn = (button) => {
  const allBtn = document.querySelectorAll('.categories__btn--active');
  allBtn.forEach(btn => btn.classList.remove('categories__btn--active'));
  button.classList.add('categories__btn--active');
};
