const buttons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const sectionId = button.getAttribute('data-section');

		sections.forEach(section => {
			if (section.id === sectionId) {
				section.classList.add('active');
				section.classList.remove('hidden');
			} else {
				section.classList.remove('active');
				section.classList.add('hidden');
			}
		});
	});
});