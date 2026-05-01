const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const payload = {
    email,
    password,
  };

  console.log(payload);
  formEl.reset();
});
