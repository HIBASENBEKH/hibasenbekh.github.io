document.getElementById('btn1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for now
    validateForm();
});
function validateForm() {
    // Retrieve form values
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const password = document.getElementById('password').value;

    const hasNumber = /\d/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);


            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\d{10}$/;
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            const emailError = document.getElementById('emailError');
            const phoneError = document.getElementById('phoneError');
            const confirmEmailError = document.getElementById('confirmEmailError');
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');

            if (!emailRegex.test(email)) {
                emailError.textContent = 'Invalid email address';
            } else {
                emailError.textContent = '';
            }

            if (!phoneRegex.test(phone)) {
                phoneError.textContent = 'Invalid phone number (10 digits expected)';
            } else {
                phoneError.textContent = '';
            }

            if (email !== document.getElementById('confirm-email').value) {
                confirmEmailError.textContent = 'Emails do not match';
            } else {
                confirmEmailError.textContent = '';
            }

            if (password.length < 8) {
                passwordStrength.textContent = 'Weak';
                passwordStrength.className = 'password-strength password-weak';
            } else if (password.length < 12) {
                if (hasNumber && (hasLower || hasUpper)) {
                    passwordStrength.textContent = 'Medium';
                    passwordStrength.className = 'password-strength password-medium';
                } else {
                    passwordStrength.textContent = 'Poor';
                    passwordStrength.className = 'password-strength password-weak';
                }
            } else {
                if (hasNumber && hasLower && hasUpper) {
                    passwordStrength.textContent = 'Strong';
                    passwordStrength.className = 'password-strength password-strong';
                } else {
                    passwordStrength.textContent = 'Medium';
                    passwordStrength.className = 'password-strength password-medium';
                }
            }
            if (password !== document.getElementById('confirm-password').value) {
                confirmPasswordError.textContent = 'password do not match';
            } else {
                confirmPassordError.textContent = '';
            }

        }

