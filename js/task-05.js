const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', inputText);

 function inputText (evt){
if (input.value.trim() === ""){
    span.textContent = "Anonimous"
}else{ 
    span.textContent = input.value;
};
 }
