<?php
if($_POST){
    $email_message .= "Name: ".$_POST['name']."\n";
    $email_message .= "Email: ".$_POST['email']."\n";
    $email_message .= "Telephone: ".$_POST['phone']."\n";
 
    $email_message .= "Comments: ".$_POST['message']."\n";

   //send email
    mail("cleo.maranski@gmail.com", "From Philoptochos Website", $email_message);
}
?>