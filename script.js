// Import du menu mobile
import Mobilemenu from "./JS/menu-mobile.js";
// Import formulaire

import Formulaire from "./JS/formulaire.js";

// Link menu plus boutton burger
const mobileMenu = new Mobilemenu();
mobileMenu.buttonBurger();
mobileMenu.linkNav();

const formulaire = new Formulaire();
formulaire.formInit();
