// let btn1 = document.querySelector(".btn-first");
// let btn2 = document.querySelector(".btn-second");
// let btn3 = document.querySelector(".btn-third");

// let block1 = document.querySelector(".block1");
// let block2 = document.querySelector(".block2");
// let block3 = document.querySelector(".block3");

$(".btn-first").click(function(){
	$(".block1").toggle(200);
})

$(".btn-second").click(function(){
	$(".block2").toggle(200);
})

$(".btn-third").click(function(){
	$(".block3").toggle(200);
})
