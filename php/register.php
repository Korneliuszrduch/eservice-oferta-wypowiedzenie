<?php



include '../php/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ustawienia i inicjalizacja zmiennych
    $name_first = isset($_POST['name_first']) ? trim($_POST['name_first']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';

    // Sprawdzenie, czy wszystkie wymagane pola są wypełnione
    if (!empty($phone)) {
        // Przygotowanie i wykonanie zapytania SQL
        $stmt = $conn->prepare("INSERT INTO nm_krduch2subscribers (name_first, email, phone) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name_first, $email, $phone);

        if ($stmt->execute()) {
            echo "Nowy użytkownik został zarejestrowany.";
        } else {
            echo "Błąd: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Proszę wypełnić wszystkie wymagane pola.";
    }

    $conn->close();
}
?>
