<?php
$json = file_get_contents('php://input');
$array = json_decode($json, true);

$fecha = new DateTime();

$responseData = "";
//write json to file
if (file_put_contents("./uploads/".$fecha->getTimestamp().".json", $json))
    $responseData = 1;
else
    $responseData = 0;


header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$response = array(
    'data'=> $responseData,
);
echo json_encode($response);
