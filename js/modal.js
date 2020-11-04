const contactLink = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal-letter");
const contactClose = contactPopup.querySelector(".modal-close");
const contactForm = contactPopup.querySelector(".letter-form");
const contactLogin = contactPopup.querySelector(".modal-letter-name");
const contactEmail = contactPopup.querySelector(".modal-letter-email");
const contactText = contactPopup.querySelector(".modal-letter-text");

let isStorageSupport = true;
let storageLogin = "";
let storageEmail = "";

try {
	storageLogin = localStorage.getItem("login");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	contactPopup.classList.add("modal-show");
	if (storageLogin && storageEmail) {
		contactLogin.value = storageLogin;
		contactEmail.value = storageEmail;
		contactText.focus();
	} else {
		contactLogin.focus();
	}	
});

contactClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	contactPopup.classList.remove("modal-show");
	contactPopup.classList.remove("modal-error");

});

contactForm.addEventListener("submit", function(evt) {
	if (!contactLogin.value || !contactEmail.value || !contactText.value) {
		evt.preventDefault();
		contactPopup.classList.remove("modal-error");
		contactPopup.offsetWidth = contactPopup.offsetWidth;
		contactPopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("login", contactLogin.value);
		localStorage.setItem("email", contactEmail.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (contactPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			contactPopup.classList.remove("modal-show");
		}
	}
});