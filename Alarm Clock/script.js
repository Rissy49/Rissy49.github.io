$(document).ready(function() {
setTimeout(function(){
$(".wake-up-text").addClass("alarming");
/*$(".image1").addClass("alarming");
$(".image2").addClass("alarming");
$(".image3")addClass("alarming");*/
}, 1000);

$(".wake-up-text").click(function() { 
$(".wake-up-text").removeClass("alarming");
});

 
});