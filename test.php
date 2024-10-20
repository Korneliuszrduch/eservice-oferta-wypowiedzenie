<?php
if (isset($_GET['mail']) && isset($_GET['phone'])) {
    $email = htmlspecialchars($_GET['mail'], ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($_GET['phone'], ENT_QUOTES, 'UTF-8');
    echo "<p>Email: $email</p>";
    echo "<p>Telefon: $phone</p>";
}
?>

<html lang="pl"></html>