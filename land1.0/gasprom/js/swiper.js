(function ($) {
	document.addEventListener('DOMContentLoaded', function () {
		/**
		 * Swiper
		 */
		$('.js_swiper').each(function (node) {
			const dataset = node.dataset;
			const isCarousel = node.getAttribute('data-carousel') === 'true';
			const swiper = new Swiper(node, {
				// Optional parameters
				//direction: 'vertical',
				//loop: true,
				//slidesPerView: 'auto',
				//freeMode: true,
				slidesPerView: dataset.slidesmobile || 'auto',
				spaceBetween: dataset.spacemobile || 16,
				speed: 500,
				//simulateTouch: false,
				//slidesOffsetBefore: isCarousel ? 60 : 0,
				//slidesOffsetAfter: isCarousel ? 60 : 0,
				slideVisibleClass: 'swiper-slide-visible',
				slideActiveClass: 'swiper-slide-active',
				watchSlidesVisibility: true,
				watchOverflow: true,
				breakpoints: {
					// 1440: {
					// 	slidesPerView: 4,
					// 	spaceBetween: 32,
					// },
					1440: {
						slidesPerView: dataset.slideswide || 4,
						spaceBetween: dataset.spacewide || 32,
					},
					1024: {
						slidesPerView: isCarousel ? 3 : dataset.slidesdesktop || 4,
						spaceBetween: dataset.spacedesktop || 32,
					},
					768: {
						slidesPerView: dataset.slidestablet || 'auto',
						spaceBetween: dataset.spacetablet || 32,
					},
				},

				// If we need pagination
				// pagination: {
				// 	el: '.swiper-pagination',
				// },

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button_next',
					prevEl: '.swiper-button_prev',
				},

				// And if we need scrollbar
				// scrollbar: {
				// 	el: '.swiper-scrollbar',
				// },
			});
		});
	});
})(selectorHelper);
