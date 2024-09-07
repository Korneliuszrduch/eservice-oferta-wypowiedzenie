<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $stmt = $conn->prepare("UPDATE users SET email=?, phone=? WHERE id=?");
    $stmt->bind_param("ssi", $email, $phone, $id);

    if ($stmt->execute()) {
        echo "Rekord został zaktualizowany!";
    } else {
        echo "Błąd: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>



