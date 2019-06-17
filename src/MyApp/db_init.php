<?php 
include_once("db_con.php");
$link = DB_con();
$deckBrands = array(
    'Real', 'Palace', 'Jart', 'Element', 'Polar', 'Santa Cruz', 'Flip', 'Girl', 'Anti Hero', 'Sour', 'EMillion', 'Baker', 'Toy Machine',                         'Almost', 'Sk8mafia', 'Globe Decks');
$wheelBrands = array('Spiritfire', 'Bones', 'Ricta', 'OJ Wheels', 'Wayward');
$infos = array('ISHOD 8.25', 'JAKE 8.38', 'DENNIS 8.06', 'Mike Carrol 8.37', 'Rick Howard 8.0');
$prices = array('52.42', '55.63', '38.51', '59.91', '64.19',);

$queries[] = "CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT,
    product VARCHAR(15) NOT NULL,
    info TEXT,
    price INT NOT NULL,
    which INT NOT NULL,
    PRIMARY KEY(id));";

/*$queries[] = "INSERT INTO products VALUES(
    NULL, 'Almost', 'Daewon Song 8.25 inch', 150, 2);";*/

for ($i=0; $i < 14; $i++) { 
    $queries[] = "INSERT INTO products VALUES(
        NULL, '{$deckBrands[$i]}', '{$prices[rand(0,4)]}', '{$infos[rand(0,4)]}');";
}

foreach ($queries as $query) {
    $link->query($query);
}

$link->close();