import"./assets/styles-JE8YjOlG.js";import{a as s,i as a}from"./assets/vendor-4yCzdkXl.js";const c="https://dummyjson.com/",r={CATEGORIES:"products/category-list"};s.defaults.baseURL=c;const i=async()=>{const{data:t}=await s(`${r.CATEGORIES}`);return t},n={categoryList:document.querySelector(".categories")},g=t=>{const e=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>`).join("");n.categoryList.innerHTML=e},l=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},m=async()=>{try{const t=await i();g(["All",...t]),l()}catch(t){console.log(t),a.error({message:"Oops, something went wrong!"})}};m();
//# sourceMappingURL=index.js.map
