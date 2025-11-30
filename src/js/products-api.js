// https://dummyjson.com/products?limit=12&skip=10 - отримати всі продукти з пагінацією
// https://dummyjson.com/products/1 - отримати один продукт по ID
// https://dummyjson.com/products/search?q=nail - пошук продукту по ключовому слову
// https://dummyjson.com/products/category-list - отримати список категорій продуктів
// https://dummyjson.com/products/category/smartphones - отримати продукти по категорії

import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
  return data;
};



export const fetchAllProducts = async (currentPage) => {
  const {data} = await axios(`${ENDPOINTS.PRODUCTS}`,
    {params: {
limit: 12,
skip: (currentPage - 1) * 12,
    }}
  )
return data
}

export const fetchProductsByCategory = async (category) => {
    const { data } = await axios(`${ENDPOINTS.BY_CATEGORY}${category}`);
    return data;
}