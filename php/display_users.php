<?php
include 'config.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Pobieranie liczby SID-ów do wyświetlenia z formularza
$limit = isset($_POST['number_of_sids']) ? intval($_POST['number_of_sids']) : 200; // Domyślnie 200, jeśli brak wartości
$limit = max(1, $limit); // Ustawienie minimalnej wartości limitu na 1, aby uniknąć problemów

$sort_by_sid = isset($_POST['sort_by_sid']) ? $_POST['sort_by_sid'] : null;
$sort_by_date = isset($_POST['sort_by_date']) ? $_POST['sort_by_date'] : null;

// Walidacja kierunku sortowania, aby uniknąć SQL Injection
$valid_sort_orders = ['ASC', 'DESC'];
if ($sort_by_sid && !in_array($sort_by_sid, $valid_sort_orders)) {
    $sort_by_sid = null;
}
if ($sort_by_date && !in_array($sort_by_date, $valid_sort_orders)) {
    $sort_by_date = null;
}

// Określanie, które kryterium sortowania będzie użyte
if ($sort_by_sid) {
    $order_by = "u.sid $sort_by_sid";
} elseif ($sort_by_date) {
    $order_by = "field_value_171 $sort_by_date";
} else {
    // Domyślne sortowanie, jeśli żadne kryterium nie zostało wybrane
    $order_by = "field_value_171 DESC";
}

// Przygotowanie zapytania SQL z użyciem wybranego kryterium sortowania
$sql = "SELECT u.sid, u.name_first, u.email, u.phone, 
               MAX(CASE WHEN f.fid = 171 THEN f.value END) AS field_value_171, 
               MAX(CASE WHEN f.fid = 116 THEN f.value END) AS field_value_116,
               MAX(CASE WHEN f.fid = 115 THEN f.value END) AS field_value_115,
               MAX(CASE WHEN f.fid = 120 THEN f.value END) AS field_value_120
        FROM nm_krduch2subscribers u
        LEFT JOIN nm_krduch2subscribers_fields f ON u.sid = f.sid
        WHERE u.status = 'active'
        GROUP BY u.sid, u.name_first, u.email, u.phone
        ORDER BY $order_by
        LIMIT ?";


// Przygotowanie zapytania
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $limit); // Binding limit as an integer

// Wykonanie zapytania
$stmt->execute();
$result = $stmt->get_result();

