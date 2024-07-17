const burgerButton = document.querySelector(".box");
const navBar = document.querySelector("nav");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("active");
	navBar.classList.toggle("open");
});
