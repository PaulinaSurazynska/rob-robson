

//animation for hamburger menu

$(document).ready(function(){
	$('#nav_icon').click(function(){
		$(this).toggleClass('open');
	});
});
//animation for menu
$( '#nav_icon' ).click(function() {
  $( ".menu_list" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});



//contact form validation

$(function(){
	
	$("#username_error_message").hide();
	$("#email_error_message").hide();
	$("#message_error_message").hide();

	
	var error_username = false;
	var error_email = false;
	var error_message = false;
	
	$("#form_username").focusout(function() {

		check_username();
		
	});
	
		$("#form_mail").focusout(function() {

		check_email();
		
	});
	
		$("#form_message").focusout(function() {

		check_message();
		
	});
	
	function check_username() {
	
		var username_length = $("#form_username").val().length;
		var VarEmpty = new RegExp(/ /i);
		
		
		if(username_length === 0 || VarEmpty.test($("#form_username").val())) {
			$("#username_error_message").html("Please tell us your name");
			$("#username_error_message").show();
			error_username = true;
		} else {
			$("#username_error_message").hide();
		}
		
	
	}
	
	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_mail").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}
	
		function check_message() {
	
		var message_length = $("#form_message").val().length;
		var VarEmpty = new RegExp(/ /i);
		
		
		if(message_length === 0 || VarEmpty.test($("#form_message").val())) {
			$("#message_error_message").html("We do not respond to a blank e-mails");
			$("#message_error_message").show();
			error_username = true;
		} else {
			$("#message_error_message").hide();
		}
	
	}
	
	
	
});
//slider function

$(document).ready(function(){  
  $('.bxslider').bxSlider({
	mode: 'fade',
	pause: 3000,
	auto: true,
  });
   
});

