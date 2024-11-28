<?php
include '../php/config.php';
header('Content-Type: application/json'); // Ustawienie nagłówka na JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Odbieranie danych z formularza
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $nameFirst = isset($_POST['nameFirst']) ? trim($_POST['nameFirst']) : '';
    $nameLast = isset($_POST['nameLast']) ? trim($_POST['nameLast']) : ''; // Dodano nameLast
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $monthlyCardTurnover = isset($_POST['monthlyCardTurnover']) ? trim($_POST['monthlyCardTurnover']) : '';
    $companyTaxNumber = isset($_POST['companyTaxNumber']) ? trim($_POST['companyTaxNumber']) : '';
    $monthlyCommissionCompetition = isset($_POST['monthlyCommissionCompetition']) ? trim($_POST['monthlyCommissionCompetition']) : '';
    $averageTransaction = isset($_POST['averageTransaction']) ? trim($_POST['averageTransaction']) : '';
    $fixedMonthlyCostsCompetition = isset($_POST['fixedMonthlyCostsCompetition']) ? trim($_POST['fixedMonthlyCostsCompetition']) : '';
    $selectedStatusSentOffer = isset($_POST['selectedStatusSentOffer']) ? trim($_POST['selectedStatusSentOffer']) : '';
    $selectedStatusOpenOffer = isset($_POST['selectedStatusOpenOffer']) ? trim($_POST['selectedStatusOpenOffer']) : '';
    $customerStatus = isset($_POST['customerStatus']) ? trim($_POST['customerStatus']) : '';
    $dateContactCustomer = isset($_POST['dateContactCustomer']) ? trim($_POST['dateContactCustomer']) : '';
    $comments = isset($_POST['comments']) ? trim($_POST['comments']) : '';
    $nameOfTheFirstRecommendedTerminal = isset($_POST['nameOfTheFirstRecommendedTerminal']) ? trim($_POST['nameOfTheFirstRecommendedTerminal']) : '';
    $nameOfTheSecondRecommendedTerminal = isset($_POST['nameOfTheSecondRecommendedTerminal']) ? trim($_POST['nameOfTheSecondRecommendedTerminal']) : '';
    $nameOfTheThirdRecommendedTerminal = isset($_POST['nameOfTheThirdRecommendedTerminal']) ? trim($_POST['nameOfTheThirdRecommendedTerminal']) : '';
    $phoneOfTheFirstRecommendedTerminal = isset($_POST['phoneOfTheFirstRecommendedTerminal']) ? trim($_POST['phoneOfTheFirstRecommendedTerminal']) : '';
    $phoneOfTheSecondRecommendedTerminal = isset($_POST['phoneOfTheSecondRecommendedTerminal']) ? trim($_POST['phoneOfTheSecondRecommendedTerminal']) : '';
    $phoneOfTheThirdRecommendedTerminal = isset($_POST['phoneOfTheThirdRecommendedTerminal']) ? trim($_POST['phoneOfTheThirdRecommendedTerminal']) : '';

 $fieldsToUpdate = [
        112 => isset($_POST['selectedOptionCompanyOfTerminal']) ? trim($_POST['selectedOptionCompanyOfTerminal']) : '',
        114 => isset($_POST['selectedStatusOpenOffer']) ? trim($_POST['selectedStatusOpenOffer']) : '',
        183 => isset($_POST['monthlyCardTurnover']) ? trim($_POST['monthlyCardTurnover']) : '',
        330 => isset($_POST['monthlyCommissionCompetition']) ? trim($_POST['monthlyCommissionCompetition']) : '',
        184 => isset($_POST['averageTransaction']) ? trim($_POST['averageTransaction']) : '',
        329 => isset($_POST['fixedMonthlyCostsCompetition']) ? trim($_POST['fixedMonthlyCostsCompetition']) : '',
        120 => isset($_POST['companyTaxNumber']) ? trim($_POST['companyTaxNumber']) : '',
        115 => isset($_POST['customerStatus']) ? trim($_POST['customerStatus']) : '',
        171 => isset($_POST['dateContactCustomer']) ? trim($_POST['dateContactCustomer']) : '',
        116 => isset($_POST['comments']) ? trim($_POST['comments']) : '',
        234 => isset($_POST['selectedStatusSentOffer']) ? trim($_POST['selectedStatusSentOffer']) : '',
        269 => isset($_POST['nameOfTheFirstRecommendedTerminal']) ? trim($_POST['nameOfTheFirstRecommendedTerminal']) : '',
        270 => isset($_POST['phoneOfTheFirstRecommendedTerminal']) ? trim($_POST['phoneOfTheFirstRecommendedTerminal']) : '',
        271 => isset($_POST['nameOfTheSecondRecommendedTerminal']) ? trim($_POST['nameOfTheSecondRecommendedTerminal']) : '',
        272 => isset($_POST['phoneOfTheSecondRecommendedTerminal']) ? trim($_POST['phoneOfTheSecondRecommendedTerminal']) : '',
        273 => isset($_POST['nameOfTheThirdRecommendedTerminal']) ? trim($_POST['nameOfTheThirdRecommendedTerminal']) : '',
        274 => isset($_POST['phoneOfTheThirdRecommendedTerminal']) ? trim($_POST['phoneOfTheThirdRecommendedTerminal']) : '',
    ];

    if (!empty($email)) {
        // Wyszukiwanie subskrybenta
        $stmt = $conn->prepare("SELECT sid FROM nm_krduch2subscribers WHERE email = ? AND status = 'active'");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($sid);
        $stmt->fetch();
        $stmt->close();

        if (!empty($sid)) {
            // Aktualizacja podstawowych danych kontaktowych
            $stmt_update = $conn->prepare("UPDATE nm_krduch2subscribers SET name_first = ?, name_last = ?, phone = ? WHERE sid = ?");
            $stmt_update->bind_param("sssi", $nameFirst, $nameLast, $phone, $sid);
            $stmt_update->execute();
            $stmt_update->close();

            // Aktualizacja pól dodatkowych
            $updateSuccess = true;
            foreach ($fieldsToUpdate as $fid => $value) {

                if (!empty($value)) {
                    $stmt_check_field = $conn->prepare("SELECT COUNT(*) FROM nm_krduch2subscribers_fields WHERE sid = ? AND fid = ?");
                    $stmt_check_field->bind_param("ii", $sid, $fid);
                    $stmt_check_field->execute();
                    $stmt_check_field->bind_result($rowCount);
                    $stmt_check_field->fetch();
                    $stmt_check_field->close();

                    if ($rowCount > 0) {
                        $stmt_update_field = $conn->prepare("UPDATE nm_krduch2subscribers_fields SET value = ? WHERE sid = ? AND fid = ?");
                        $stmt_update_field->bind_param("sii", $value, $sid, $fid);
                        if (!$stmt_update_field->execute()) {
                            $updateSuccess = false;
                            echo json_encode(["error" => "Błąd aktualizacji dla fid $fid: " . $stmt_update_field->error]);
                        }
                        $stmt_update_field->close();
                    } else {
                        $stmt_insert_field = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, ?, ?)");
                        $stmt_insert_field->bind_param("iis", $sid, $fid, $value);
                        if (!$stmt_insert_field->execute()) {
                            $updateSuccess = false;
                            echo json_encode(["error" => "Błąd dodawania dla fid $fid: " . $stmt_insert_field->error]);
                        }
                        $stmt_insert_field->close();
                    }
                }
            }

            if ($updateSuccess) {
                echo json_encode([
                    "message" => "Dane zostały zaktualizowane dla e-maila: $email",
                    "sid" => $sid
                ]);
            }
        } else {
            echo json_encode(["error" => "Nie znaleziono aktywnego subskrybenta dla podanego e-maila."]);
        }
    } else {
        echo json_encode(["error" => "Nieprawidłowy e-mail."]);
    }
}

$conn->close();
?>
