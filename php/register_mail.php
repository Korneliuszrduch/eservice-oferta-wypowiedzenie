<?php 
session_start();
include '../php/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Initialize variables
    $name_first = isset($_POST['name_first']) ? trim($_POST['name_first']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $update = isset($_POST['update']) ? $_POST['update'] : 'false';
    $current_timestamp = time(); // Current Unix timestamp
    $current_datetime = date("Y-m-d\TH:i"); // Current date in specific format

    if (!empty($email)) {
        if ($update === 'true' && isset($_SESSION['sid'])) {
            // Update mode
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
            // Check if email exists
            $stmt = $conn->prepare("SELECT sid FROM nm_krduch2subscribers WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                // Email exists, load user data
                $stmt->bind_result($sid);
                $stmt->fetch();
                
                $_SESSION['sid'] = $sid;
                $_SESSION['message'] = "Email już istnieje w bazie.";
            } else {
                // Insert new user
                $stmt = $conn->prepare("INSERT INTO nm_krduch2subscribers (name_first, email, phone, status, created) VALUES (?, ?, ?, 'active', ?)");
                $stmt->bind_param("ssii", $name_first, $email, $phone, $current_timestamp);

                if ($stmt->execute()) {
                    $sid = $stmt->insert_id;

                    // Insert current date into nm_krduch2subscribers_fields
                    $stmt_fields = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, 171, ?)");
                    $stmt_fields->bind_param("is", $sid, $current_datetime);

                    if ($stmt_fields->execute()) {
                        $_SESSION['message'] = "Nowy użytkownik został zarejestrowany z bieżącą datą.";
                    } else {
                        $_SESSION['message'] = "Błąd podczas zapisywania daty: " . $stmt_fields->error;
                    }

                    $stmt_fields->close();
                } else {
                    $_SESSION['message'] = "Błąd podczas rejestracji: " . $stmt->error;
                }

                $stmt->close();
            }

            $_SESSION['sid'] = $sid;
        }

        header("Content-Type: text/plain");
        echo $_SESSION['message'];
    } else {
        echo "Proszę wypełnić wymagane pole email.";
    }

    $conn->close();
}
?>
