import { sendEmail } from "@netlify/emails";

// Récupére le formulaire
const forms = document.querySelectorAll(".form-validate");

const validateForm = function (form) {
	// ajoute l'événement de soumission
	form.addEventListener("submit", (e) => {
		e.preventDefault(); // empêche le rechargement de la page

		const errorMessages = document.querySelectorAll(".error-message");
		errorMessages.forEach((errorMessage) => {
			errorMessage.remove();
		});

		// Récupérer l'ensemble des inputs du formulaire
		const inputs = form.querySelectorAll("input, textarea");

		// dire que le formulaire est valide
		let formIsValid = true;

		// boucler sur les inputs
		inputs.forEach((input) => {
			// récupérer la valeur de l'input
			const value = input.value;
			// récupérer le type de l'input
			const type = input.type;

			// switch type (chaque élément vérifie son propre type)
			let errorMessage = "";
			switch (type) {
				case "text":
				case "textarea":
					if (!valideText(value)) {
						errorMessage = "Le champ est requis.";
						formIsValid = false;
					}
					break;
				case "email":
					if (value.trim() === "") {
						errorMessage = "L'email est vide.";
						formIsValid = false;
					} else if (!valideEmail(value)) {
						errorMessage = "L'email est invalide.";
						formIsValid = false;
					}
					break;
				case "tel":
					if (!valideTel(value)) {
						errorMessage = "Le numéro de téléphone est invalide.";
						formIsValid = false;
					}
					break;
				default:
					break;
			}

			// Si le type est invalide,
			// il y a une erreur (input invalide)
			// On créer une div avec la class error
			if (errorMessage) {
				const errorElement = document.createElement("div");
				errorElement.classList.add("error-message");
				errorElement.textContent = errorMessage;
				input.parentElement.appendChild(errorElement);
				input.style.borderColor = "#cc0303";
			}
		});

		// Si le formulaire est valide, on le soumet
		if (formIsValid) {
			const sendEmail = form.dataset.email;
			console.log(sendEmail);
			if (sendEmail) {
				sendEmailNetlify(
					"essaie",
					"parker",
					"petter",
					"parker.petter@gmail.com",
					"0305203654",
					"premier test message",
				);
			}
			form.submit();
		}
	});

	function valideText(value) {
		return value.trim() !== "";
	}

	function valideEmail(value) {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return regex.test(value) && value.trim() !== "";
	}

	function valideTel(value) {
		const regex = /^[0-9]{10}$/;
		return regex.test(value);
	}
};

forms.forEach((form) => validateForm(form));

async function sendEmailNetlify(
	subject,
	lastName,
	firstName,
	email,
	phone,
	message,
) {
	await sendEmail({
		from: "contact@peaux-et-cuir.fr",
		to: email,
		subject: subject,
		template: "contact",
		parameters: {
			lastName: lastName,
			firstName: firstName,
			email: email,
			phone: phone,
			message: message,
		},
	});
}
