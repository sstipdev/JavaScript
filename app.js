const btn = document.getElementsByClassName("navbar-toggler")[0];
const closeBtn = document.getElementById("close");

const idForm = document.getElementById("id-form");
const pwForm = document.getElementById("pw-form");
const loginBtn = document.getElementById("loginbtn");
const changeBtn = document.getElementById("darklight");

const hideAlert = document.querySelector(".alert");

const slideBtn1 = document.querySelector(".slide-1");
const slideBtn2 = document.querySelector(".slide-2");
const slideBtn3 = document.querySelector(".slide-3");
const slideNext = document.querySelector(".slide-next");
const slideBack = document.querySelector(".slide-back");

const handleClick = () => {
  const ul = document.getElementsByClassName("list-group")[0];
  ul.classList.toggle("show-menu");
};

const closeModal = () => {
  const modalForm = document.querySelector(".black-bg");
  modalForm.classList.toggle("modal-hide");
};

const clickLogin = (event) => {
  const idValue = idForm.value;
  const pwValue = pwForm.value;
  let reg_name4 = /[A-Z]/g; // 영문 대문자만
  if (!/\S+@\S+.\S+/.test(idForm.value)) {
    alert("와");
  } else {
    alert("헐");
  }
  if (reg_name4.test(pwForm.value)) {
    alert("비번에 대문자가있다");
  } else {
    alert("eㅐ문자가 없네");
  }
  if (idValue === "" && pwValue === "") {
    event.preventDefault();
    alert("아이디와 비밀번호가 공백 입니다.");
  } else if (idValue === "" || idValue.length < 3) {
    event.preventDefault();
    alert("아이디가 공백또는 3자리 미만 입니다.");
  } else if (pwValue === "" || pwValue.length < 3) {
    event.preventDefault();
    alert("비밀번호가 공백또는 3자리 미만 입니다.");
  }
};

let click = 0;
const handleChangeBtnName = () => {
  click += 1;
  if (click % 2 === 1) {
    changeBtn.innerText = "Light 🔄";
  } else {
    changeBtn.innerText = "Dark 🔄";
  }
  console.log(click);
};

// hideAlert.innertext = `${--count}초 초 이내 구매시 사은품 증정!

let count = 5;
let clear = 6;
const hideAlertBox = () => {
  const spantext = document.querySelector(".time");

  const timePut = setInterval(() => {
    count -= 1;
    spantext.innerText = count;
    if (count === 0) {
      hideAlert.hidden = true;
      clearTimeout(timePut);
    }
  }, 1000);
};

const handleSlide1 = () => {
  const container = document.querySelector(".slide-container");
  container.style.transform = "translateX(0)";
};

const handleSlide2 = () => {
  const container = document.querySelector(".slide-container");
  container.style.transform = "translateX(-100vw)";
};

const handleSlide3 = () => {
  const container = document.querySelector(".slide-container");
  container.style.transform = "translateX(-200vw)";
};

let nowCount = 1;
let place = 0;

const handleNext = () => {
  const container = document.querySelector(".slide-container");
  if (nowCount === 1) {
    place -= 100;
    container.style.transform = `translateX(${place}vw)`;
  }
};

const handleBack = () => {
  const container = document.querySelector(".slide-container");
  if (nowCount === 1) {
    container.style.transform = "translateX(-200vw)";
    nowCount += 1;
  } else if (nowCount === 2) {
    container.style.transform = "translateX(-100vw)";
    nowCount += 1;
  } else if (nowCount === 3) {
    container.style.transform = "translateX(0)";
  }
};

const convertTimeMs = (min, sec) => {
  min = min * 60;
  const total = min + sec;
  return total * 1000;
};

const sale = (money, boolean) => {
  if (boolean === false) {
    money = Math.floor(money * 0.9);
  } else {
    let firstmoney = money * 0.9;
    money = Math.floor(firstmoney * 0.85);
  }
  return money;
};

console.log(sale(10, true));

btn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", closeModal);
loginBtn.addEventListener("click", clickLogin);

changeBtn.addEventListener("click", handleChangeBtnName);

slideBtn1.addEventListener("click", handleSlide1);
slideBtn2.addEventListener("click", handleSlide2);
slideBtn3.addEventListener("click", handleSlide3);
slideNext.addEventListener("click", handleNext);
slideBack.addEventListener("click", handleBack);
