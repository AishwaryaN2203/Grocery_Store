<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JavaScript code from the POST data
    $jsCodeContent = $_POST['jsCode'];

    // Your file path
    $filePath = '../../data/json_file.js';

    // Write the JavaScript code to the file
    file_put_contents($filePath, $jsCodeContent);

    // Optionally, you can respond with a success message
    echo 'File successfully written.';
} else {
    // If the request method is not POST, respond with an error message
    http_response_code(400);
    echo 'Invalid request method.';
}
?>
