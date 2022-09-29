const btn = document.getElementsByClassName("navbar-toggler")[0];
const closeBtn = document.getElementById("close");

const idForm = document.getElementById("id-form");
const pwForm = document.getElementById("pw-form");
const loginBtn = document.getElementById("loginbtn");
const changeBtn = document.getElementById("darklight");

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

btn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", closeModal);
loginBtn.addEventListener("click", clickLogin);

changeBtn.addEventListener("click", handleChangeBtnName);
