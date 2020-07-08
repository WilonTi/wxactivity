
var btn1 = $("#btn1");
var btn2 = $("#btn2");
$('.modal').hide();
$('.bg-span').on('click', function(e){ 
//	console.log(this)
	$(this).removeClass("bg-span");

	setTimeout(function(){
		$('.modal').show();
	},7000);

})
btn1.on('click', function(e){ 
	btn2.removeClass("active");
	btn1.addClass("active");
	$('.point p span').addClass("bg-span");

})
btn2.on('click', function(e){ 
	btn1.removeClass("active");
	btn2.addClass("active");
	$('.point p span').removeClass("bg-span");
})

$('.footer-right').on('click', function(e){ 
	$('.modal').show();
})
$('.mask').on('click', function(e){ 
	$('.modal').hide();
})
