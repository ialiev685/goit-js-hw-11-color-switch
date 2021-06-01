import { colors } from "./colors.js";

const bodyEl = document.body;
let timerId = null;

const refs = {
  btnStartEl: document.querySelector("[data-action='start']"),
  btnStopEl: document.querySelector("[data-action='stop']"),
};

refs.btnStartEl.addEventListener("click", onButtonStart);
refs.btnStopEl.addEventListener("click", onButtonStop);

function onButtonStart() {
  refs.btnStartEl.disabled = "disabled";
  timerId = setInterval(changeBackgroundColor, 1000);
}

function onButtonStop() {
  refs.btnStartEl.disabled = "";
  clearInterval(timerId);
}

function changeBackgroundColor() {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  bodyEl.style.backgroundColor = colors[randomColor];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
