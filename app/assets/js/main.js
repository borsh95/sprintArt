const search = document.querySelector('.search');
const searchIc = document.querySelector('.search__ic');

searchIc.onclick = (e) => {
	search.classList.toggle('active');
}

document.addEventListener('click', closeSearch);

function closeSearch(e) {
	if (!e.target.closest('.search')) {
		search.classList.remove('active');
	}
}

if (document.querySelector('.search')) {
	const search = document.querySelector('.search');
	const searchIc = document.querySelector('.search__ic');

	searchIc.onclick = (e) => {
		search.classList.toggle('active');
	}

	document.addEventListener('click', closeSearch);

	function closeSearch(e) {
		if (!e.target.closest('.search')) {
			search.classList.remove('active');
		}
	}
}

//Hamburger
(function () {
	const hamburgerBtn = document.querySelector('.hamburger');
	const burgerBlock = document.querySelector('.header__burger');
	const bodyEl = document.querySelector('body');



	hamburgerBtn.addEventListener('click', function () {
		this.classList.toggle('active');

		workMenu();
	});

	window.addEventListener('resize', function () {
		if (document.documentElement.clientWidth > 1197 && burgerBlock.classList.contains('active')) {
			workMenu();
		}
	});

	function workMenu() {
		let coordsHamburgerBlock = burgerBlock.getBoundingClientRect();
		let isActive = hamburgerBtn.classList.contains('active');

		burgerBlock.style.height = (isActive) ? `calc(100vh - ${coordsHamburgerBlock.top}px)` : '';
		burgerBlock.classList[isActive ? 'add' : 'remove']('active');
		bodyEl.style.overflow = (isActive) ? 'hidden' : '';
	}
}());