function reveal() {
	var reveals = document.querySelectorAll('.revealX, .revealY');

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add('active');
		}
	}
}

window.addEventListener('scroll', reveal);
