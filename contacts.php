<?php

  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "shubhsinghgarg@gmail.com";
  $headers = "From: ".$mailFrom;
  $text = "You have recived an e-mail from ".$name. ". !! From your Website !!. \n\n".$message;

  mail($mailTo, $subject, $text, $headers);
  header("Location: index.html?mailsent");

?>
