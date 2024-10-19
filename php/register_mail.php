<?php 
session_start();
include '../php/config.php';

// Ustawienie strefy czasowej
date_default_timezone_set('Europe/Warsaw');

header('Content-Type: application/json'); // Ustawienie nagłówka na JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name_first = isset($_POST['name_first']) ? trim($_POST['name_first']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$placeOfAcquiringTheCustomer = isset($_POST['id_place_of_acquiring_Customer']) ?
trim($_POST['id_place_of_acquiring_Customer']) : '';

$update = isset($_POST['update']) ? $_POST['update'] : 'false';

$current_timestamp = time();
$current_datetime = date("Y-m-d\TH:i");

if (!empty($email)) {
if ($update === 'true' && isset($_SESSION['sid'])) {
// Tryb aktualizacji
$sid = $_SESSION['sid'];

$stmt = $conn->prepare("UPDATE nm_krduch2subscribers SET name_first = ?, phone = ? WHERE sid = ?");
$stmt->bind_param("ssi", $name_first, $phone, $sid);

if ($stmt->execute()) {
$_SESSION['message'] = "Dane zostały zaktualizowane.";
} else {
$_SESSION['message'] = "Błąd podczas aktualizacji: " . $stmt->error;
}

$stmt->close();
} else {
// Sprawdzenie, czy email istnieje
$stmt = $conn->prepare("SELECT sid, status FROM nm_krduch2subscribers WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
// Email istnieje
$stmt->bind_result($sid, $status);
$stmt->fetch();

$_SESSION['sid'] = $sid;

if ($status === 'deleted') {
// Zmień status na 'active'
$updateStatusStmt = $conn->prepare("UPDATE nm_krduch2subscribers SET status = 'active' WHERE sid = ?");
$updateStatusStmt->bind_param("i", $sid);

if ($updateStatusStmt->execute()) {
$_SESSION['message'] = "Status subskrybenta został zmieniony na 'active'.";
} else {
$_SESSION['message'] = "Błąd podczas zmiany statusu: " . $updateStatusStmt->error;
}

$updateStatusStmt->close();
} else {
$_SESSION['message'] = "Email już istnieje w bazie i jest aktywny.";
}

// Wczytaj istniejące dane do formularza
$stmt = $conn->prepare("SELECT name_first, phone FROM nm_krduch2subscribers WHERE sid = ?");
$stmt->bind_param("i", $sid);
$stmt->execute();
$stmt->bind_result($name_first_db, $phone_db);
$stmt->fetch();
$_SESSION['name_first'] = $name_first_db;
$_SESSION['phone'] = $phone_db;
$stmt->close();

} else {
// Wstawienie nowego użytkownika
$stmt = $conn->prepare("INSERT INTO nm_krduch2subscribers (name_first, email, phone, status, created) VALUES (?, ?, ?,
'active', ?)");
$stmt->bind_param("ssss", $name_first, $email, $phone, $current_timestamp);

if ($stmt->execute()) {
$sid = $stmt->insert_id;

// Wstawienie bieżącej daty do nm_krduch2subscribers_fields
$stmt_fields = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, 171, ?)");
$stmt_fields->bind_param("is", $sid, $current_datetime);

if ($stmt_fields->execute()) {
$_SESSION['message'] = "Nowy użytkownik został zarejestrowany z bieżącą datą.";
} else {
$_SESSION['message'] = "Błąd podczas zapisywania daty: " . $stmt_fields->error;
}

$stmt_fields->close();

$stmt_place = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, 86, ?)");
$stmt_place->bind_param("is", $sid, $placeOfAcquiringTheCustomer);

if ($stmt_place->execute()) {
$_SESSION['message'] .= " Miejsce pozyskania klienta zostało zapisane.";
} else {
$_SESSION['message'] .= " Błąd podczas zapisywania miejsca pozyskania klienta: " . $stmt_place->error;
}

$stmt_place->close();

} else {
$_SESSION['message'] = "Błąd podczas rejestracji: " . $stmt->error;
}

$stmt->close();


}

$_SESSION['sid'] = $sid;
}

// Zwróć odpowiedź JSON z komunikatem i adresem do przekierowania
// echo json_encode([
// 'success' => true,
// 'message' => $_SESSION['message'],
// 'redirect' => 'https://terminal.terminaleservice.pl/crm.php?mail=' . urlencode($email) . '&phone=' .
//urlencode($phone)
// ]);
// } else {
//echo json_encode([
// 'success' => false,
// 'message' => "Proszę wypełnić wymagane pole email."
// ]);
}

$conn->close();
}
?>