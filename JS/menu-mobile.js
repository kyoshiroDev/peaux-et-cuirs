export default class Mobilemenu {
	constructor() {
		this.burgerButton = document.querySelector(".box");
		this.navBar = document.querySelector("nav");
		this.linkNavBar = document.querySelectorAll(".nav-link");
		this.buttonBurger();
		this.linkNav();
		this.header = document.querySelector(".nav-content");
	}

	buttonBurger() {
		this.burgerButton.addEventListener("click", () => {
			this.burgerButton.classList.toggle("active");
			this.navBar.classList.toggle("open");

			if ((this.navBar.classList == "open")) {
				this.header.style.position = "fixed";
			} else {
				this.header.style.position = "absolute";
			}
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
