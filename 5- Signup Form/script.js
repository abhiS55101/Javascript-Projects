const submitBtn = document.getElementById("btn");
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const nameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const errorImg1 = document.getElementById("errorImg1");
const errorImg2 = document.getElementById("errorImg2");
const errorImg3 = document.getElementById("errorImg3");
const errorImg4 = document.getElementById("errorImg4");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if( validateName() && validateLastName() && validateEmail() && validatePassword()) {
        alert ("Submitted Successfully");

    }
    // validateName();
    // validateLastName();
    // validateEmail();
    // validatePassword();
    // console.log("clicked");
})

function validateName() {

    if (firstName.value.length == 0) {
        nameError.innerHTML = "First Name cannot be empty";
        errorImg1.style.display = "block";
        firstName.style.border = " 2px solid red";
        return false;
    }

    if (!firstName.value.match(/^[A-Za-z]+$/)) {
        nameError.innerHTML = "white spaces are not allowed";
        errorImg1.style.display = "block";
        firstName.style.border = " 2px solid red";
        return false;
    }
    nameError.innerHTML = "";
    errorImg1.style.display = "none";
    firstName.style.border = "2px solid hsl(154, 59%, 51%)";
    return true;
}

function validateLastName() {

    if (lastName.value.length == 0) {
        lastNameError.innerHTML = "Last Name cannot be empty";
        errorImg2.style.display = "block";
        lastName.style.border = "2px solid red";
        return false;
    }

    if (lastName.value == firstName.value) {
        lastNameError.innerHTML = "Last Name cannot be same";
        errorImg2.style.display = "block";
        lastName.style.border = "2px solid red";
        return false;
    }

    if (!lastName.value.match(/^[A-Za-z]+$/)) {
        lastNameError.innerHTML = "Spaces, Symbols, Numbers are not allowed";
        errorImg2.style.display = "block";
        lastName.style.border = "2px solid red";
        return false;
    }

    lastNameError.innerHTML = "";
    errorImg2.style.display = "none";
    lastName.style.border = "2px solid hsl(154, 59%, 51%)";
    return true;
}

function validateEmail() {

    if (email.value.length == 0) {
        emailError.innerHTML = "Email cannot be empty";
        errorImg3.style.display = "block";
        email.style.border = "2px solid red";
        return false;
    }

    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Looks like this is not an email";
        // email.value.style.color = "red";
        errorImg3.style.display = "block";
        email.style.border = "2px solid red";
        return false;
    }

    emailError.innerHTML = "";
    errorImg3.style.display = "none";
    email.style.border = "2px solid hsl(154, 59%, 51%)";
    return true;
}

function validatePassword () {
    if (password.value.length == 0) {
        passwordError.innerHTML = "Password cannot be empty";
        errorImg4.style.display = "block";
        password.style.border = "2px solid red";
        return false;
    }

    if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordError.innerHTML = "Password must contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Symbol";
        errorImg4.style.display = "block";
        password.style.border = "2px solid red";
        return false;
    }

    passwordError.innerHTML = "";
    errorImg4.style.display = "none";
    password.style.border = "2px solid hsl(154, 59%, 51%)";
    return true;
}