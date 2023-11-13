<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$sourceXmlFilePath = '../../data/xml_file_original.xml';

$destinationXmlFilePath = '../../data/xml_file.xml';
file_put_contents($destinationXmlFilePath, '');

$sourceXmlContent = file_get_contents($sourceXmlFilePath);

if ($sourceXmlContent !== false) {

    $writeSuccess = file_put_contents($destinationXmlFilePath, $sourceXmlContent);
    echo $writeSuccess;
    if ($writeSuccess !== false) {
        echo "XML file copied successfully.";
    } else {
        echo "Error writing to the destination XML file.";
    }
} else {
    echo "Error reading the source XML file.";
}
?>
