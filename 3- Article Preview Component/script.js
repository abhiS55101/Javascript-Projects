let shareBtn = document.querySelector(".share-btn");
let showLinks = document.querySelector(".show-links");

shareBtn.addEventListener("click", function () { 
    showLinks.classList.toggle("show-links");
});