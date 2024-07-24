// Récupére le formulaire
const formulaire = document.querySelector("form");
const validateForm = function (form) {
	// ajoute l'événement de soumission
	formulaire.addEventListener("submit", (e) => {
		// empêche le rechargement de la page
		e.preventDefault();

		// Reset message error
		const errorMessages = document.querySelectorAll(".error-message");
		errorMessages.forEach((errorMessage) => {
			errorMessage.remove();
		});
		// Récupérer l'ensemble des inputs du formulaire
		const input = formulaire.querySelectorAll("input, textarea");
		// dire que le formulaire est valide
		let formulaireIsValide = true;
		// boucler sur les inputs
		input.forEach((input) => {
			// récupérer la valeur de l'input
			const value = input.value;
			// récupérer le type de l'input
			const type = input.type;
			// switch type (chaque élément vérifie son propre type)
			let errorMessage = "";
			switch (type) {
				case "text":
				case "textarea":
					if (value.trim() === "") {
						inputVide();
						input.classList = "no-valide";
					} else if (!textIsValide(value)) {
						errorMessage = "Votre texte est pas valide";
						formulaireIsValide = false;
					}
					break;
				case "email":
					if (value.trim() === "") {
						inputVide();
					} else if (!emailIsValide(value)) {
						errorMessage = "Votre email n'est pas valide";
						formulaireIsValide = false;
					}
				case "tel":
					if (value === "") {
						inputVide();
					} else if (!phoneIsValide(value)) {
						errorMessage = "Votre email n'est pas valide";
						formulaireIsValide = false;
					}
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
			}
			// Si le formulaire est valide, on le soumet
		});
		if (formulaireIsValide) {
			console.log("formulaire envoyer");
			form.submit();
		}
	});
	// Fonction text valide
	function textIsValide(value) {
		return value.trim(value !== "");
	}
	// Fonction email valide
	function emailIsValide(value) {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return regex.test(value) && value.trim() !== "";
	}
	// Fonction tel valide
	function phoneIsValide(value) {
		const regex = /^[0-9]{10}$/;
		return regex.test(value);
	}

	function inputVide(value) {
		if (value === "") {
			errorMessage = "ce champ ne doit pas être vide";
			formulaireIsValide = false;
		}
	}
};
