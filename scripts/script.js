/* Código que deixa a barra de navegação funcional */

const buttons = document.querySelectorAll('.nav-button'); /* Seleciona todos os botões da barra de navegação */
const sections = document.querySelectorAll('section'); /* Seleciona todas as 4 seções do site */

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const sectionId = button.getAttribute('data-section'); /* Ao clicar em um botão, ele seleciona a seção correspondente */

		/* Abaixo o código adiciona e remove classes para mostrar ou não uma seção, conforme o id que corresponde ao botão clicado */
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