// Sprawdzenie, czy zapytanie zwróciło wyniki
if ($result->num_rows > 0) {
    echo "<table border='1'>
            <thead>
                <tr>
                    <th>SID</th>
                    <th>NIP</th>
                    <th>Imię</th>
                    <th>Email</th>
                    <th>Telefon</th>
                         <th>Uwagi</th>
                    <th>Opcje</th>
               
                    <th>Data kontakt</th>
                    <th>zapisz</th>
                </tr>
            </thead>
            <tbody>";

    while ($row = $result->fetch_assoc()) {
        $currentDate = date('Y-m-d'); // Format: RRRR-MM-DD
        $combinedValue = $row['field_value_116'] . ' ' . $currentDate . ' ' . htmlspecialchars($row['field_value_115'], ENT_QUOTES, 'UTF-8');

        $selectedOption = htmlspecialchars($row['field_value_115'], ENT_QUOTES, 'UTF-8');

        echo "<tr class='data-table js-data-table'>
                <form class='form' accept-charset='UTF-8' action='https://mail.korneliuszrduch.pl/subscribe.php' method='POST'>
                    <td>" . htmlspecialchars($row['sid'], ENT_QUOTES, 'UTF-8') . "</td>
                    <td><input type='text' name='fields[120]' value='" . htmlspecialchars($row['field_value_120'], ENT_QUOTES, 'UTF-8') . "'></td>
                    <td><input type='text' name='fname' value='" . htmlspecialchars($row['name_first'], ENT_QUOTES, 'UTF-8') . "'></td>
                    <td><input class='js-email-contact' type='email' name='email' value='" . htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8') . "'></td>

           

                  <td><a href='tel:" . htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') . "'>
                            <input type='text' name='phone' value='" . htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') . "'></a>  </td>
                            
                    <td><textarea class='textarea' name='fields[116]' rows='10' cols='30'>" . htmlspecialchars($combinedValue, ENT_QUOTES, 'UTF-8') . "</textarea></td>
                         <td>
                        <select name='fields[115]' id='field115'>
                            <option value='$selectedOption'>$selectedOption</option>
                              <option value='0% 1 Niezainteresowany'" . ($selectedOption === '0% 1 Niezainteresowany' ? ' selected' : '') . ">0% 1 Niezainteresowany</option>
                              <option value='0% 2 Niezainteresowany'" . ($selectedOption === '0% 2 Niezainteresowany' ? ' selected' : '') . ">0% 2 Niezainteresowany</option>
                              <option value='0% 3 Niezainteresowany'" . ($selectedOption === '0% 3 Niezainteresowany' ? ' selected' : '') . ">0% 3 Niezainteresowany</option>
                            <option value='0% 1 Brak kontaktu'" . ($selectedOption === '0% 1 Brak kontaktu' ? ' selected' : '') . ">0% 1 Brak kontaktu</option>
                            <option value='0% 2 Brak kontaktu'" . ($selectedOption === '0% 2 Brak kontaktu' ? ' selected' : '') . ">0% 2 Brak kontaktu</option>
                            <option value='0% 3 Brak kontaktu'" . ($selectedOption === '0% 3 Brak kontaktu' ? ' selected' : '') . ">0% 3 Brak kontaktu</option>
                            <option value='0% Wysłalem SMS'" . ($selectedOption === '0% Wysłalem SMS' ? ' selected' : '') . ">0% Wysłalem SMS</option>
                            <option value='2% odbiera i się rozłącza'" . ($selectedOption === '2% odbiera i się rozłącza' ? ' selected' : '') . ">2% odbiera i się rozłącza0</option>
                            <option value='10% Omówić potrzeby'" . ($selectedOption === '10% Omówić potrzeby' ? ' selected' : '') . ">10% Omówić potrzeby</option>
                             <option value='5% Ustalono inny termin'" . ($selectedOption === '5% Ustalono inny termin' ? ' selected' : '') . ">5% Ustalono inny termin</option>
                            <option value='14% Przygotować kalkulator'" . ($selectedOption === '14% Przygotować kalkulator' ? ' selected' : '') . ">14% Przygotować kalkulator</option>
                            <option value='18% Przedstawić ofertę'" . ($selectedOption === '18% Przedstawić ofertę' ? ' selected' : '') . ">18% Przedstawić ofertę</option>
                            <option value='41% Kliknął w ofertę'" . ($selectedOption === '41% Kliknął w ofertę' ? ' selected' : '') . ">41% Kliknął w ofertę</option>
                            <option value='0% Branża nieobsługiwana'" . ($selectedOption === '0% Branża nieobsługiwana' ? ' selected' : '') . ">0% Branża nieobsługiwana</option>
                            <option value='0%08 Obecny klient eservice'" . ($selectedOption === '0%08 Obecny klient eservice' ? ' selected' : '') . ">0%08 Obecny klient eservice</option>
                        </select>
                    </td>
                          
                    <td><input class='js-date-time-local' type='datetime-local' name='fields[171]' value='" . htmlspecialchars($row['field_value_171'], ENT_QUOTES, 'UTF-8') . "'></td>
                    <td>
                        <input name='mlid' type='hidden' value='231' />
                        <input name='req' type='hidden' value='email' />
                        <input name='token' type='hidden' value='da945ba7449d1e092316ba46f044f0b134483b6b' />
                        <input name='coregister' type='hidden' value='' />
                        <button type='submit'>Zapisz</button>
                    </td>
                </form>
            </tr>";
    }
    echo "</tbody></table>";
} else {
    echo "<tr><td colspan='9'>Brak użytkowników w bazie danych.</td></tr>";
}

// Zamknięcie zapytania i połączenia
$stmt->close();
$conn->close();
?>