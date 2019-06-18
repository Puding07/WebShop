<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use MyApp\Chat;

    require dirname(__DIR__) . '/vendor/autoload.php';
    // Check for free port!!
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

    $server = IoServer::factory(
        new HttpServer(
            new WsServer(
                new Chat()
            )
        ),
        $port
    );

    print 'Server running on port: ' . $port . PHP_EOL;
    $server->run();