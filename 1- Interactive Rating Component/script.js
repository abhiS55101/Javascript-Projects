const mainContainer = document.querySelector(".main-container");
const thankuContainer = document.querySelector(".thanku-container");
const btn = document.querySelectorAll(".btn");
const button = document.getElementById("submit");
const rating = document.getElementById("rating");
const rateAgain = document.getElementById("rate-again");

button.addEventListener("click", () => {
    if(rating.innerHTML == "") {
        alert("Please select your rating...!");
    } else {
        thankuContainer.classList.remove("hidden");
        mainContainer.style.display = "none";
    }
});

rateAgain.addEventListener("click", () => {
    thankuContainer.classList.add("hidden");
    mainContainer.style.display = "block";
    rating.innerHTML = "";
});

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.currentTarget.innerHTML;
        rating.innerHTML = value;
        // console.log(e.currentTarget.innerHTML);
        // rating.innerHTML = button.innerHTML;
        // rating.innerHTML = e.currentTarget.innerHTML;
    })
})
