export default class Formulaire {
	constructor() {
		this.form = document.querySelectorAll(".form-validate");
		this.inputs = document.querySelectorAll(".input-form, textarea");
		this.errorMessages = document.querySelectorAll(".error-message");
		this.formIsValid = true;
    this.formInit();
	}

	formInit() {
		this.form.forEach((formulaires, index) => {
			formulaires.addEventListener("submit", (e) => {
				e.preventDefault(); // empêche le rechargement de la page

				this.clearErrors();

				this.formIsValid = true; // réinitialise l'état de validation

				this.inputs.forEach((input) => this.validateInput(input));

				if (this.formIsValid) {
					formulaires.submit();
				}
			});
		});
	}

	clearErrors() {
		this.errorMessages.forEach((errorMessage) => {
			errorMessage.remove();
		});
	}

	validateInput(input) {
		const value = input.value;
		const type = input.type;
		let errorMessage = "";

		switch (type) {
			case "text":
			case "textarea":
				if (!this.valideText(value)) {
					errorMessage = "Le champ est requis.";
					this.formIsValid = false;
				}
				break;
			case "email":
				if (value.trim() === "") {
					errorMessage = "Le champ est requis.";
					this.formIsValid = false;
				} else if (!this.valideEmail(value)) {
					errorMessage = "L'email est invalide.";
					this.formIsValid = false;
				}
				break;
			case "tel":
				if (value.trim() === "") {
					errorMessage = "Le champ est requis.";
					this.formIsValid = false;
				} else if (!this.valideTel(value)) {
					errorMessage = "Le numéro de téléphone est invalide.";
					this.formIsValid = false;
				}
				break;
			default:
				break;
		}

		if (errorMessage) {
			this.showError(input, errorMessage);
		}
	}

	showError(input, errorMessage) {
		const errorElement = document.createElement("div");
		errorElement.classList.add("error-message");
		errorElement.textContent = errorMessage;
		input.parentElement.appendChild(errorElement);
		input.style.borderColor = "#cc0303";
	}

	valideText(value) {
		return value.trim() !== "";
	}

	valideEmail(value) {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return regex.test(value);
	}

	valideTel(value) {
		const regex = /^[0-9]{10}$/;
		return regex.test(value);
	}
}
