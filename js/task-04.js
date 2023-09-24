const counter = document.querySelector('#counter');
const btnDecrement = document.querySelector('button[data-action = "decrement"]');
const btnIncrement = document.querySelector('button[data-action = "increment"]');
let counterValue = document.querySelector('#value');

btnDecrement.addEventListener('click', decrementFoo);

btnIncrement.addEventListener('click', IncrementFoo);

let step = 0;

function decrementFoo (){
step -= 1;
counterValue.textContent = step;
// console.log(counterValue);
};

function IncrementFoo (){
    step += 1;
    counterValue.textContent = step;
    // console.log(counterValue);
    };






