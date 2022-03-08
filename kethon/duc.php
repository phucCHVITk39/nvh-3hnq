<?php
/*
Code by : Nguyen Anh Duc
 Photoshop by:Ho Thuong Tham
 We are best friend
*/
session_start();
$captcha = imagecreatefrompng('kethon.gif');
$stringck = $_GET['htck'];
$stringvk = $_GET['htvk'];

$stringnsck = $_GET['nsck'];
$stringnsvk = $_GET['nsvk'];

$stringhkck = $_GET['hkck'];
$stringhkvk = $_GET['hkvk'];

$stringcmck = $_GET['cmck'];
$stringcmvk = $_GET['cmvk'];

$stringktck = $_GET['ktck'];
$stringktvk = $_GET['ktvk'];
//set some variables
$black = imagecolorallocate($captcha, 225, 0, 0);
$white = imagecolorallocate($captcha, 225, 225, 225);
$red = imagecolorallocate($captcha, 0, 0, 0);
$font = 'arial.ttf';

//random stuff
//$string = md5(microtime() * mktime());
$textck = substr($stringck, 0, 25);
$textvk = substr($stringvk, 0, 25);

$textnsck = substr($stringnsck, 0, 25);
$textnsvk = substr($stringnsvk, 0, 25);

$texthkck = substr($stringhkck, 0, 25);
$texthkvk = substr($stringhkvk, 0, 25);

$textcmck = substr($stringcmck, 0, 25);
$textcmvk = substr($stringcmvk, 0, 25);

$textktck = substr($stringktck, 0, 25);
$textktvk = substr($stringktvk, 0, 25);

$textkt1ck = substr($stringck, 0, 25);
$textkt1vk = substr($stringvk, 0, 25); 
//$_SESSION['code'] = $text;

//create some stupid stuff

imagettftext($captcha, 18, 0, 205, 289, $red, $font, $textck);
imagettftext($captcha, 18, 0, 615, 289, $red, $font, $textvk);

imagettftext($captcha, 12, 0, 250, 320, $red, $font, $textnsck);
imagettftext($captcha, 12, 0, 680, 320, $red, $font, $textnsvk);

imagettftext($captcha, 15, 0, 100, 406, $red, $font, $texthkck);
imagettftext($captcha, 15, 0, 520, 406, $red, $font, $texthkvk);

imagettftext($captcha, 13, 0, 260, 435, $red, $font, $textcmck);
imagettftext($captcha, 13, 0, 700, 435, $red, $font, $textcmvk);

imagettftext($captcha, 20, 0, 260, 520, $red, $font, $textktck);
imagettftext($captcha, 20, 0, 700, 520, $red, $font, $textktvk);


imagettftext($captcha, 16, 0, 250, 560, $red, $font, $textkt1ck);
imagettftext($captcha, 16, 0, 680, 560, $red, $font, $textkt1vk);

// begin to create image
header('content-type: image/png');
imagepng($captcha);

//clean up
imagedestroy($captcha);



?>