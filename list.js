const divContainer = document.querySelector(".container");
const divRow = document.querySelector(".row");
const plusBtn = document.querySelector(".btn-danger");

const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

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
}

let click = 0;

const getInfoItem = (data) => {
  for (let i = 0; i < data.length; i++) {
    const divCol = document.createElement("div");
    const img = document.createElement("img");
    const titleH5 = document.createElement("h5");
    const priceP = document.createElement("p");
    divCol.classList.add("col-sm-4");
    img.src = "https://via.placeholder.com/600";
    img.classList.add("w-100");
    titleH5.innerText = `상품명 : ${data[i].title}`;
    priceP.innerText = `가격 : ${data[i].price} 원`;
    divCol.appendChild(img);
    divCol.appendChild(titleH5);
    divCol.appendChild(priceP);
    divRow.appendChild(divCol);
  }
};

const handleClick = () => {
  click = click + 1;

  // 제이쿼리 코드

  // if (click < 2) {
  //   $.get("https://codingapple1.github.io/js/more1.json")
  //     .done((data) => getInfoItem(data))
  //     .fail((error) => {
  //       console.log("데이터를 못 불러왔습니다.", error);
  //     });
  // } else {
  //   $.get("https://codingapple1.github.io/js/more2.json")
  //     .done((data) => getInfoItem(data))
  //     .fail((error) => {
  //       console.log("실패했습니다.", error);
  //     });
  // }
  // if (click === 2) {
  //   plusBtn.hidden = true;
  // }
  // ---------------------------------------------------------------------------

  // 바닐라 자바스크립트 코드

  if (click < 2) {
    fetch("https://codingapple1.github.io/js/more1.json")
      .then((res) => res.json())
      .then((data) => getInfoItem(data))
      .catch((error) => console.log("에러 발생", error));
  } else {
    fetch("https://codingapple1.github.io/js/more2.json")
      .then((res) => res.json())
      .then((data) => getInfoItem(data))
      .catch((error) => console.log("에러 발생", error));
  }
  if (click === 2) {
    plusBtn.hidden = true;
  }
};

plusBtn.addEventListener("click", handleClick);
