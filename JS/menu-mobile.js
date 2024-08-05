export default class Mobilemenu {
	constructor() {
		this.burgerButton = document.querySelector(".box");
		this.navBar = document.querySelector("nav");
		this.linkNavBar = document.querySelectorAll(".nav-link");
	}

	buttonBurger() {
		this.burgerButton.addEventListener("click", () => {
			this.burgerButton.classList.toggle("active");
			this.navBar.classList.toggle("open");
		});
	}

	linkNav() {
		this.linkNavBar.forEach((link) => {
			link.addEventListener("click", () => {
				if (this.navBar.classList.contains("open")) {
					this.navBar.classList.remove("open");
					this.burgerButton.classList.remove("active");
				}
			});
		});
	}
}
