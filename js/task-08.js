const form = document.querySelector(".login-form");

form.addEventListener("submit", acceptFoo);

function acceptFoo(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value && password.value !== "") {
    console.log(data);
  } else {
    alert(`Потрібно заповнити всі поля`);
  }
  evt.currentTarget.reset();
}
