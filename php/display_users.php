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
              MAX(CASE WHEN f.fid = 330 THEN f.value END) AS field_value_330,
              MAX(CASE WHEN f.fid = 329 THEN f.value END) AS field_value_329,
               MAX(CASE WHEN f.fid = 184 THEN f.value END) AS field_value_184,
               MAX(CASE WHEN f.fid = 183 THEN f.value END) AS field_value_183,
               MAX(CASE WHEN f.fid = 171 THEN f.value END) AS field_value_171, 
               MAX(CASE WHEN f.fid = 116 THEN f.value END) AS field_value_116,
               MAX(CASE WHEN f.fid = 114 THEN f.value END) AS field_value_114,
               MAX(CASE WHEN f.fid = 115 THEN f.value END) AS field_value_115,
               MAX(CASE WHEN f.fid = 112 THEN f.value END) AS field_value_112,
               MAX(CASE WHEN f.fid = 120 THEN f.value END) AS field_value_120,
                MAX(CASE WHEN f.fid = 234 THEN f.value END) AS field_value_234
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
        
            <tbody class='js-tbody'>";

  while ($row = $result->fetch_assoc()) {
    $currentDate = date('Y-m-d'); // Format: RRRR-MM-DD
    $combinedValue = $row['field_value_116'] . ' ' . $currentDate . ' ' . htmlspecialchars($row['field_value_115'], ENT_QUOTES, 'UTF-8');

    $selectOptionCustumerStatus = htmlspecialchars($row['field_value_115'], ENT_QUOTES, 'UTF-8');
    $selectedOptionCompanyOfTerminal = htmlspecialchars($row['field_value_112'], ENT_QUOTES, 'UTF-8');
    

    $selectedOptionStatusOpenOffer = htmlspecialchars($row['field_value_114'], ENT_QUOTES, 'UTF-8');
    $selectedOptionStatusSentOffer = htmlspecialchars($row['field_value_234'], ENT_QUOTES, 'UTF-8');

    echo "<tr class='data-table js-data-table'>
                <form class='js-form-date-contact' accept-charset='UTF-8' action='https://mail.korneliuszrduch.pl/subscribe.php' method='POST'>
                     
                   
                    <td class='table'>

                      <select class='js-select-option-company-of-terminal' name='fields[112]' id='field112'>
                            <option value='$selectedOptionCompanyOfTerminal'>$selectedOptionCompanyOfTerminal</option>
                                           <option value='Brak'" . ($selectedOptionCompanyOfTerminal === 'Brak' ? ' selected' : '') . ">Brak</option>
                                                             <option value='Elavon'" . ($selectedOptionCompanyOfTerminal === 'Elavon' ? ' selected' : '') . ">Elavon</option>
                                                                 <option value='Ecard'" . ($selectedOptionCompanyOfTerminal === 'Ecard' ? ' selected' : '') . ">Ecard</option>
                                                                   <option value='eService'" . ($selectedOptionCompanyOfTerminal === 'eService' ? ' selected' : '') . ">eService</option>
                                          <option value='Hiltech'" . ($selectedOptionCompanyOfTerminal === 'Hiltech' ? ' selected' : '') . ">Hiltech</option>
             
                         <option value='IT Cart'" . ($selectedOptionCompanyOfTerminal === 'IT Cart' ? ' selected' : '') . ">IT Cart</option>
                                     <option value='ING'" . ($selectedOptionCompanyOfTerminal === 'ING' ? ' selected' : '') . ">ING</option>
                                          <option value='Kartel'" . ($selectedOptionCompanyOfTerminal === 'Kartel' ? ' selected' : '') . ">Kartel</option>
           <option value='Kolporter'" . ($selectedOptionCompanyOfTerminal === 'Kolporter' ? ' selected' : '') . ">Kolporter</option>
                     
                                <option value='Paymento'" . ($selectedOptionCompanyOfTerminal === 'Paymento' ? ' selected' : '') . ">Paymento</option>
                                    <option value='Paysquare'" . ($selectedOptionCompanyOfTerminal === 'Paysquare' ? ' selected' : '') . ">Paysquare</option>
                                                 <option value='Paytel'" . ($selectedOptionCompanyOfTerminal === 'Paytel' ? ' selected' : '') . ">Paytel</option>
                                                                   <option value='Pekao SA'" . ($selectedOptionCompanyOfTerminal === 'Pekao SA' ? ' selected' : '') . ">Pekao SA</option>
                                                                     <option value='Pep'" . ($selectedOptionCompanyOfTerminal === 'Pep' ? ' selected' : '') . ">Pep</option>
                                                                         <option value='Planet Pay'" . ($selectedOptionCompanyOfTerminal === 'Planet Pay' ? ' selected' : '') . ">Planet Pay</option>
                                                                                <option value='Polcard'" . ($selectedOptionCompanyOfTerminal === 'Polcard' ? ' selected' : '') . ">Polcard</option>
                                                                                         <option value='SumUp'" . ($selectedOptionCompanyOfTerminal === 'SumUp' ? ' selected' : '') . ">SumUp</option>

     <option value='Six payment'" . ($selectedOptionCompanyOfTerminal === 'Six payment' ? ' selected' : '') . ">Six payment</option>
             
     <option value='Topcard'" . ($selectedOptionCompanyOfTerminal === 'Topcard' ? ' selected' : '') . ">Topcard</option>
                 <option value='Wordline'" . ($selectedOptionCompanyOfTerminal === 'Wordline' ? ' selected' : '') . ">Wordline</option>
                   <option value='Brak informacji o operatorze'" . ($selectedOptionCompanyOfTerminal === 'Brak informacji o operatorze' ? ' selected' : '') . ">Brak informacji o operatorze</option>
                        <option value='Inny'" . ($selectedOptionCompanyOfTerminal === 'Inny' ? ' selected' : '') . ">Inny</option>
                        </select>
           <input class='js-monthly-card-turnover' type='text' name='fields[183]' value='" . htmlspecialchars($row['field_value_183'], ENT_QUOTES, 'UTF-8') . "' placeholder='Obroty miesięczne'>

              <input class='js-monthly-comission-competition' type='text' name='fields[330]' value='" . htmlspecialchars($row['field_value_330'], ENT_QUOTES, 'UTF-8') . "' placeholder='Prowizja z faktury konkurencja'>

            <input class ='js-average-transaction' type='text' name='fields[184]' value='" . htmlspecialchars($row['field_value_184'], ENT_QUOTES, 'UTF-8') . "' placeholder='Średnia wartość transakcji'>

                      <input class='js-fixed-monthly-cost-competition' type='text' name='fields[329]' value='" . htmlspecialchars($row['field_value_329'], ENT_QUOTES, 'UTF-8') . "' placeholder='Opłaty stałe konkurencja'>
                    <input class='js-company-tax-number' type='text' name='fields[120]' value='" . htmlspecialchars($row['field_value_120'], ENT_QUOTES, 'UTF-8') . "' placeholder='NIP'>
                    
  <select class='js-offer-sent-status' name='fields[234]' id='field234'>
                            <option value='$selectedOptionStatusSentOffer'>$selectedOptionStatusSentOffer</option>
                            <option value='Ofertę wysłano'" . ($selectedOptionStatusSentOffer === 'Ofertę wysłano' ? ' selected' : '') . ">Ofertę wysłano</option>
                                 <option value='Nie wysyłaj oferty'" . ($selectedOptionStatusSentOffer === 'Nie wysyłaj oferty' ? ' selected' : '') . ">Nie wysyłaj oferty</option>
                            <option value=''" . ($selectedOptionStatusSentOffer === '' ? ' selected' : '') . "></option>
                         
                        </select>




              <select class='js-offer-opening-status' name='fields[114]' id='field114'>
                            <option value='$selectedOptionStatusOpenOffer'>$selectedOptionStatusOpenOffer</option>
                            <option value='Kliknął w ofertę lub dokument'" . ($selectedOptionStatusOpenOffer === 'Kliknął w ofertę lub dokument' ? ' selected' : '') . ">Kliknął w ofertę lub dokument</option>
                            <option value=''" . ($selectedOptionStatusOpenOffer === '' ? ' selected' : '') . "></option>
                         
                        </select>

                    <input class='js-input-name-first' type='text' name='fname' value='" . htmlspecialchars($row['name_first'], ENT_QUOTES, 'UTF-8') . "'placeholder='Imię'>
                    <input class='js-email-contact' type='email' name='email' value='" . htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8') . "'placeholder='Email'>
                  <a href='tel:" . htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') . "'>
                            <input class='js-input-phone' type='text' name='phone' value='" . htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') . "'placeholder='Telefon'></a> 
                             <select class= 'js-latest-custumer-status' name='fields[115]' id='field115'>
                            <option value='$selectOptionCustumerStatus'>$selectOptionCustumerStatus</option>
                                           <option value='0% Pomyłka'" . ($selectOptionCustumerStatus === '0% Pomyłka' ? ' selected' : '') . ">0% Pomyłka</option>
                              <option value='0% 1 Brak kontaktu'" . ($selectOptionCustumerStatus === '0% 1 Brak kontaktu' ? ' selected' : '') . ">0% 1 Brak kontaktu</option>
                            <option value='0% 2 Brak kontaktu'" . ($selectOptionCustumerStatus === '0% 2 Brak kontaktu' ? ' selected' : '') . ">0% 2 Brak kontaktu</option>
                            <option value='0% 3 Brak kontaktu'" . ($selectOptionCustumerStatus === '0% 3 Brak kontaktu' ? ' selected' : '') . ">0% 3 Brak kontaktu</option>
                                                     <option value='0% Wysłał SMS'" . ($selectOptionCustumerStatus === '0% Wysłał SMS' ? ' selected' : '') . ">0% Wysłał SMS</option>
                                                                           
                            <option value='0% Wysłalem SMS'" . ($selectOptionCustumerStatus === '0% Wysłalem SMS' ? ' selected' : '') . ">0% Wysłalem SMS</option>
                             <option value='0% Wysłalem MAIL z Prośbą o Kontakt'" . ($selectOptionCustumerStatus === '0% Wysłalem MAIL z Prośbą o Kontakt' ? ' selected' : '') . ">0% Wysłalem MAIL z Prośbą o Kontakt</option>
                              <option value='0%08 Obecny klient eservice'" . ($selectOptionCustumerStatus === '0%08 Obecny klient eservice' ? ' selected' : '') . ">0%08 Obecny klient eservice</option>
                               <option value='0% Branża nieobsługiwana'" . ($selectOptionCustumerStatus === '0% Branża nieobsługiwana' ? ' selected' : '') . ">0% Branża nieobsługiwana</option>
                              <option value='0% 1 Niezainteresowany'" . ($selectOptionCustumerStatus === '0% 1 Niezainteresowany' ? ' selected' : '') . ">0% 1 Niezainteresowany</option>
                              <option value='0% 2 Niezainteresowany'" . ($selectOptionCustumerStatus === '0% 2 Niezainteresowany' ? ' selected' : '') . ">0% 2 Niezainteresowany</option>
                              <option value='0% 3 Niezainteresowany'" . ($selectOptionCustumerStatus === '0% 3 Niezainteresowany' ? ' selected' : '') . ">0% 3 Niezainteresowany</option>
                                 <option value='0% 1 Podpisałał z konkurencją'" . ($selectOptionCustumerStatus === '0% 1 Podpisałał z konkurencją' ? ' selected' : '') . ">0% 1 Podpisałał z konkurencją</option>


                               
                                 <option value='0% błędny mail. Utworzono z poprawionym'" . ($selectOptionCustumerStatus === '0% błędny mail. Utworzono z poprawionym' ? ' selected' : '') . ">0% błędny mail. Utworzono z poprawionym</option>
                                   <option value='1% Odebrał i miał oddzwonić'" . ($selectOptionCustumerStatus === '1% Odebrał i miał oddzwonić' ? ' selected' : '') . ">1% Odebrał i miał oddzwonić</option>
                            <option value='2% odbiera i się rozłącza'" . ($selectOptionCustumerStatus === '2% odbiera i się rozłącza' ? ' selected' : '') . ">2% odbiera i się rozłącza0</option>
                                <option value='5% Ustalono inny termin'" . ($selectOptionCustumerStatus === '5% Ustalono inny termin' ? ' selected' : '') . ">5% Ustalono inny termin</option>
                                  <option value='6% Przypomnieć o fakturze + wysłać mail o fakturze'" . ($selectOptionCustumerStatus === '6% Przypomnieć o fakturze + wysłać mail o fakturze' ? ' selected' : '') . ">6% Przypomnieć o fakturze + wysłać mail o fakturze</option>
                                        <option value='7% Wysłany mail ws. faktury z terminali'" . ($selectOptionCustumerStatus === '7% Wysłany mail ws. faktury z terminali' ? ' selected' : '') . ">7% Wysłany mail ws. faktury z terminali</option>
                            <option value='10% Omówić potrzeby'" . ($selectOptionCustumerStatus === '10% Omówić potrzeby' ? ' selected' : '') . ">10% Omówić potrzeby</option>
                                 <option value='11% Omówić aktualne koszty'" . ($selectOptionCustumerStatus === '11% Omówić aktualne koszty' ? ' selected' : '') . ">11% Omówić aktualne koszty</option>

                            <option value='14% Przygotować kalkulator'" . ($selectOptionCustumerStatus === '14% Przygotować kalkulator' ? ' selected' : '') . ">14% Przygotować kalkulator</option>
                            <option value='18% Przedstawić ofertę'" . ($selectOptionCustumerStatus === '18% Przedstawić ofertę' ? ' selected' : '') . ">18% Przedstawić ofertę</option>
                            <option value='41% Kliknął w ofertę'" . ($selectOptionCustumerStatus === '41% Kliknął w ofertę' ? ' selected' : '') . ">41% Kliknął w ofertę</option>
                              <option value='42% Umówione spotkanie'" . ($selectOptionCustumerStatus === '42% Umówione spotkanie' ? ' selected' : '') . ">42% Umówione spotkanie</option>
                                <option value='43% Poprosił o kontakt'" . ($selectOptionCustumerStatus === '43% Poprosił o kontakt' ? ' selected' : '') . ">43% Poprosił o kontakt</option>
                                   <option value='70% Czas na decyzję'" . ($selectOptionCustumerStatus === '70% Czas na decyzję' ? ' selected' : '') . ">70% Czas na decyzję</option>
                                       <option value='80% Chce podpisać umowę'" . ($selectOptionCustumerStatus === '80% Chce podpisać umowę' ? ' selected' : '') . ">80% Chce podpisać umowę</option>
                                         <option value='100% Wysłać dokumenty do klienta'" . ($selectOptionCustumerStatus === '100% Wysłać dokumenty do klienta' ? ' selected' : '') . ">100% Wysłać dokumenty do klienta</option>

                                            <option value='100% Wysłano sms lub maila ws. aktualizacji danych z dowodu'" . ($selectOptionCustumerStatus === '100% Wysłano sms lub maila ws. aktualizacji danych z dowodu' ? ' selected' : '') . ">100% Wysłano sms lub maila ws. aktualizacji danych z dowodu</option>
                                            
                                            <option value='100% Przygotować aneksy na zmianę warunków'" . ($selectOptionCustumerStatus === '100% Przygotować aneksy na zmianę warunków' ? ' selected' : '') . ">100% Przygotować aneksy na zmianę warunków</option>
                                          <option value='100% Wysłano dokumenty do podpisu'" . ($selectOptionCustumerStatus === '100% Wysłano dokumenty do podpisu' ? ' selected' : '') . ">100% Wysłano dokumenty do podpisu</option>
                                            <option value='100% Dokumenty Podpisane przez klienta'" . ($selectOptionCustumerStatus === '100% Dokumenty Podpisane przez klienta' ? ' selected' : '') . ">100% Dokumenty Podpisane przez klienta</option>
                                           <option value='100% Czekanie na dokumenty od klienta'" . ($selectOptionCustumerStatus === '100% Czekanie na dokumenty od klienta' ? ' selected' : '') . ">100% Czekanie na dokumenty od klienta</option>
  <option value='100% Wysłano dokumenty do weryfikacji'" . ($selectOptionCustumerStatus === '100% Wysłano dokumenty do weryfikacji' ? ' selected' : '') . ">100% Wysłano dokumenty do weryfikacji</option>
    <option value='100% Dokumenty wprowadzone'" . ($selectOptionCustumerStatus === '100% Dokumenty wprowadzone' ? ' selected' : '') . ">100% Dokumenty wprowadzone</option>
     <option value='100% Lista VIP faktura eservice rekomendacje'" . ($selectOptionCustumerStatus === '100% Lista VIP faktura eservice rekomendacje' ? ' selected' : '') . ">100% Lista VIP faktura eservice rekomendacje</option>
    
  <option value='100% Pobrać rekomendacje'" . ($selectOptionCustumerStatus === '100% Pobrać rekomendacje' ? ' selected' : '') . ">100% Pobrać rekomendacje</option>
    <option value='100% Lista VIP Pobrać rekomendacje'" . ($selectOptionCustumerStatus === '100% Lista VIP Pobrać rekomendacje' ? ' selected' : '') . ">100% Lista VIP Pobrać rekomendacje</option>
        <option value='100% Lista VIP'" . ($selectOptionCustumerStatus === '100% Lista VIP' ? ' selected' : '') . ">100% Lista VIP</option>

      <option value='100% Wysłano do eservice do przekazania opiekunowi'" . ($selectOptionCustumerStatus === '100% Wysłano do eservice do przekazania opiekunowi' ? ' selected' : '') . ">100% Wysłano do eservice do przekazania opiekunowi</option>
           <option value='100% Przejęcie nowych punktów'" . ($selectOptionCustumerStatus === '100% Przejęcie nowych punktów' ? ' selected' : '') . ">100% Przejęcie nowych punktów</option>
                        </select>
                          <input class='js-date-time-local' type='datetime-local' name='fields[171]' value='" . htmlspecialchars($row['field_value_171'], ENT_QUOTES, 'UTF-8') . "'placeholder='Data kontaktu'>
                   <textarea class='textarea' name='fields[116]' rows='10' cols='30'>" . htmlspecialchars($combinedValue, ENT_QUOTES, 'UTF-8') . "</textarea>
                    <button class='js-save-button' type='button'>Zapisz</button>
                        <button class='js-delete-button' type='button'  data-sid='" . htmlspecialchars($row['sid'], ENT_QUOTES, 'UTF-8') . "'>Delete</button>
                
                      
                       
                          
                  
                        <input name='mlid' type='hidden' value='231' />
                        <input name='req' type='hidden' value='email' />
                        <input name='token' type='hidden' value='da945ba7449d1e092316ba46f044f0b134483b6b' />
                        <input name='coregister' type='hidden' value='' />
                       

                </form>
                 <button class='js-save-button-date-to-database' type='button'>Zapisz tylko do bazy</button>
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