// Activating one tab deactivates others

const accordion = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector);
	let i;

	for (i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function() {
			hideOthers();

			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content'); 
			this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px"; 
		});
	}

	function hideOthers() {
		for (i = 0; i < btns.length; i++) {
			btns[i].classList.remove('active-style');
			btns[i].nextElementSibling.classList.remove('active-content');
			btns[i].nextElementSibling.style.maxHeight = null;               
			}
	};
}

export default accordion;