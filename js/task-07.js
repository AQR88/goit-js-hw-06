const inputChange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputChange.addEventListener('input', fontChange);

function fontChange (evt){
    const inputValue = evt.currentTarget.value;
spanText.style.fontSize = `${inputValue}px`;
};

