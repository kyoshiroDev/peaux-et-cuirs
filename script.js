const burgerButton = document.querySelector(".box");
const navBar = document.querySelector("nav");
const linkNavBar = document.querySelectorAll(".nav-link");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("active");
	navBar.classList.toggle("open");
});

linkNavBar.forEach((link) => {
	link.addEventListener("click", () => {
		if (navBar.classList.contains("open")) {
			navBar.classList.remove("open");
			burgerButton.classList.remove("active");
		}
	});
});
