const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

const divContainer = document.querySelector(".container");
const divRow = document.querySelector(".row");

for (let i = 0; i < products.length; i++) {
  const divCol = document.createElement("div");
  const img = document.createElement("img");
  const titleH5 = document.createElement("h5");
  const priceP = document.createElement("p");

  divCol.classList.add("col-sm-4");
  img.src = "https://via.placeholder.com/600";
  img.classList.add("w-100");
  titleH5.innerText = `상품명 : ${products[i].title}`;
  priceP.innerText = `가격 : ${products[i].price} 원`;

  divCol.appendChild(img);
  divCol.appendChild(titleH5);
  divCol.appendChild(priceP);

  divRow.appendChild(divCol);

  divContainer.appendChild(divRow);
}
