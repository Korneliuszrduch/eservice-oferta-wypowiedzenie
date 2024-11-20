<?php
include '../php/config.php';
header('Content-Type: application/json'); // Ustawienie nagłówka na JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Odbieranie danych z formularza
    $selectedOptionCompanyOfTerminal = isset($_POST['selectedOptionCompanyOfTerminal']) ? trim($_POST['selectedOptionCompanyOfTerminal']) : '';
 

    $nameFirst = isset($_POST['nameFirst']) ? trim($_POST['nameFirst']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $monthlyCardTurnover = isset($_POST['monthlyCardTurnover']) ? trim($_POST['monthlyCardTurnover']) : '';
    $companyTaxNumber = isset($_POST['companyTaxNumber']) ? trim($_POST['companyTaxNumber']) : '';
    $monthlyCommissionCompetition = isset($_POST['monthlyCommissionCompetition']) ? trim($_POST['monthlyCommissionCompetition']) : '';
    $averageTransaction = isset($_POST['averageTransaction']) ? trim($_POST['averageTransaction']) : '';
    $fixedMonthlyCostsCompetition = isset($_POST['fixedMonthlyCostsCompetition']) ? trim($_POST['fixedMonthlyCostsCompetition']) : '';
    $selectedStatusSentOffer = isset($_POST['selectedStatusSentOffer']) ? trim($_POST['selectedStatusSentOffer']) : '';
    $selectedStatusOpenOffer = isset($_POST['selectedStatusOpenOffer']) ? trim($_POST['selectedStatusOpenOffer']) : '';

    $dateContactCustomer = isset($_POST['dateContactCustomer']) ? trim($_POST['dateContactCustomer']) : '';
    $comments = isset($_POST['comments']) ? trim($_POST['comments']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $nameOfTheFirstRecommendedTerminal = isset($_POST['nameOfTheFirstRecommendedTerminal']) ? trim($_POST['nameOfTheFirstRecommendedTerminal']) : '';
    $nameOfTheSecondRecommendedTerminal = isset($_POST['nameOfTheSecondRecommendedTerminal']) ? trim($_POST['nameOfTheSecondRecommendedTerminal']) : '';
    $nameOfTheThirdRecommendedTerminal = isset($_POST['nameOfTheThirdRecommendedTerminal']) ? trim($_POST['nameOfTheThirdRecommendedTerminal']) : '';
    $phoneOfTheFirstdRecommendedTerminal = isset($_POST['phoneOfTheFirstdRecommendedTerminal']) ? trim($_POST['phoneOfTheFirstdRecommendedTerminal']) : '';
    $phoneOfTheSecondRecommendedTerminal = isset($_POST['phoneOfTheSecondRecommendedTerminal']) ? trim($_POST['phoneOfTheSecondRecommendedTerminal']) : '';
    $phoneOfTheThirdRecommendedTerminal = isset($_POST['phoneOfTheThirdRecommendedTerminal']) ? trim($_POST['phoneOfTheThirdRecommendedTerminal']) : '';
    $customerStatus = isset($_POST['customerStatus']) ? trim($_POST['customerStatus']) : '';






    // Sprawdzenie, czy e-mail jest podany
    if (!empty($email)) {
        // Wyszukiwanie subskrybenta na podstawie e-maila
        $stmt = $conn->prepare("SELECT sid FROM nm_krduch2subscribers WHERE email = ? AND status = 'active'");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($sid);
        $stmt->fetch();
        $stmt->close();

        if (!empty($sid)) {
            // Aktualizacja name_first i phone
          //  $stmt_update_name_phone = $conn->prepare("UPDATE nm_krduch2subscribers SET name_first = ?, phone = ? WHERE sid = ?");
           // $stmt_update_name_phone->bind_param("ssi", $nameFirst, $phone, $sid);
           // $stmt_update_name_phone->execute();
           // $stmt_update_name_phone->close();

            // Tworzenie tablicy z polami do aktualizacji
            $fieldsToUpdate = [
                112 => $selectedOptionCompanyOfTerminal,
                114 => $selectedStatusOpenOffer,
                183 => $monthlyCardTurnover,
                330 => $monthlyCommissionCompetition,
                184 => $averageTransaction,
                329 => $fixedMonthlyCostsCompetition,
                120 => $companyTaxNumber,
                115 => $customerStatus,
                171 => $dateContactCustomer,
                116 => $comments,
                234 => $selectedStatusSentOffer,
                269=> $nameOfTheFirstRecommendedTerminal,
                270=> $phoneOfTheFirstRecommendedTerminal,
                271=> $nameOfTheSecondRecommendedTerminal,
                272=> $phoneOfTheSecondRecommendedTerminal,
                273=> $nameOfTheThirdRecommendedTerminal,
                274=> $phoneOfTheThirdRecommendedTerminal,


            ];

            $updateSuccess = true; // Flaga sukcesu aktualizacji

            foreach ($fieldsToUpdate as $fid => $value) {
                // Sprawdzenie, czy istnieje już wiersz dla danej kombinacji sid i fid
                $stmt_check_field = $conn->prepare("SELECT COUNT(*) FROM nm_krduch2subscribers_fields WHERE sid = ? AND fid = ?");
                $stmt_check_field->bind_param("ii", $sid, $fid);
                $stmt_check_field->execute();
                $stmt_check_field->bind_result($rowCount);
                $stmt_check_field->fetch();
                $stmt_check_field->close();

                if ($rowCount > 0) {
                    // Jeśli istnieje wiersz, wykonaj UPDATE
                    $stmt_update_field = $conn->prepare("UPDATE nm_krduch2subscribers_fields SET value = ? WHERE sid = ? AND fid = ?");
                    $stmt_update_field->bind_param("sii", $value, $sid, $fid);
                    if (!$stmt_update_field->execute()) {
                        $updateSuccess = false; // Jeśli wystąpi błąd, ustaw flagę na false
                        echo json_encode(["error" => "Błąd podczas aktualizacji rekordu dla fid $fid: " . $stmt_update_field->error]);
                    }
                    $stmt_update_field->close();
                } else {
                    // Jeśli nie istnieje wiersz, wykonaj INSERT
                    $stmt_insert_field = $conn->prepare("INSERT INTO nm_krduch2subscribers_fields (sid, fid, value) VALUES (?, ?, ?)");
                    $stmt_insert_field->bind_param("iis", $sid, $fid, $value);
                    if (!$stmt_insert_field->execute()) {
                        $updateSuccess = false; // Jeśli wystąpi błąd, ustaw flagę na false
                        echo json_encode(["error" => "Błąd podczas dodawania rekordu dla fid $fid: " . $stmt_insert_field->error]);
                    }
                    $stmt_insert_field->close();
                }
            }

            if ($updateSuccess) {
                echo json_encode([
                    "message" => "Dane zostaly zaktualizowane lub dodane w bazie dla e-maila: $email",
                    "sid" => $sid
                ]);
            }
        } else {
            error_log("Nie znaleziono subskrybenta o podanym adresie email: $email");
            echo json_encode(["error" => "Nie znaleziono aktywnego subskrybenta dla podanego e-maila."]);
        }
    } else {
        echo json_encode(["error" => "Nieprawidłowy e-mail."]);
    }
}

$conn->close(); // Zamknięcie połączenia z bazą danych
?>
