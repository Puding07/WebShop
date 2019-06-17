<?php 
function DB_con() {
    $host = "localhost";
    $user = "root";
    $pw = "TZSV779870";
    $db = "skateshop";
    $link = mysqli_connect($host, $user, $pw, $db);
    if (!$link) {
        echo "Error when connecting to the Database!";
        exit;
    }
    return $link;
}