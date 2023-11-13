<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// original file
$sourceFilePath = '../../data/json_file_original.js';

// destination file
$destinationFilePath = '../../data/json_file.js';

// get contents of source file
$sourceContent = file_get_contents($sourceFilePath);

// clear the file contents
file_put_contents($destinationFilePath, '');

if ($sourceContent !== false) {
    // write the new file to source file 
    $writeSuccess = file_put_contents($destinationFilePath, $sourceContent);

    if ($writeSuccess !== false) {
        echo "Sucessfully Deleted your cart !!!";
    } else {
        echo "There was problem in deleting your cart, Please try again later";
    }
} else {
    echo "There was problem in deleting your cart, Please try again later";
}
?>
