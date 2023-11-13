<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JavaScript code from the POST data
    $xmlData = file_get_contents('php://input');

    // Your file path
    $filePath = '../../data/xml_file.xml';

    // Write the XML data to the file
    file_put_contents($filePath, $xmlData);

    // Optionally, you can respond with a success message
    echo 'XML data successfully written to the file.';
} else {
    // If the request method is not POST, respond with an error message
    http_response_code(400);
    echo 'Invalid request method.';
}
?>
