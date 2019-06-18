<?php
$port = 8080;
function stest() {
    global  $port;
    $fp = @fsockopen('localhost', $port);
    if (!$fp) {
        print 'Port not in use on ' . $port . PHP_EOL;
        return true;
    } else {
        fclose($fp);
        print 'Port in use on ' . $port . PHP_EOL;
        $port++;
        stest();
    }
}

stest();