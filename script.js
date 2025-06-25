const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const DungruiiiBtn = document.querySelector(".yes-btn");
const kóBtn = document.querySelector(".no-btn");

DungruiiiBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, T Yeuuu M Vclinn";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

kóBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  kóBtn.style.left = randomX + "px";
  kóBtn.style.top = randomY + "px";
});
