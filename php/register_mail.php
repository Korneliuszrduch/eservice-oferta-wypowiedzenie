<?php
session_start();
include '../php/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Initialize variables
    $name_first = isset($_POST['name_first']) ? trim($_POST['name_first']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';

    if (!empty($email)) {
        // Check if we are in update mode
        if (isset($_POST['update']) && isset($_SESSION['sid'])) {
            // Update mode: user is editing existing data
            $sid = $_SESSION['sid'];
            
            // Update query
            $stmt = $conn->prepare("UPDATE nm_krduch2subscribers SET name_first = ?, phone = ? WHERE sid = ?");
            $stmt->bind_param("ssi", $name_first, $phone, $sid);

            if ($stmt->execute()) {
                $_SESSION['message'] = "Dane zostały zaktualizowane.";
            } else {
                $_SESSION['message'] = "Błąd podczas aktualizacji: " . $stmt->error;
            }

            $stmt->close();
            header("Location: /crm.php?mail=$email");
            exit();
        } else {
            // New registration mode
            $stmt = $conn->prepare("SELECT sid, name_first, phone FROM nm_krduch2subscribers WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                // Email exists, load user data
                $stmt->bind_result($sid, $name_first_db, $phone_db);
                $stmt->fetch();

                $_SESSION['name_first'] = $name_first_db;
                $_SESSION['email'] = $email;
                $_SESSION['phone'] = $phone_db;
                $_SESSION['sid'] = $sid;
                $_SESSION['message'] = "Email już istnieje w bazie.";

                header("Location: /crm.php?mail=$email");
                exit();
            } else {
                // Insert new user
                $created = time();

                $stmt = $conn->prepare("INSERT INTO nm_krduch2subscribers (name_first, email, phone, status, created) VALUES (?, ?, ?, 'active', ?)");
                $stmt->bind_param("ssss", $name_first, $email, $phone, $created);

                if ($stmt->execute()) {
                    $_SESSION['message'] = "Nowy użytkownik został zarejestrowany.";
                } else {
                    $_SESSION['message'] = "Błąd podczas rejestracji: " . $stmt->error;
                }

                $stmt->close();
                header("Location: /crm.php?mail=$email");
                exit();
            }
        }
    } else {
        $_SESSION['message'] = "Proszę wypełnić wymagane pole email.";
        header("Location: /crm.php?mail=$email");
        exit();
    }

    $conn->close();
}
?>
