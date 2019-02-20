<?php

if(isset($_POST['user_name']) && isset($_POST['user_email']) && isset($_POST['user_message'])){
	$user_name = $_POST['user_name'];
	$user_email = $_POST['user_email'];
	$user_message = $_POST['user_message'];
	
	if(!empty($user_name) && !empty($user_email) && !empty($user_message)){
		if(strlen($user_name)>25 ||strlen($user_email)>50 || strlen($user_message)>1000){
			echo 'Sorry, maxlenght for some field has been exceeded.';
		
		} else{
	
			$to = "hello@robrobson.org";
			$subject = 'E-mail from www.robrobson.org';
			$body = $user_name."/n".$user_message;
			$body = $user_name . " wrote the following:" . "\n\n" . $_POST['user_message'];
			$headers ='From:' .$user_email;
			
				if(@mail($to, $subject, $body, $headers)) {
					
					header('Location: confirmation.html');
				
				} else {
				
					echo'Sorry, an error occurred. Please try again later!';
				}
			}
		} else {
			header('Location: required.html');
			}

}


?>