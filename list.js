const divContainer = document.querySelector(".container");
const divRow = document.querySelector(".row");
const plusBtn = document.querySelector(".btn-danger");

const choiceMoneyBtn = document.getElementById("money");
const textSort = document.getElementById("textsort");
const lowPrice = document.getElementById("lowprice");

const array = [1, 5, 3, 6, 2, 199];
const array2 = ["g", "b", "a", "e"];

// array.filter는 원본을 변형하지 않음 sort는 변형하나 filter는 변형하지 않기 때문에 새 변수에 대입을 해야함.

// const newArray = array.filter((a) => {
//   return a < 4;
// });
// console.log(newArray);

// const newArray2 = array.map((a) => {
//   return a < 4;
// });
// console.log(newArray2);

// 정렬은되나, sort는 문자순으로 정렬 해주기 때문 199가 맨뒤에 나타나지가 않음. 숫자로 하고싶을 경우 콜백함수를 호출하여 반환 해준다.

let click = 0;
let textChangeBtn = true;

const products = [
  // { id: 0, price: 70000, title: "bbbbbbbbbbb" },
  // { id: 1, price: 50000, title: "aaaaaaaaaaa" },
  // { id: 2, price: 60000, title: "ccccccccccc" },

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

const handleMoneyClick = () => {
  if (textChangeBtn) {
    products.sort((a, b) => {
      return a.price - b.price;
    });
    divRow.innerHTML = "";
    getInfoItem(products);
    choiceMoneyBtn.innerText = "높은 금액순";
    textChangeBtn = false;
  } else {
    products.sort((a, b) => {
      return b.price - a.price;
    });
    divRow.innerHTML = "";
    getInfoItem(products);
    choiceMoneyBtn.innerText = "낮은 금액순";
    textChangeBtn = true;
  }
};

const handleTextSort = () => {
  if (textChangeBtn) {
    products.sort((a, b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });

    divRow.innerHTML = "";
    getInfoItem(products);
    textSort.innerText = "다나가순";
    textChangeBtn = false;
  } else {
    divRow.innerHTML = "";
    products.reverse();
    getInfoItem(products);
    textSort.innerText = "가나다순";
    textChangeBtn = true;
  }
};

const handleLowPrice = () => {
  if (textChangeBtn) {
    const newFilter = products.filter((a) => {
      return a.price < 60000;
    });
    divRow.innerHTML = "";
    getInfoItem(newFilter);
    lowPrice.innerText = "금액 원래대로";
    textChangeBtn = false;
  } else {
    divRow.innerHTML = "";
    getInfoItem(products);
    lowPrice.innerText = "6만원 이하보기";
    textChangeBtn = true;
  }
};

plusBtn.addEventListener("click", handleClick);
choiceMoneyBtn.addEventListener("click", handleMoneyClick);
textSort.addEventListener("click", handleTextSort);
lowPrice.addEventListener("click", handleLowPrice);
