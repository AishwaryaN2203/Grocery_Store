<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


$xmlFilePath = '../../data/xml_file.xml';

$xmlContents = file_get_contents($xmlFilePath);

header('Content-Type: application/xml');

echo $xmlContents;
?>