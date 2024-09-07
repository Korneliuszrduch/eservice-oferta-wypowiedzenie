<?php
$servername = "localhost";
$username = "korneliuszrduch_terminaleserviceown";
$password = "VvG6bChSnM7vL72VwKxZ";
$dbname = "korneliuszrduch_terminaleserviceown";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}
?>
