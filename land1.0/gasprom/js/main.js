const selectorHelper = function (selector) {
	const list =
		typeof selector === 'string'
			? [...document.querySelectorAll(selector)]
			: selector instanceof NodeList
			? [...selector]
			: Array.isArray(selector)
			? selector
			: [selector];
	Object.entries({
		find(selector) {
			return selectorHelper(this[0].querySelectorAll(selector));
		},
		each(h) {
			this.forEach((el, index) => h.apply(this, [el, index]));
		},
		slice(offset, length) {
			return selectorHelper(Array.prototype.slice.bind(this)(offset, length));
		},
		trigger(name) {
			const resizeEvent = window.document.createEvent('UIEvents');
			resizeEvent.initUIEvent(name, true, false, this[0], 0);
			return window.dispatchEvent(resizeEvent);
		},
	}).forEach(([key, value]) => {
		list[key] = value;
		Object.defineProperty(list, key, { enumerable: false });
	});
	return list;
};

function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

/**
 * iPhone touch\click fix
 */
if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) {
	document.addEventListener('click', function (e) {
		//!touchend
		if (e.target.href) {
			window.location = e.target.href;
		}
	});
}



// Модальное окно - Калькулятор
(function(){
	var calcModal = document.getElementById('modal_calc_slider');
		noUiSlider.create(calcModal, {
			start: 50000,
			step: 1,
			connect: [true, false],
			range: {
				'min': 0,
				'max': 10000000
			}
		});

	calcModal.noUiSlider.on('update', function () {
		val = calcModal.noUiSlider.get();
		val=Math.round(val);
		$('#modalCalculator .calc-item-inp').val((val).toLocaleString('ru'));
		modalCalcSum();
	});
	$('#modalCalculator .calc-item-inp').keyup(function(){
		thisValue = $(this).val($(this).val().replace(/[^0-9]/gi, ''));
		thisValue = $(this).val();

		if(thisValue.length > 1) {
			calcModal.noUiSlider.set($.trim(thisValue));
			modalCalcSum();
		}
	});
	// $('#modalCalculator .calc-item-inp').change(function(){
	// 	calcModal.noUiSlider.set($(this).val());
	// 	modalCalcSum();
	// });
	$('#modalCalculator .calc-btns a').click(function(e) {
		e.preventDefault();
		$('#modalCalculator .calc-btns a').removeClass('active');
		$(this).addClass('active');
		modalCalcSum();

		if ($(this).text() === '1 день') {
			$('#modalCalculator .percent').text('1.3%');
		} else if ($(this).text() === '7 дней') {
			$('#modalCalculator .percent').text('9.86%');
		} else if ($(this).text() === '14 дней') {
			$('#modalCalculator .percent').text('20.85%');
		} else if ($(this).text() === '28 дней') {
			$('#modalCalculator .percent').text('46.14%');
		} else {}
	});

	function modalCalcSum() {
		var arr=new Array();
		arr[0]=new Array();
		arr[1]=new Array();
		arr[2]=new Array();
		arr[3]=new Array();
		arr[0][0]=0;
		arr[0][1]=0;
		arr[0][2]=1;
		arr[1][0]=0.0037;
		arr[1][1]=1;
		arr[1][2]=7;
		arr[2][0]=0.0086;
		arr[2][1]=1;
		arr[2][2]=14;
		arr[3][0]=0.0179;
		arr[3][1]=1;
		arr[3][2]=28;
		var input=$('#modalCalculator .calc-item-inp').val().replace(/\s/g, '')*1;
		var index=$('#modalCalculator .calc-btns a.active').index()*1;
		var sum=input;
		for (var i = 1; i <= arr[index][2]; i++) {
			sum += sum * 0.013;
		}
		if (arr[index][0]) sum += sum * arr[index][0]; 


		var sum1 = sum.toFixed(2).split(".");
		var sum2 = (sum - input).toFixed(2).split(".");

		$('#modalCalculator .sum1').html(Number(sum1[0]).toLocaleString('ru') + '.<em>' + Number(sum1[1]) + '</em>');
		$('#modalCalculator .sum2').html(Number(sum2[0]).toLocaleString('ru') + '.<em>' + Number(sum2[1]) + '</em>');


		// $('#modalCalculator .sum1').html(sum.toFixed(2));
		// var sum2=(sum - input).toFixed(2);
		// $('#modalCalculator .sum2').html(sum2)*1;

		$('#modalCalculator .day').html($('#modalCalculator .calc-btns a.active').html());
		$('#modalCalculator .bonus').html(arr[index][0]*100);
		if (arr[index][1]) $('#modalCalculator .cap').html('Да');
		else $('.cap').html('Нет');
	}
})();


$(window).scroll(function() {
	if($(this).scrollTop() >= 100) {
 		$('.header-fix').fadeIn();
 		$('.fix-top-header').addClass('is-active');
 	} else {
 		$('.header-fix').fadeOut();
 		$('.fix-top-header').removeClass('is-active');
 	}
	if($(this).scrollTop() >= 300) 
 		$('.totop').fadeIn();
		else $('.totop').fadeOut();
});

$(window).resize(function() {
	nw=$('nav').width();
	var sliderDocsItems = $('.docs-items');
	var x=nw+50;
		x='-'+x+'px';
		$('nav').css('right',x);

	// $('.modal-close').click();
	//$('#slider').slick('refresh');
	$('#slider').slick('slickGoTo', 1);
	$('#slider').slick('slickGoTo', 0);
	$('#invest').slick('refresh');
	if (w<886) {
		$('.slick-current .tarif-faq').show();
	}
	w=$(window).width();
	if (w>1329) {
		$('nav').show();
		$('.modal-bg').fadeOut();
		$('nav').animate({"right":"-450px"}, "slow");
	}
	if (w<600) {
		// sliderDocsItems.slick('refresh');
	}
	if (w<750) {
		// sliderDocsItems.slick({
		//   infinite: false,
		//   slidesToShow: 1,
		//   slidesToScroll: 1,
		//   dots: true,
		//   arrows: false,
		//   variableWidth: false
		// });
		$('.footer-title').click(function() {
			$(this).toggleClass('active');
			$(this).parent().find('ul').slideToggle();
		});
	}
	else {
		// sliderDocsItems.slick('unslick');
		$('.footer-nav ul').show();
	}
	
	
	
	
});