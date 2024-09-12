<?php
session_start();
include '../php/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ustawienia i inicjalizacja zmiennych
    $name_first = isset($_POST['name_first']) ? trim($_POST['name_first']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';

    // Sprawdzenie, czy wszystkie wymagane pola są wypełnione
    if (!empty($email)) {
        // Sprawdzenie, czy email już istnieje w bazie danych
        $stmt = $conn->prepare("SELECT sid, name_first, phone FROM nm_krduch2subscribers WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            // Email istnieje, pobranie danych użytkownika
            $stmt->bind_result($sid, $name_first_db, $phone_db);
            $stmt->fetch();
            
            // Przechowywanie danych w sesji
            $_SESSION['name_first'] = $name_first_db;
            $_SESSION['email'] = $email;
            $_SESSION['phone'] = $phone_db;
            $_SESSION['sid'] = $sid;
            $_SESSION['message'] = "Email już istnieje w bazie.";

            // Przekierowanie na stronę z formularzem
            header("Location: /crm.php?edit=1");
            exit();
        } else {
            // Email nie istnieje, zapisanie nowego użytkownika
            $created = time(); // Pobierz aktualny timestamp

            $stmt = $conn->prepare("INSERT INTO nm_krduch2subscribers (name_first, email, phone, status, created) VALUES (?, ?, ?, 'active', ?)");
            $stmt->bind_param("ssss", $name_first, $email, $phone, $created);

            if ($stmt->execute()) {
                $_SESSION['message'] = "Nowy użytkownik został zarejestrowany.";
                $_SESSION['name_first'] = '';
                $_SESSION['email'] = '';
                $_SESSION['phone'] = '';
            } else {
                $_SESSION['message'] = "Błąd: " . $stmt->error;
            }
            
            // Przekierowanie na stronę z formularzem
            header("Location: /crm.php");
            exit();
        }

        $stmt->close();
    } else {
        $_SESSION['message'] = "Proszę wypełnić wszystkie wymagane pola.";
        header("Location: /crm.php");
        exit();
    }

    $conn->close();
}

// Obsługa aktualizacji danych
if (isset($_POST['update']) && isset($_SESSION['sid'])) {
    $sid = $_SESSION['sid'];
    $name_first = isset($_POST['name_first']) ? trim($_POST['name_first']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';

    $stmt = $conn->prepare("UPDATE nm_krduch2subscribers SET name_first = ?, phone = ? WHERE sid = ?");
    $stmt->bind_param("ssi", $name_first, $phone, $sid);

    if ($stmt->execute()) {
        $_SESSION['message'] = "Dane zostały zaktualizowane.";
    } else {
        $_SESSION['message'] = "Błąd: " . $stmt->error;
    }

    $stmt->close();
    header("Location: /crm.php");
    exit();
}
?>
