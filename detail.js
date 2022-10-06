const btn = $(".tab-button");
const content = $(".tab-content");
const lgh = $(".tab-button").length;

const noteList = ["홍민", "영희", "철수", "재석"];

function getUser(user) {
  for (let i = 0; i < noteList.length; i++) {
    if (user == noteList[i]) {
      console.log("찾았습니다 !");
    }
  }
}

function multiple() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      const result = i * j;
      if (j <= 9) {
        console.log(`${i} * ${j} = ${result}`);
      }
    }
  }
}

// const array = [10, 20, 30, 40];
// const total = array.reduce((a, b) => a + b);

// const num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = num10.reduce((a, b) => a + b);

function grade(arr, b) {
  var result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  if (result / arr.length < b) {
    console.log("올랐네요");
  } else {
    console.log("같거나 떨어졌네요 재수추천");
  }
}

grade([2, 3, 4], 10); //올랐네요 출력될듯
// const shirtBtn = document.querySelectorAll(".form-select")[0];

// const shirttest = (e) => {
//   const value = e.target.value;
//   const hideShirtOption = document.querySelectorAll(".form-select")[1];
//   const hideHatOption = document.querySelectorAll(".form-select")[2];
//   if (value === "셔츠") {
//     hideShirtOption.classList.remove("hide-option");
//   } else {
//     hideShirtOption.classList.add("hide-option");
//   }
//   if (value === "모자") {
//     hideHatOption.classList.remove("hide-option");
//   } else {
//     hideHatOption.classList.add("hide-option");
//   }
// };
// shirtBtn.addEventListener("input", shirttest);

// for (let i = 0; i < lgh; i++) {
//   btn.eq(i).on("click", function () {
//     btn.removeClass("orange");
//     btn.eq(i).addClass("orange");
//     content.removeClass("show");
//     content.eq(i).addClass("show");
//   });
// }

$(".list").click(function (event) {
  tab(event.target.dataset.id);
});

function tab(number) {
  btn.removeClass("orange");
  btn.eq(number).addClass("orange");
  content.removeClass("show");
  content.eq(number).addClass("show");
}

const itemName = document.querySelector(".itemname");
const itmePrice = document.querySelector(".itemprice");
const itmeSail = document.querySelector(".itemsail");

const car = {
  name: "소나타",
  price: [5000, 3000, 4000],
  sail: 10,
};

itemName.innerHTML = car.name;
itmePrice.innerHTML = car.price[0];
itmeSail.innerHTML = `${car.sail} % 할인중`;
