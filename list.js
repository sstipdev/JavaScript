const firstTitle = document.querySelectorAll(".card-body h5")[0];
const firstPrice = document.querySelectorAll(".card-body p")[0];

const secondTitle = document.querySelectorAll(".card-body h5")[1];
const secondPrice = document.querySelectorAll(".card-body p")[1];

const thirdTitle = document.querySelectorAll(".card-body h5")[2];
const thirdPrice = document.querySelectorAll(".card-body p")[2];

const fourTitle = document.querySelectorAll(".card-body h5")[3];
const fourPrice = document.querySelectorAll(".card-body p")[3];

const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
  { id: 3, price: 123, title: "헐헐" },
];

console.log(products);

const test = document.querySelectorAll(".card-body").length;

for (let i = 0; i < test; i++) {
  const productsTitle = document.querySelectorAll(".card-body h5")[i];
  const productsPrice = document.querySelectorAll(".card-body p")[i];
  productsTitle.innerText = `상품명 : ${products[i].title}`;
  productsPrice.innerText = `가격 : ${products[i].price} 원`;
}

// 아래 코드를 반복문으로 했을때의 상기코드가 됨.

// firstTitle.innerText = `상품명 : ${products[0].title}`;
// firstPrice.innerText = `가격 : ${products[0].price} 원`;

// secondTitle.innerText = `상품명 : ${products[1].title}`;
// secondPrice.innerText = `가격 : ${products[1].price} 원`;

// thirdTitle.innerText = `상품명 : ${products[2].title}`;
// thirdPrice.innerText = `가격 : ${products[2].price} 원`;

// fourTitle.innerText = `상품명 : ${products[3].title}`;
// fourPrice.innerText = `가격 : ${products[3].price} 원`;
