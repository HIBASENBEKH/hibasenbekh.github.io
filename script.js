document.getElementById('btn1').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission for now
  validateForm();
});

function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('Password').value;
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Email validation
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      emailError.textContent = 'Invalid email address';
      return;
  } else {
      emailError.textContent = '';
  }

  // Password validation (minimum 8 characters, at least one uppercase, one lowercase, and one number)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
      passwordError.textContent = 'Invalid Password';
      return;
  } else {
      passwordError.textContent = '';
  }

  // If both email and password are valid, you can submit the form here
  document.getElementById('form1').submit();
}
   