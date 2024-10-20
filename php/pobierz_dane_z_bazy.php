<?php
header('Content-Type: application/json');

// Połącz z bazą danych
include '../php/config.php';

$email = $_POST['email'] ?? '';
$response = [];

// Sprawdź, czy email istnieje
$query = "SELECT name_first, phone FROM nm_krduch2subscribers WHERE email = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Jeśli subskrybent istnieje, zwróć jego dane
    $data = $result->fetch_assoc();
    $response = [
        'name_first' => $data['name_first'],
        'phone' => $data['phone']
    ];
} else {
    // Jeśli subskrybent nie istnieje, zwróć komunikat błędu
    $response = ['error' => 'Subskrybent nie istnieje.'];
}

echo json_encode($response);
exit();
