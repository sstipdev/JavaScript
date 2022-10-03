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
