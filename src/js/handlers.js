import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';
import { activeFirstBtn } from './helpers';

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
