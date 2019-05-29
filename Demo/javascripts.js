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

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
	window.scrollTo(0, 0);
}