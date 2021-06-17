const hamburgerContainer = document.getElementById("main-nav");
const hamburger = document.querySelector(".main-nav--hamburger");
const links = document.querySelectorAll(".main-nav--link");

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
    for (let link of links) {
        link.classList.toggle("fade");
    }
});