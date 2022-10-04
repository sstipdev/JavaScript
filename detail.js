const btn = $(".tab-button");
const content = $(".tab-content");
const lgh = $(".tab-button").length;

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
