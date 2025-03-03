<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  // $receiving_email_address = 'ritesh.sandbhor14@gmail.com';

  // if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
  //   include( $php_email_form );
  // } else {
  //   die( 'Unable to load the "PHP Email Form" Library!');
  // }

  // $contact = new PHP_Email_Form;
  // $contact->ajax = true;

  $to = "ritesh.sandbhor14@gmail.com";
  $subject = "Portfolio Form Submitted";
  
  $message = "
  Form Submitted
  ";



$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <SIMS-IT>' . "\r\n";
$mail=mail($to,$subject,$message,$headers);
if($mail){
echo "
    <script type='text/javascript'>
    alert('Thanks for conecting will get to you soon!');
       </script>";
  }else{
    echo "
    <script type='text/javascript'>
    alert('Someting Went wrong!');
       </script>";
  }
?>
