<?php


$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "grocery-store";
    
$conn = mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbname) 
or die("Connect failed: %s\n". $conn -> error);

if(mysqli_connect_errno()){
    echo("DB connection is made");
}
else{
    echo("DB connection is successful");
}


?>