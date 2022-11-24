<?php

$secret_key = '6LcQ6jgiAAAAAOOmKhHJZmfnaBLUqaJkigwnfnGT';

function returnReCaptcha($token, $secret_key)
{
  $url = 'https://www.google.com/recaptcha/api/siteverify';

  $params = [
    'secret' => $secret_key,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR'],
  ];

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  return curl_exec($ch);
}

header('Content-Type: application/json');

if ($_POST) {
  $response = returnReCaptcha($_POST['token'], $secret_key);
  echo $response;
} else {
  echo json_encode([
    'success' => false,
    'reason' => 'empty POST body',
  ]);
}
