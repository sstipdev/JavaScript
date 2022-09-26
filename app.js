const btn = document.getElementsByClassName("navbar-toggler")[0];

const handleClick = () => {
  const ul = document.getElementsByClassName("list-group")[0];
  ul.classList.toggle("show");
};

btn.addEventListener("click", handleClick);
