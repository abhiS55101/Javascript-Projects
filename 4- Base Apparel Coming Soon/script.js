let email = document.getElementById("email");
let button = document.getElementById("btn");
let errorMsg = document.getElementById("error-msg");
let errorImg = document.getElementById("error-img");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

button.addEventListener("click", () =>{
    emailChecker();
})

function emailChecker() {

    if(email.value == 0){
        errorImg.style.display = "inline-block";
        email.style.border = "3px solid #ff2851";
        errorMsg.innerHTML = "Please provide an email";
    }

    else if(!email.value.match(mailRegex)) {
        email.style.border = "3px solid #ff2851";
        errorMsg.innerHTML = "This is not a valid email";
    }

    else {
        email.style.border = "3px solid #2ecc71";
        errorImg.style.display = "none";
        errorMsg.innerHTML = "Email submitted";
        errorMsg.style.color = "#2ecc71";
    }
};

