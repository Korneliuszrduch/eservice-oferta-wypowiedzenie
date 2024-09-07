<?php
include 'config.php';

// Zmodyfikowane zapytanie SQL, aby pobierać wartość z kolumny 'fid' z tabeli 'fieldsSubstribes' tylko wtedy, gdy 'fid' ma wartość 171
$sql = "SELECT u.sid, u.name_first, u.email, u.phone, 
               MAX(CASE WHEN f.fid = 171 THEN f.value END) AS field_value_171, 
               MAX(CASE WHEN f.fid = 116 THEN f.value END) AS field_value_116,
               MAX(CASE WHEN f.fid = 115 THEN f.value END) AS field_value_115
        FROM nm_krduch2subscribers u
        LEFT JOIN nm_krduch2subscribers_fields f ON u.sid = f.sid
        WHERE u.sid <= 8569 AND u.status = 'active'
        GROUP BY u.sid, u.name_first, u.email, u.phone
        ORDER BY u.sid DESC
        LIMIT 200";









$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {

        $currentDate = date('Y-m-d'); // Format: RRRR-MM-DD GG:MM:SS

        // Łączymy wartość field_value_116 z aktualną datą

        $combinedValue = $row['field_value_116'] . ' ' . $currentDate;
        echo "<tr class= 'data-table'>
                <form accept-charset='UTF-8' action='https://mail.korneliuszrduch.pl/subscribe.php' method='post'>
                     <td><input type='text' name='fields[115]' value='{$row['field_value_115']}'></td> 
                    <td><input type='text' name='fname' value='{$row['name_first']}'></td> 
                    <td><input type='email' name='email' value='{$row['email']}'></td> 
                <td> <a href='tel:{$row['phone']}'>
                            <input type='text' name='phone' value='{$row['phone']}'>
                        </a>
                        </td>
                      <td><textarea name='fields[116]' rows='4' cols='25'>{$combinedValue}</textarea></td>
                    <td><input class ='js-date-time-local'  type='datetime-local' name='fields[171]' value='{$row['field_value_171']}'></td> 
                    <td>
                   
                        <input name='mlid' type='hidden' value='231' />
                        <input name='req' type='hidden' value='email'>
                        <input name='token' type='hidden' value='da945ba7449d1e092316ba46f044f0b134483b6b' />
                        <input name='coregister' type='hidden' value='' />
                        <button type='submit'>Zapisz</button>
                        
                    </td>
                </form>
            </tr>";
    }
} else {
    echo "<tr><td colspan='7'>Brak użytkowników w bazie danych.</td></tr>";
}

$conn->close();
?>