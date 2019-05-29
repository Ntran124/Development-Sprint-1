const backToTopButton = document.querySelector("#topBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 100) {
		backToTopButton.style.display = "block";
	}
	else {
		backToTopButton.style.display = "none";
	}
}
