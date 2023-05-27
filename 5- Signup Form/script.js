const submitBtn = document.getElementById("btn");                       // Submit Button
const firstName = document.getElementById("f-name");                    // First name input
const lastName = document.getElementById("l-name");                     // Lase name input
const email = document.getElementById("email");                         // Email input
const password = document.getElementById("pass");                       // Password input
const nameError = document.getElementById("firstNameError");            // First Name error span
const lastNameError = document.getElementById("lastNameError");         // Last name error span
const emailError = document.getElementById("emailError");               // Email error span
const passwordError = document.getElementById("passwordError");         // Password error span
const errorImg1 = document.getElementById("errorImg1");                 // Error icon for input field 1
const errorImg2 = document.getElementById("errorImg2");                 // Error icon for input field 2
const errorImg3 = document.getElementById("errorImg3");                 // Error icon for input field 3
const errorImg4 = document.getElementById("errorImg4");                 // Error icon for input field 4
const checkImg1 = document.getElementById("checkImg1");                 // Check icon for input field 1
const checkImg2 = document.getElementById("checkImg2");                 // Check icon for input field 2
const checkImg3 = document.getElementById("checkImg3");                 // Check icon for input field 3
const checkImg4 = document.getElementById("checkImg4");                 // Check icon for input field 4

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if( validateName() && validateLastName() && validateEmail() && validatePassword()) {            // Calling all functions if all conditions are true
        alert ("Submitted Successfully");

        const inputs = document.querySelectorAll("input");           // This will clear all input fields after submit       
        inputs.forEach(input => {                                    // and make all inputs in default view
            input.value = "";
            input.style.border = "1px solid var(--grayishBlue)";
        });
        
        const checkImg = document.querySelectorAll("#checkImg1, #checkImg2, #checkImg3, #checkImg4");
        checkImg.forEach(img => {
            img.style.display = "none";                     // This is will clear all check icons after submit form
        })

    };
    // validateName();
    // validateLastName();
    // validateEmail();
    // validatePassword();
    // console.log("clicked");
})

function validateName() {

    if (firstName.value.length == 0) {          // This will check wether the first name is not empty
        nameError.innerHTML = "First Name cannot be empty";                                     
        errorImg1.style.display = "block";
        checkImg1.style.display = "none";
        firstName.style.border = " 2px solid var(--red)";
        return false;
    }

    if (!firstName.value.match(/^[A-Za-z]+$/)) {            // This will check no symbols, numbers and white spaces are allowed
        nameError.innerHTML = "Only alphabets are allowed";
        errorImg1.style.display = "block";
        checkImg1.style.display = "none";
        firstName.style.border = " 2px solid var(--red)";
        return false;
    }
    nameError.innerHTML = "";
    errorImg1.style.display = "none";
    checkImg1.style.display = "block";
    firstName.style.border = "2px solid var(--green)";
    return true;
}

function validateLastName() {

    if (lastName.value.length == 0) {
        lastNameError.innerHTML = "Last Name cannot be empty";           // This will check wether the last name is not empty
        errorImg2.style.display = "block";
        checkImg2.style.display = "none";
        lastName.style.border = "2px solid var(--red)";
        return false;
    }

    if (lastName.value == firstName.value) {
        lastNameError.innerHTML = "Last Name cannot be same";           // This will check if user write fistName and lastName same 
        errorImg2.style.display = "block";
        checkImg2.style.display = "none";
        lastName.style.border = "2px solid var(--red)";
        return false;
    }

    if (!lastName.value.match(/^[A-Za-z]+$/)) {
        lastNameError.innerHTML = "Spaces, Symbols, Numbers are not allowed";           // This will check no symbols, numbers and white spaces are allowed
        errorImg2.style.display = "block";
        checkImg2.style.display = "none";
        lastName.style.border = "2px solid var(--red)";
        return false;
    }

    lastNameError.innerHTML = "";
    errorImg2.style.display = "none";
    checkImg2.style.display = "block";
    lastName.style.border = "2px solid var(--green)";
    return true;
}

function validateEmail() {

    if (email.value.length == 0) {          
        emailError.innerHTML = "Email cannot be empty";             // This will check wether the Email is not empty
        errorImg3.style.display = "block";
        checkImg3.style.display = "none";
        email.style.border = "2px solid var(--red)";
        return false;
    }

    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {          // This will check user write email in specific format
        emailError.innerHTML = "Looks like this is not an email";
        errorImg3.style.display = "block";
        checkImg3.style.display = "none";
        email.style.border = "2px solid var(--red)";
        return false;
    }

    emailError.innerHTML = "";
    errorImg3.style.display = "none";
    checkImg3.style.display = "block";
    email.style.border = "2px solid var(--green)";
    return true;
}

function validatePassword () {
    if (password.value.length == 0) {
        passwordError.innerHTML = "Password cannot be empty";           // This will check wether the Password is not empty
        errorImg4.style.display = "block";
        checkImg4.style.display = "none";
        password.style.border = "2px solid var(--red)";
        return false;
    }

    if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordError.innerHTML = "Password must contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Symbol";
        errorImg4.style.display = "block";
        checkImg4.style.display = "none";
        password.style.border = "2px solid var(--red)";             // This will check password must contain uppercase, lowercase, digit and symbol.
        return false;
    }

    passwordError.innerHTML = "";
    errorImg4.style.display = "none";
    checkImg4.style.display = "block";
    password.style.border = "2px solid var(--green)";
    return true;
}