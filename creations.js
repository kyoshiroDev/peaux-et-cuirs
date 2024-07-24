const imagesCreations = [
	{
		id: 1,
		src: "/assets/images/creations/Valise.webp",
		alt: "chien qui fait de l'ordinateur 1",
	},
	{
		id: 2,
		src: "/assets/images/creations/saccoche.webp",
		alt: "chien qui fait de l'ordinateur 2",
	},
	{
		id: 3,
		src: "/assets/images/creations/valise-2.png",
		alt: "chien qui fait de l'ordinateur 3",
	},
	{
		id: 4,
		src: "/assets/images/creations/housse-appareil-photo.webp",
		alt: "chien qui fait de l'ordinateur 4",
	},
];

function loadImagiesCreations() {
	let creationContent = document.querySelector(".carousel-inner");

	for (let image of imagesCreations) {
		let monImageContainer = document.createElement("div");
		if (image.id === 1) {
			monImageContainer.className = "carousel-item active";
		} else {
			monImageContainer.className = "carousel-item";
		}
		let monImage = document.createElement("img");
		monImage.src = image.src;
		monImage.alt = image.alt;
		creationContent.appendChild(monImageContainer);
		monImageContainer.appendChild(monImage);
		monImage.className = "d-block w-100";
	}
}
window.addEventListener("load", loadImagiesCreations());
