import"./assets/styles-JE8YjOlG.js";import{a as c,i as r}from"./assets/vendor-4yCzdkXl.js";const g="https://dummyjson.com/",e={CATEGORIES:"products/category-list",PRODUCTS:"products"};c.defaults.baseURL=g;const m=async()=>{const{data:t}=await c(`${e.CATEGORIES}`);return t},_=async t=>{const{data:s}=await c(`${e.PRODUCTS}`,{params:{limit:12,skip:(t-1)*12}});return s},a={categoryList:document.querySelector(".categories"),productList:document.querySelector(".products")},y=t=>{const s=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>`).join("");a.categoryList.innerHTML=s},b=t=>{const s=t.map(({id:o,thumbnail:n,tags:i,title:p,brand:d,category:l,price:u})=>`<li class="products__item" data-id="${o}">
    <img class="products__image" src="${n}" alt="${i}"/>
    <p class="products__title">${p}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${d}</span></p>
    <p class="products__category">Category: ${l}</p>
    <p class="products__price">Price: ${u}$</p>
 </li>
`).join("");a.productList.insertAdjacentHTML("beforeend",s)},$=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},L=async()=>{try{const t=await m();y(["All",...t]),$()}catch(t){console.log(t),r.error({message:"Oops, something went wrong!"})}},S=async()=>{try{const{products:t}=await _(1);b(t)}catch(t){console.log(t),r.error({message:"Oops, something went wrong!"})}};L();S();
//# sourceMappingURL=index.js.map
