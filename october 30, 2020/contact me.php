<?php

$errors = '';

$myemail = 'elliexu119@gmail.com';//<—–Put Your email address here. 
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])){
    $errors = '\n Error: all fields are required';
}

$name = $_POST['name'];

$email_address = $_POST['email'];

$message = $_POST['message'];

if(empty($errors)){
    $to = $myemail;
    $email_subject = 'Contact form submission: $name';
    $email_body = 'You have received a new message. '.
    ' Here are the details:\n Name: $name \n '.
    'Email: $email_address \n Message \n $message';
    $headers = 'From: $myemail \nReply-To: $email_address';
    if (mail($to,$email_subject,$email_body,$headers)){
        echo 'Your mail has been sent successfully.';
        header('Location: main.html');
    } else{
        echo 'Unable to send email. Please try again.';
    }
    //redirect to the 'thank you' page
    
} else {
    header('Location: main.html');
}

?>