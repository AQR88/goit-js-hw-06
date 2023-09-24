const form = document.querySelector(".login-form");

form.addEventListener("submit", acceptFoo);

function acceptFoo(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value && password.value !== "") {
    console.log(`email: ${email.value}`, `\n\npassword:${password.value}`);
  } else {
    alert(`Потрібно заповнити всі поля`);
  }
  form.reset();
}

