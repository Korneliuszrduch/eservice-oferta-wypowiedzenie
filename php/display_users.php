<?php
include 'php/config.php';

// Zmodyfikowane zapytanie SQL
$sql = "SELECT u.sid, u.name_first, u.email, u.phone, 
               MAX(CASE WHEN f.fid = 171 THEN f.value END) AS field_value_171, 
               MAX(CASE WHEN f.fid = 116 THEN f.value END) AS field_value_116,
               MAX(CASE WHEN f.fid = 115 THEN f.value END) AS field_value_115
        FROM nm_krduch2subscribers u
        LEFT JOIN nm_krduch2subscribers_fields f ON u.sid = f.sid
        WHERE u.sid <= 8590 AND u.status = 'active'
        GROUP BY u.sid, u.name_first, u.email, u.phone
        ORDER BY u.sid DESC
        LIMIT 200";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <thead>
                <tr>
                    <th>SID</th>
                    <th>Imię</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Opcje</th>
                    <th>Uwagi</th>
                    <th>Data</th>
                    <th>Akcja</th>
                </tr>
            </thead>
            <tbody>";
    
    while ($row = $result->fetch_assoc()) {
        $currentDate = date('Y-m-d'); // Format: RRRR-MM-DD
        $combinedValue = $row['field_value_116'] . ' ' . $currentDate;
        $selectedOption = htmlspecialchars($row['field_value_115'], ENT_QUOTES, 'UTF-8');

        echo "<tr class='data-table'>
                <form class='form' accept-charset='UTF-8' action='https://mail.korneliuszrduch.pl/subscribe.php' method='POST'>
                    <td>" . htmlspecialchars($row['sid'], ENT_QUOTES, 'UTF-8') . "</td>
                    <td><input type='text' name='fname' value='" . htmlspecialchars($row['name_first'], ENT_QUOTES, 'UTF-8') . "'></td>
                    <td><input type='email' name='email' value='" . htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8') . "'></td>
                    <td><a href='tel:" . htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') . "'>
                            <input type='text' name='phone' value='" . htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') . "'>
                        </a></td>
                    <td>
                        <select name='fields[115]' id='field115'>
                            <option value='$selectedOption'>$selectedOption</option>
                            <option value='5% Ustalono inny termin'" . ($selectedOption === '5% Ustalono inny termin' ? ' selected' : '') . ">5% Ustalono inny termin</option>
                            <option value='0% 1 Brak kontaktu'" . ($selectedOption === '0% 1 Brak kontaktu' ? ' selected' : '') . ">0% 1 Brak kontaktu</option>
                            <option value='0% 2 Brak kontaktu'" . ($selectedOption === '0% 2 Brak kontaktu' ? ' selected' : '') . ">0% 2 Brak kontaktu</option>
                            <option value='0% 3 Brak kontaktu'" . ($selectedOption === '0% 3 Brak kontaktu' ? ' selected' : '') . ">0% 3 Brak kontaktu</option>
                            <option value='0% SMS'" . ($selectedOption === '0% SMS' ? ' selected' : '') . ">0% SMS</option>
                        </select>
                    </td>
                    <td><textarea name='fields[116]' rows='4' cols='25'>" . htmlspecialchars($combinedValue, ENT_QUOTES, 'UTF-8') . "</textarea></td>
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
    echo "<tr><td colspan='8'>Brak użytkowników w bazie danych.</td></tr>";
}

$conn->close();
?>
