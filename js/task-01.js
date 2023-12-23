// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categoriesElement = document.getElementById("categories");
console.log(`Numbers of categories: ${categoriesElement?.children.length}`);

const itemElements = document.querySelectorAll(".item");
itemElements.forEach((item) => {
  const firstItemText = item.firstElementChild.innerText;
  console.log(`Category: ${firstItemText}`);
  const lastItemChildrenLength = item.lastElementChild.children.length;
  console.log(`Elements: ${lastItemChildrenLength}`);
});


// const categoriesElement = document.querySelector("#catgories");
// console.log(`Numbers of categories: ${categoriesElement?.children.length}`);

// const itemElements = document.querySelectorAll(".item");
// itemElements.forEach((item) => {
//   const firstItemText = item.firstElementChild.innerText;
//   console.log(`Category: ${firstItemText}`);
//   const lastItemChildrenLength = item.lastElementChild.children.length;
//   console.log(`Elements: ${lastItemChildrenLength}`);
// });