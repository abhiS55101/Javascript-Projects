let email = document.getElementById("email");
let button = document.getElementById("btn");
let errorMsg = document.getElementById("error-msg");
let errorImg = document.getElementById("error-img");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

button.addEventListener("click", () =>{
    emailChecker();
})

function emailChecker() {

    if(email.value == ""){
        errorImg.style.display = "inline-block";
        errorMsg.style.display = "block";
        email.style.border = "3px solid #ff2851";
    }

    else if(email.value.match(mailRegex)) {
        email.style.border = "3px solid #2ecc71";
        errorMsg.innerHTML = "Email submitted";
    }

    else {
        email.style.border = "3px solid #ff2851";
        errorMsg.innerHTML = "Email submitted";
    }
};

