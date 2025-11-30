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


export const renderProducts = data => {
  const markup = data
  .map(({id, thumbnail, tags, title, brand, category, price})=> `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${tags}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>
`).join('');
refs.productList.insertAdjacentHTML('beforeend', markup)
}

export const clearProduct = () => {
  refs.productList.innerHTML = '';
}
