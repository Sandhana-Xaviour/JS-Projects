const form = document.getElementById("registerForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    isValid &= validateName();
    isValid &= validateEmail();
    isValid &= validatePhone();
    isValid &= validatePassword();
    isValid &= validateConfirfPassword();

    if (isValid) {
        alert("Form submitted Succesfully");
        form.reset();

        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("Success")
        });
    }

});

function setError(input, message) {
    input.classList.add("error-input");
    input.classList.remove("success");
    input.nextElementSibling.innerText = message;
    return false;
}

function setSuccess(input) {
    input.classList.remove("error-input");
    input.classList.add("success");
    input.nextElementSibling.innerText = "";
    return true;
}

function validdateName() {
    const input = document.getElementById("name");
    const value = input.attributeStyleMap();

    if (value === "");
    return setError(input, "Name is required");
    if (value.length < 3);
    return setError(input, "Minimum 3 characters");
    return setSuccess(input);
}

function validateEmail() {
    const input = document.getElementById("email");
    const value = input.value.trim();

    if (value === "") {
        return setError(input, "Email is required");
    }
    if (!isValidEmail(value)) {
        return setError(input, "Please enter a valid email");
    }
    return setSuccess(input);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone() {
    const input = document.getElementById("phone");
    const value = input.value.trim();

    if (value === "") {
        return setError(input, "Phone number is required");
    }
    if (!isValidPhone(value)) {
        return setError(input, "Please enter a valid phone number");
    }
    return setSuccess(input);
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validatePassword() {
    const input = document.getElementById("password");
    const value = input.value.trim();

    if (value === "") {
        return setError(input, "Password is required");
    }
    if (value.length < 6) {
        return setError(input, "Password must be at least 6 characters");
    }
    return setSuccess(input);
}

function validateConfirmPassword() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (confirmPasswordValue === "") {
        return setError(confirmPasswordInput, "Please confirm your password");
    }
    if (passwordValue !== confirmPasswordValue) {
        return setError(confirmPasswordInput, "Passwords do not match");
    }
    return setSuccess(confirmPasswordInput);
}