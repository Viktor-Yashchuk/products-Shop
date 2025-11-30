import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchAllProducts, fetchCategories, fetchProductsByCategory, fetchProductsBySearch } from './products-api';
import { clearProduct, renderCategories, renderProducts } from './render-function';
import { activeFirstBtn, changeActiveBtn } from './helpers';
import { refs } from './refs';

export const initCategories = async () => {
  try {
    const categories = await fetchCategories();
    renderCategories(['All', ...categories]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Oops, something went wrong!' });
  }
};

export const initProducts = async () => {
  try {
    const { products } = await fetchAllProducts(1);
    renderProducts(products)
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Oops, something went wrong!' })
  }
};

export const getProductsByCategory = async (e) => {
  if (e.target.nodeName !== 'BUTTON') return;
  const category = e.target.textContent;
  clearProduct();
  changeActiveBtn(e.target);
  refs.divNotFound.classList.remove('not-found--visible');
  try {
    if (category === 'All') {
      const { products } = await fetchAllProducts(1);
      renderProducts(products);
    } else {
      const { products } = await fetchProductsByCategory(category);
      if (products.length === 0) {
        refs.divNotFound.classList.add('not-found--visible');
      }
      renderProducts(products);
    }
  } catch (error) {
    console.log(error);
  }
}

export const getProductsBySearch = async (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.searchValue.value.trim();
  if(inputValue === ""){
    iziToast.warning({message: "enter something for search"});
    return;
  }
  try {
    const data = await fetchProductsBySearch (inputValue);
    console.log(data);
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Oops, something went wrong!' })
  }
}

