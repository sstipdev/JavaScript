const btn = $(".tab-button");
const content = $(".tab-content");
const lgh = $(".tab-button").length;

const objasd = {
  name: "와",
  age: 20,
};

for (const key in objasd) {
  console.log(objasd[key]);
}

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
