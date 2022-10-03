const btn = $(".tab-button");
const content = $(".tab-content");
const lgh = $(".tab-button").length;

for (let i = 0; i < lgh; i++) {
  btn.eq(i).on("click", function () {
    btn.removeClass("orange");
    btn.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
  });
}

btn.eq(1).on("click", function () {
  btn.removeClass("orange");
  btn.eq(1).addClass("orange");
  content.removeClass("show");
  content.eq(1).addClass("show");
});

btn.eq(2).on("click", function () {
  btn.removeClass("orange");
  btn.eq(2).addClass("orange");
  content.removeClass("show");
  content.eq(2).addClass("show");
});
