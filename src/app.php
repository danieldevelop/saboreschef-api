<?php
// Habilitamos CORS (Cross-Origin Resource Sharing) para permitir peticiones desde cualquier origen.
header("Access-Control-Allow-Origin: *");

// Configuramos el encabezado para indicar que la respuesta sea un JSON.
header("Content-Type: application/json; chartset=UFT-8");

// Se verifica el método u verbo de solicitud.
$method = $_SERVER['REQUEST_METHOD'];