<?php
include '/php/config.php';
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


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />


    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/section.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/form.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/headers.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/footer.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/button.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/body.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/container.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/img.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/styles.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/paragraf.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/list.css?B2">
    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/print.css?B2">

    <link rel="stylesheet" href="https://terminal.terminaleservice.pl/css/responsive-styles.css?B2">
    <script defer src="https://terminal.terminaleservice.pl/js/script_edytor_substrybenta.js?B2"></script>


    <title>Prosta Strona</title>
</head>
<body>
<button class="js-button-show-hidden">Pokaż ukryte</button>
<button class="js-button-hidden-contact">Ukryj kontakty</button>
<h1>Rejestracja</h1>
  <!-- Formularz rejestracyjny -->
  <h1>Rejestracja</h1>


  
<form action="/php/register.php" method="post">
    <label for="phone">Telefon:</label>
    <input type="text" id="phone" name="phone" value="<?php echo isset($phone) ? htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') : ''; ?>" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="<?php echo isset($email) ? htmlspecialchars($email, ENT_QUOTES, 'UTF-8') : ''; ?>">

    <label for="name_first">Imię:</label>
    <input type="text" id="name_first" name="name_first" value="<?php echo isset($name_first) ? htmlspecialchars($name_first, ENT_QUOTES, 'UTF-8') : ''; ?>">

    <br>
    <button type="submit">Zarejestruj się</button>
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
    <form accept-charset="UTF-8" action="https://mail.korneliuszrduch.pl/subscribe.php" method="POST">
            <section class="section section--oneColumn">
                <section class="section section--product">Adres email</section>
                <section class="section section--productValue"><input class="section__input" name="email" type="text"
                        value="[[email]]" placeholder="Adres e-mail" data-placeholder="Adres e-mail" />
                </section>
            </section>
            <button class="button button--sign" type="submit"> ZAPISZ LUB WYGENERUJ DANE </button>
            <input name="mlid" type="hidden" value="231" />
            <input name="req" type="hidden" value="email" />
            <input name="token" type="hidden" value="da945ba7449d1e092316ba46f044f0b134483b6b" />
            <input name="coregister" type="hidden" value="" />

        </form>

        <a class="button button--call" href="tel:[[phone]]">Zadzwoń</a>
</body>
</html>
