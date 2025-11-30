import { refs } from './refs';

export const renderCategories = data => {
  const markup = data
    .map(
      cat => `<li class="categories__item">
   <button class="categories__btn" type="button">${cat}</button>
 </li>`
    )
    .join('');

  refs.categoryList.innerHTML = markup;
};
