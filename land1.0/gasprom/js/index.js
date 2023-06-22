var calc = document.getElementById('calc_slider');
noUiSlider.create(calc, {
    start: 50000,
	step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 1000000
    }
});

calc.noUiSlider.on('update', function () {
	val = calc.noUiSlider.get();
	val=Math.round(val);
	$('#calc .calc-item-inp').val((val).toLocaleString('ru'));
	// $('.calc-item-inp').val(val);
	sum();
});


$('#calc .calc-item-inp').keyup(function(){
	thisValue = $(this).val($(this).val().replace(/[^0-9]/gi, ''));
	thisValue = $(this).val();

    if(thisValue.length > 1) {
    	calc.noUiSlider.set($.trim(thisValue));
		sum();
    }
});


// $('#calc .calc-item-inp').change(function(){
// 	calc.noUiSlider.set($(this).val());
// 	sum();
// });

$('#calc .calc-btns a').click(function(e) {
  e.preventDefault();
  $('#calc .calc-btns a').removeClass('active');
  $(this).addClass('active');
  sum();

  if ($(this).text() === '1 день') {
    $('#calc .percent').text('1.3%');
  } else if ($(this).text() === '7 дней') {
    $('#calc .percent').text('9.86%');
  } else if ($(this).text() === '14 дней') {
    $('#calc .percent').text('20.85%');
  } else if ($(this).text() === '28 дней') {
    $('#calc .percent').text('46.14%');
  } else {}
});

function sum() {
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
	var input=Number($('#calc .calc-item-inp').val().replace(/\s/g, ''))*1;
	var index=$('#calc .calc-btns a.active').index()*1;
	var sum=input;

	
	for (var i = 1; i <= arr[index][2]; i++) {
		sum += sum * 0.013;
	}
	if (arr[index][0]) sum += sum * arr[index][0]; 

	var sum1 = sum.toFixed(2).split(".");
	var sum2 = (sum - input).toFixed(2).split(".");

	$('#calc .sum1').html(Number(sum1[0]).toLocaleString('ru') + '.<em>' + Number(sum1[1]) + '</em>');
	$('#calc .sum2').html(Number(sum2[0]).toLocaleString('ru') + '.<em>' + Number(sum2[1]) + '</em>');
	$('#calc .day').html($('#calc .calc-btns a.active').html());
	$('#calc .bonus').html(arr[index][0]*100);
	if (arr[index][1]) $('#calc .cap').html('Да');
	else $('#calc .cap').html('Нет');

	// (sum - input).toLocaleString('ru')
	// console.log();
}
