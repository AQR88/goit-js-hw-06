const validation = document.querySelector('input[data-length="6"]');
const input = document.querySelector('#validation-input');

input.style.border = "3px solid ";

input.addEventListener('blur', focusOff);

function focusOff (evt){
const inputLength = input.value.length;
const dataLength = Number(validation.dataset.length);

    if (inputLength === dataLength){
        input.style.borderColor = "#4caf50";
    }else if(inputLength !== dataLength){
        input.style.borderColor = "#f44336";
    };
    
};
