<?php
header("Access-Control-Allow-Origin: https://mail.korneliuszrduch.pl"); // Podaj konkretna domenę
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include '../php/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $offerOpeningStatus = 'Kliknął w ofertę lub dokument';

    if (!empty($email)) {
        // Wyszukiwanie subskrybenta na podstawie e-maila
        $stmt = $conn->prepare("SELECT sid FROM nm_krduch2subscribers WHERE email = ? AND status = 'active'");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($sid);
        $stmt->fetch();
        $stmt->close();

        if (!empty($sid)) {
            $stmt_place = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, 114, ?) ON DUPLICATE KEY UPDATE value = ?");
            $stmt_place->bind_param("iss", $sid, $offerOpeningStatus, $offerOpeningStatus);
            if ($stmt_place) {
                $stmt_place->bind_param("is", $sid, $offerOpeningStatus);
                if ($stmt_place->execute()) {
                    echo "Status and field 114 updated successfully with value: " . $offerOpeningStatus . " and sid: " . $sid . "email" .$email;
                } else {
                    echo "Error executing query for inserting field: " . $stmt_place->error;
                }
                $stmt_place->close();
            } else {
                echo "Error preparing insert statement: " . $conn->error;
            }
        } else {
            echo "Active subscriber not found for the provided email";
        }
    } else {
        echo "Invalid email";
    }
}

$conn->close(); // Zamknięcie połączenia z bazą danych
?>
