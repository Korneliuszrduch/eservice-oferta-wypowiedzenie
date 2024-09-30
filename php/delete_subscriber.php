<?php
include 'config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['sid'])) {
    $sid = intval($data['sid']);
    
    // Aktualizacja statusu subskrybenta
    $sql = "UPDATE nm_krduch2subscribers SET status = 'deleted' WHERE sid = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $sid);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Nie udało się zaktualizować statusu subskrybenta.']);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Brak SID.']);
}

$conn->close();
?>