<?php
header("Access-Control-Allow-Origin: *"); // lub podaj konkretną domenę zamiast '*'
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include '../php/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $offerOpeningStatus = 'kliknął w ofertę lub dokument';

    if (!empty($email)) {
        // Search for the subscriber by email and retrieve the sid where the status is 'active'
        $stmt = $conn->prepare("SELECT sid FROM nm_krduch2subscribers WHERE email = ? AND status = 'active'");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($sid);
        $stmt->fetch();
        $stmt->close();

        if (!empty($sid)) {

            



            $stmt_place = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, 114, ?)");
            $stmt_place->bind_param("is", $sid, $offerOpeningStatus);
            $stmt_place->execute();
            $stmt_place->close();

            echo "Status and field 114 updated successfully with value: " . $offerOpeningStatus;
        } else {
            echo "Active subscriber not found for the provided email";
        }
    } else {
        echo "Invalid email";
    }
}
?>
