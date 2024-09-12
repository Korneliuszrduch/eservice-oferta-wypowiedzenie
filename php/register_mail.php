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
        // Sprawdzenie, czy telefon już istnieje w bazie danych
        $stmt = $conn->prepare("SELECT sid, name_first, phone FROM nm_krduch2subscribers WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            // mail istnieje, pobranie imienia i telefonu
            $stmt->bind_result($sid, $name_first, $phone);
            $stmt->fetch();
            
            // Przechowywanie danych w sesji
            $_SESSION['name_first'] = $name_first;
            $_SESSION['email'] = $email;
            $_SESSION['phone'] = $phone;
            $_SESSION['message'] = "mail już istnieje w bazie. SID: " . $sid;
            
            // Przekierowanie na stronę z formularzem
            header("Location: /crm.php");
            exit();
        } else {
            // mail nie istnieje, zapisz nowego użytkownika

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
?>
