<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
$message = "
<html>
<head>
<title>Enquiry Email</title>
</head>
<body>
<table>
<tr>
<td><b>Name</b> </th>
<td>".$_POST['name']."</th>
</tr>
<tr>
<td><b>Email</b></td>
<td>".$_POST['email']."</td>
</tr>
<tr>
<td><b>Subject</b></td>
<td>".$_POST['subject']."</td>
</tr>
<tr>
<td><b>Message</b></td>
<td>".$_POST['message']."</td>
</tr>
</table>
</body>
</html>
";
$emailFrom=$_POST['email'];
$emailFromName=$_POST['name'];
$emailTo='shikhasreekumar99@gmail.com';
$emailToName='Shikha';
$mail = new PHPMailer;
// $mail->isSMTP(); 
$mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = "smtp.gmail.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = 587; // TLS only 587, 465
$mail->SMTPSecure = 'ssl'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = 'shikhasreekumar143@gmail.com';
$mail->Password = 'shikha20';
$mail->isHTML(true);  
$mail->setFrom($emailFrom, $emailFromName);
$mail->addAddress('shikhasreekumar99@gmail.com', 'Shikha');
$mail->Subject = 'Enquiry Mail - My Portfolio Website';
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
// $mail->msgHTML($message); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
// $mail->AltBody = 'HTML messaging not supported';
// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file

if(!$mail->send()){
    echo 'error';
    //echo "Mailer Error: " . $mail->ErrorInfo;
}else{
    echo 'success';
    //echo "Message sent!";
}




?>