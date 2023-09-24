function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body')
const btn = document.querySelector('.change-color');
let spanTxt = document.querySelector('.color');
// console.log(body);

btn.addEventListener('click', colorChange);

function colorChange(){
  const result = getRandomHexColor();
  spanTxt.textContent = result;
  body.style.backgroundColor = result;
  console.log(result);
}

