<?php
include '/php/config.php';
?>

<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">




    <!--  
    <link rel="stylesheet" href="css/section.css">
    <link rel="stylesheet" href="css/form.css">
    <link rel="stylesheet" href="css/list.css">
    <link rel="stylesheet" href="css/button.css">
    <link rel="stylesheet" href="css/body.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="css/label.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive-styles.css">
    <link rel="icon" href="./images">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
     <script defer src="js/script_edytor_substrybenta"></script>

-->
<script defer src="https://terminal.terminaleservice.pl/skrypty/jquery.min.js"></script>
 <script defer src="https://terminal.terminaleservice.pl/skrypty/jquery.cookie.js"></script>
 <script defer src="https://terminal.terminaleservice.pl/skrypty/obslugalinkowpartnerskich.js"></script>
 <script defer src="https://terminal.terminaleservice.pl/skrypty/linkipartnerskie.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />


    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/section.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/form.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/headers.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/footer.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/button.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/body.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/container.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/img.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/styles.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/paragraf.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/list.css?B56">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/print.css?B56">

    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/responsive-styles.css?B56">
    <script defer src="https://terminal.terminaleservice.pl/js/crm.js?B56"></script>


    <title>Prosta Strona</title>
</head>

<body>
    <button class="js-button-show-hidden">Pokaż ukryte</button>
    <button class="js-button-hidden-contact">Ukryj kontakty</button>




   

    <h1>Rejestracja po telefonie</h1>

    <form action="/php/register.php" method="post">

        <label for="name_first">Imię:</label>
        <input type="text" id="name_first" name="name_first"
            value="<?php echo isset($_SESSION['name_first']) ? htmlspecialchars($_SESSION['name_first'], ENT_QUOTES, 'UTF-8') : ''; ?>">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"
            value="<?php echo isset($_SESSION['email']) ? htmlspecialchars($_SESSION['email'], ENT_QUOTES, 'UTF-8') : ''; ?>">

        <label for="phone">Telefon:</label>
        <input type="text" id="phone" name="phone"
            value="<?php echo isset($_SESSION['phone']) ? htmlspecialchars($_SESSION['phone'], ENT_QUOTES, 'UTF-8') : ''; ?>"
            required>





        <br>
        <button type="submit">Zarejestruj się po telefonie</button>
    </form>



    <h1>Rejestracja po mailu</h1>
    <?php
// Wyświetlanie komunikatów
if (isset($_SESSION['message'])) {
    echo "<p>" . $_SESSION['message'] . "</p>";
    unset($_SESSION['message']);
}

$editMode = isset($_GET['edit']) && $_GET['edit'] == 1; // Sprawdzanie trybu edycji
?>
<form action="/php/register_mail.php" method="post">

    <label for="name_first">Imię:</label>
    <input class="js-fname" type="text" id="name_first" name="name_first"
        value="<?php echo isset($_SESSION['name_first']) ? htmlspecialchars($_SESSION['name_first'], ENT_QUOTES, 'UTF-8') : ''; ?>">

    <label for="email">Email:</label>
    <input class = "js-email" type="email" id="email" name="email"
        value="<?php echo isset($_SESSION['email']) ? htmlspecialchars($_SESSION['email'], ENT_QUOTES, 'UTF-8') : ''; ?>"required >

    <label for="phone">Telefon:</label>
    <input class="js-phone" type="text" id="phone" name="phone"
        value="<?php echo isset($_SESSION['phone']) ? htmlspecialchars($_SESSION['phone'], ENT_QUOTES, 'UTF-8') : ''; ?>">





    <br>
    <button type="submit" name="<?php echo $editMode ? 'update' : 'register'; ?>">
        <?php echo $editMode ? 'Zaktualizuj dane' : 'Zarejestruj'; ?>
    </button>
</form>

<button class="js-read-phone-url">zaczytaj telefon & imię z url</button>

<?php
    if (isset($_SESSION['message'])) {
        echo "<p>" . htmlspecialchars($_SESSION['message'], ENT_QUOTES, 'UTF-8') . "</p>";
        unset($_SESSION['message']);
    }
    ?>
    
    <form accept-charset="UTF-8" action="https://mail.korneliuszrduch.pl/subscribe.php" method="POST">
            <section class="section section--oneColumn">
                <section class="section section--product">Adres email</section>
                <section class="section section--productValue"><input class="js-email" name="email" type="text"
                        value="" placeholder="Adres e-mail" data-placeholder="Adres e-mail" />
                </section>
            </section>
            <button class="button button--sign" type="submit"> Wygeneruj dane </button>
            <input name="mlid" type="hidden" value="231" />
            <input name="req" type="hidden" value="email" />
            <input name="token" type="hidden" value="da945ba7449d1e092316ba46f044f0b134483b6b" />
            <input name="coregister" type="hidden" value="" />

        </form>

    <?php
    // Czyszczenie danych sesji po ich użyciu
    unset($_SESSION['name_first']);
    unset($_SESSION['email']);
    unset($_SESSION['phone']);
    ?>

<input class="js-time-for-show" type="text" value="0.1" placeholder="Liczba minut przed pokazaniem kontaktu"/>


<button class="button js-button-show-contacs" type="button"> Wyświetl kontakty przed czasem</button>
<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FWarsaw&bgcolor=%23ffffff&showPrint=0&mode=WEEK&src=a29ybmVsaXVzei5yZHVjaEBnbWFpbC5jb20&color=%23039BE5" style="border:solid 1px #777" width="1200" height="600" frameborder="0" scrolling="no"></iframe>

<form method="POST" action="../php/display_users.php">
    <label for="number_of_sids">Liczba SID-ów do wyświetlenia:</label>
    <input type="number" id="number_of_sids" name="number_of_sids" value="10" min="1" required>

    <fieldset>
        <legend>Sortowanie:</legend>
        <div>
            <label for="sort_by_sid_asc">
                <input type="radio" id="sort_by_sid_asc" name="sort_by_sid" value="ASC" />
                SID rosnąco
            </label>
            <label for="sort_by_sid_desc">
                <input type="radio" id="sort_by_sid_desc" name="sort_by_sid" value="DESC" />
                SID malejąco
            </label>
        </div>
        <div>
            <label for="sort_by_date_asc">
                <input type="radio" id="sort_by_date_asc" name="sort_by_date" value="ASC" />
                Data rosnąco
            </label>
            <label for="sort_by_date_desc">
                <input type="radio" id="sort_by_date_desc" name="sort_by_date" value="DESC" />
                Data malejąco
            </label>
        </div>
    </fieldset>

    <button type="submit">Zastosuj sortowanie</button>
</form>






    <h1>Lista Użytkowników</h1>
    <table>
        <tr>
            <th>Imię</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Uwagi</th>
            <th>Data next contact</th>
        </tr>
        <?php include 'php/display_users.php'; ?>
    </table>
 
</body>

</html>
