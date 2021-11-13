// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json); 
    let products = data.products;
 return products; // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json) { 
  clearProducts();
  let products = parseProducts(json);
  length = products.length; // Запишите в переменную length значение свойства products.length
 for (let i = 0; i < length; i += 1) {
   addProduct(products[i]);
 }   
} 
