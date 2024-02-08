<?php
$comidasJSON = '../../data/comidas.json';

function getFoods() {
    global $comidasJSON;
    
    $comidas = json_decode(file_get_contents($comidasJSON), true);
    return $comidas;
}

function getFoodByName($food) {
    global $comidasJSON;

    $comidas = json_decode(file_get_contents($comidasJSON), true);
    $comida = array_filter($comidas, function($comida) use ($food) {
        return strpos(strtolower($comida['name']), strtolower($food)) !== false;
    });

    // Reindexar las claves del array, es decir, reordenar los elementos del array para que las claves sean números 
    // consecutivos empezando desde 0.
    return array_values($comida);
}

function addFood($body) {
    global $comidasJSON;

    $comidas = json_decode(file_get_contents($comidasJSON), true);
    array_push($comidas, $body);
    file_put_contents (
        $comidasJSON, 
        json_encode($comidas, 
            JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES
        )
    );

    return json_encode($body);
}