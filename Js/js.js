// Set the date we're counting down to
var countDownDate = new Date("Avg 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(seconds < 10){
	
seconds="0"+seconds;
}    
	
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);











var countDownDate = new Date("Jun 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(seconds < 10){
	
seconds="0"+seconds;
}    
	
  document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo2").innerHTML = "EXPIRED";
  }
}, 1000);








$(document).ready(function(){
	$("ul#contact li a").click(function(){
			
	
	$("html, body").animate({
		
	 scrollTop:$("#contactform").offset().top	
		
	},1500)
	
	})
	

// Tabs backgrounds:------------------------------------------------------------------------------------------	
	
$(".evropa").mouseenter(function(){
	
$("li.evropa a").css({'color':'white'});	
	
});	


$(".evropa").mouseleave(function(){
	
$("li.evropa a").css({'color':'#8a7158'});	
	
});	
	

	
	
$(".jamerica").mouseenter(function(){
	
$("li.jamerica a").css({'color':'white'});	
	
});	


$(".jamerica").mouseleave(function(){
	
$("li.jamerica a").css({'color':'#8a7158'});	
	
});		
	
	
	
	
$(".samerica").mouseenter(function(){
	
$("li.samerica a").css({'color':'white'});	
	
});	


$(".samerica").mouseleave(function(){
	
$("li.samerica a").css({'color':'#8a7158'});	
	
});		



$(".asia").mouseenter(function(){
	
$("li.asia a").css({'color':'white'});	
	
});	


$(".asia").mouseleave(function(){
	
$("li.asia a").css({'color':'#8a7158'});	
	
});	
	
	
$(".africa").mouseenter(function(){
	
$("li.africa a").css({'color':'white'});	
	
});	


$(".africa").mouseleave(function(){
	
$("li.africa a").css({'color':'#8a7158'});	
	
});		
// Tabs backgrounds END-----------------------------------------------------	


	
$("#europa").css({'display':'block'});
$("#southamerica").css({'display':'none'});
$("#northamerica").css({'display':'none'});	
$("#asia").css({'display':'none'});	
	$("#africa").css({'display':'none'});	




$("li.evropa ").click(function(){
	
$("#europa").css({'display':'block'});
$("#southamerica").css({'display':'none'});
$("#northamerica").css({'display':'none'});	
$("#asia").css({'display':'none'});	
	$("#africa").css({'display':'none'});
	
});	

	
$("li.jamerica").click(function(){
	
$("#europa").css({'display':'none'});
$("#southamerica").css({'display':'block'});
$("#northamerica").css({'display':'none'});	
$("#asia").css({'display':'none'});	
	$("#africa").css({'display':'none'});
	
});	
	
$("li.samerica").click(function(){
	
$("#europa").css({'display':'none'});
$("#southamerica").css({'display':'none'});
$("#northamerica").css({'display':'block'});	
$("#asia").css({'display':'none'});	
	$("#africa").css({'display':'none'});
	
});		
	
$("li.asia").click(function(){
	
$("#europa").css({'display':'none'});
$("#southamerica").css({'display':'none'});
$("#northamerica").css({'display':'none'});	
$("#asia").css({'display':'block'});	
	$("#africa").css({'display':'none'});
	
});		
	
$("li.africa").click(function(){
	
$("#europa").css({'display':'none'});
$("#southamerica").css({'display':'none'});
$("#northamerica").css({'display':'none'});	
$("#asia").css({'display':'none'});	
	$("#africa").css({'display':'block'});
	
});			


	
	
	
});


var countDownDate3 = new Date("Avg 26, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(seconds3 < 10){
	
seconds3="0"+seconds3;
}    
	
  document.getElementById("p#demo3").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";

  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("p#demo3").innerHTML = "EXPIRED";
  }
}, 1000);



