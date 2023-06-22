(function ($) {
	document.addEventListener('DOMContentLoaded', function () {
		/**
		 * Accordion
		 */
		$('.js_accordion').each(function (el) {
			const dataset = el.dataset;
			// find all .accordion-item
			this.find(dataset.item).each((item, index) => {
				$(item)
					.find(dataset.handler)
					.each((handler) => {
						handler.onclick = () => {
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
	});
})(selectorHelper);