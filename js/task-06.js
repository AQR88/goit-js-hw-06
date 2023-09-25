const input = document.querySelector('#validation-input');

input.addEventListener('blur', focusOff);

function focusOff (evt){
    
const inputLength = input.value.length;

const dataLength = Number(input.dataset.length);

input.classList.remove("valid","invalid");

    if (inputLength === dataLength){
        input.classList.add("valid")
    }else if(inputLength !== dataLength){
        input.classList.add("invalid");
    };
   
};
