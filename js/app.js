const links = document.querySelectorAll(".menu ul li");

const changeColor = (e) => {
  let link = e.target;
  let linkCurrent = document.querySelector(".is-active");

  linkCurrent.classList.remove("is-active");
  link.classList.add("is-active");
};

links.forEach((link) => link.addEventListener("click", changeColor));
