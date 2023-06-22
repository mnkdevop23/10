(function ($) {
	document.addEventListener('DOMContentLoaded', function () {
		const body = document.getElementsByTagName('body')[0];

		/**
		 * Mobile menu
		 */
		$('.js_mobileMenu').each((el) => {
			el.onclick = function () {
				if (body.classList.contains('mobileMenu')) {
					body.classList.remove('mobileMenu');
				} else {
					const listener = function () {
						if (el.offsetParent === null) {
							body.classList.remove('mobileMenu');
							window.removeEventListener('resize', listener);
						}
					};
					window.addEventListener('resize', listener);
					body.classList.add('mobileMenu');
				}
			};
		});

		$('.js_mobileMenu_accordion').each(function (el) {
			const dataset = el.dataset;
			// find all .accordion-item
			this.find(dataset.handler).each((item) => {
				$(item)
					.find('a')
					.each((link) => link.addEventListener('click', (e) => e.stopPropagation()));
				item.onclick = () => {
					if (!item.classList.contains(dataset.itemclassname)) {
						// set item active
						item.classList.add(dataset.itemclassname);
						$(item)
							.find(dataset.content)
							.each((content) => {
								content.style.maxHeight = content.children[0].clientHeight + 'px';
							});
					} else {
						item.classList.remove(dataset.itemclassname);
						$(item)
							.find(dataset.content)
							.each((content) => {
								content.style.maxHeight = '';
							});
					}
				};
				if (item.classList.contains(dataset.itemclassname)) {
					$(item)
						.find(dataset.content)
						.each((content) => {
							content.style.maxHeight = content.children[0].clientHeight + 'px';
						});
				}
			});
		});
	});
})(selectorHelper);
