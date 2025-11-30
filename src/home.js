import { getProductsByCategory, initCategories, initProducts } from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
initCategories();
initProducts();

refs.categoryList.addEventListener('click', getProductsByCategory);