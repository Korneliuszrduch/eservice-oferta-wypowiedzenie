<?php
$servername = "localhost";
$username = "kornelird_nowenetsendo";
$password = "mnMhfmenu4";
$dbname = "kornelird_nowenetsendo";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}
?>


